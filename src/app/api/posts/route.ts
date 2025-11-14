import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { posts, categories } from '@/db/schema';
import { eq, like, or, desc, and } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Single post by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const result = await db
        .select({
          id: posts.id,
          title: posts.title,
          slug: posts.slug,
          excerpt: posts.excerpt,
          content: posts.content,
          categoryId: posts.categoryId,
          date: posts.date,
          readTime: posts.readTime,
          published: posts.published,
          createdAt: posts.createdAt,
          updatedAt: posts.updatedAt,
          category: {
            id: categories.id,
            title: categories.title,
            description: categories.description,
            slug: categories.slug,
            createdAt: categories.createdAt,
          },
        })
        .from(posts)
        .leftJoin(categories, eq(posts.categoryId, categories.id))
        .where(and(eq(posts.id, parseInt(id)), eq(posts.published, true)))
        .limit(1);

      if (result.length === 0) {
        return NextResponse.json({ 
          error: 'Post not found',
          code: 'POST_NOT_FOUND' 
        }, { status: 404 });
      }

      return NextResponse.json(result[0], { status: 200 });
    }

    // List posts with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db
      .select({
        id: posts.id,
        title: posts.title,
        slug: posts.slug,
        excerpt: posts.excerpt,
        content: posts.content,
        categoryId: posts.categoryId,
        date: posts.date,
        readTime: posts.readTime,
        published: posts.published,
        createdAt: posts.createdAt,
        updatedAt: posts.updatedAt,
        category: {
          id: categories.id,
          title: categories.title,
          description: categories.description,
          slug: categories.slug,
          createdAt: categories.createdAt,
        },
      })
      .from(posts)
      .leftJoin(categories, eq(posts.categoryId, categories.id))
      .$dynamic();

    // Always filter for published posts
    if (search) {
      const searchCondition = or(
        like(posts.title, `%${search}%`),
        like(posts.excerpt, `%${search}%`),
        like(posts.content, `%${search}%`)
      );
      query = query.where(and(eq(posts.published, true), searchCondition));
    } else {
      query = query.where(eq(posts.published, true));
    }

    const results = await query
      .orderBy(desc(posts.date))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, categoryId, date, readTime, published } = body;

    // Validate required fields
    if (!title || !title.trim()) {
      return NextResponse.json({ 
        error: "Title is required",
        code: "MISSING_TITLE" 
      }, { status: 400 });
    }

    if (!slug || !slug.trim()) {
      return NextResponse.json({ 
        error: "Slug is required",
        code: "MISSING_SLUG" 
      }, { status: 400 });
    }

    if (!excerpt || !excerpt.trim()) {
      return NextResponse.json({ 
        error: "Excerpt is required",
        code: "MISSING_EXCERPT" 
      }, { status: 400 });
    }

    if (!content || !content.trim()) {
      return NextResponse.json({ 
        error: "Content is required",
        code: "MISSING_CONTENT" 
      }, { status: 400 });
    }

    if (categoryId === undefined || categoryId === null) {
      return NextResponse.json({ 
        error: "Category ID is required",
        code: "MISSING_CATEGORY_ID" 
      }, { status: 400 });
    }

    if (isNaN(parseInt(categoryId))) {
      return NextResponse.json({ 
        error: "Category ID must be a valid integer",
        code: "INVALID_CATEGORY_ID" 
      }, { status: 400 });
    }

    if (!date || !date.trim()) {
      return NextResponse.json({ 
        error: "Date is required",
        code: "MISSING_DATE" 
      }, { status: 400 });
    }

    if (!readTime || !readTime.trim()) {
      return NextResponse.json({ 
        error: "Read time is required",
        code: "MISSING_READ_TIME" 
      }, { status: 400 });
    }

    const timestamp = new Date().toISOString();

    const newPost = await db.insert(posts)
      .values({
        title: title.trim(),
        slug: slug.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        categoryId: parseInt(categoryId),
        date: date.trim(),
        readTime: readTime.trim(),
        published: published ?? false,
        createdAt: timestamp,
        updatedAt: timestamp,
      })
      .returning();

    return NextResponse.json(newPost[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if post exists
    const existing = await db.select()
      .from(posts)
      .where(eq(posts.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Post not found',
        code: 'POST_NOT_FOUND' 
      }, { status: 404 });
    }

    const body = await request.json();
    const { title, slug, excerpt, content, categoryId, date, readTime, published } = body;

    const updates: any = {
      updatedAt: new Date().toISOString(),
    };

    if (title !== undefined) updates.title = title.trim();
    if (slug !== undefined) updates.slug = slug.trim();
    if (excerpt !== undefined) updates.excerpt = excerpt.trim();
    if (content !== undefined) updates.content = content.trim();
    if (categoryId !== undefined) {
      if (isNaN(parseInt(categoryId))) {
        return NextResponse.json({ 
          error: "Category ID must be a valid integer",
          code: "INVALID_CATEGORY_ID" 
        }, { status: 400 });
      }
      updates.categoryId = parseInt(categoryId);
    }
    if (date !== undefined) updates.date = date.trim();
    if (readTime !== undefined) updates.readTime = readTime.trim();
    if (published !== undefined) updates.published = published;

    const updated = await db.update(posts)
      .set(updates)
      .where(eq(posts.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if post exists
    const existing = await db.select()
      .from(posts)
      .where(eq(posts.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json({ 
        error: 'Post not found',
        code: 'POST_NOT_FOUND' 
      }, { status: 404 });
    }

    const deleted = await db.delete(posts)
      .where(eq(posts.id, parseInt(id)))
      .returning();

    return NextResponse.json({ 
      message: 'Post deleted successfully',
      post: deleted[0] 
    }, { status: 200 });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error as Error).message 
    }, { status: 500 });
  }
}