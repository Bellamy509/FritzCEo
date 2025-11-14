import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { posts, categories } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        { 
          error: 'Slug parameter is required',
          code: 'MISSING_SLUG'
        },
        { status: 400 }
      );
    }

    // Query post by slug with category join
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
      .where(eq(posts.slug, slug))
      .limit(1);

    if (result.length === 0) {
      return NextResponse.json(
        { 
          error: 'Post not found',
          code: 'POST_NOT_FOUND'
        },
        { status: 404 }
      );
    }

    const post = result[0];

    // Check if post is published
    if (!post.published) {
      return NextResponse.json(
        { 
          error: 'Post not found',
          code: 'POST_NOT_FOUND'
        },
        { status: 404 }
      );
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error: ' + (error instanceof Error ? error.message : String(error))
      },
      { status: 500 }
    );
  }
}