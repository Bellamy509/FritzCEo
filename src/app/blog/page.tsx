"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FooterSection from "@/components/FooterSection";
import { useEffect, useState } from "react";
import Link from "next/link";

type Category = {
  id: number;
  title: string;
  description: string;
  slug: string;
};

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: {
    title: string;
    slug: string;
  } | null;
};

export default function BlogPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingPosts, setIsLoadingPosts] = useState(true);

  useEffect(() => {
    // Fetch categories
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoadingCategories(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setIsLoadingCategories(false);
      });

    // Fetch posts
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoadingPosts(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setIsLoadingPosts(false);
      });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Redesigned */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-stone-50">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          {/* Heading with Elegant Underline */}
          <div className="mb-10">
            <h1 className="font-['Playfair_Display'] text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 inline-block relative">
              Blog
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-orange-600"></div>
            </h1>
          </div>

          {/* Primary Description */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 leading-relaxed mb-8 font-light max-w-3xl mx-auto">
            A journal of ideas, lessons, and experiments from my life building companies, exploring artificial intelligence, and growing as a leader.
          </p>

          {/* Secondary Paragraph - Multi-line */}
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <p className="font-medium">
              I write to think. I write to learn. I write to share.
            </p>
            <p>
              No polish. No perfect answers. Just honest reflections on what I'm figuring out along the way — technology, business, leadership, and becoming who I'm called to be.
            </p>
          </div>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="border-t border-stone-200"></div>

      {/* Topics Section - Redesigned */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          {/* Section Heading with Elegant Underline */}
          <div className="mb-16 text-center">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 inline-block relative">
              Topics I Write About
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-orange-600"></div>
            </h2>
            <p className="text-lg text-muted-foreground mt-8 max-w-3xl mx-auto">
              A collection of themes I explore as I build, learn, and grow — professionally, personally, and spiritually.
            </p>
          </div>

          {/* Topics Grid */}
          {isLoadingCategories ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-stone-900"></div>
              <p className="mt-4 text-stone-600">Loading topics...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Card 
                  key={category.id} 
                  className="border border-stone-200 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white group"
                >
                  <CardHeader className="space-y-3 p-8">
                    <CardTitle className="font-['Playfair_Display'] text-2xl md:text-3xl font-normal tracking-tight group-hover:text-orange-600 transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-foreground/70">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Recent Posts Section - Redesigned */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-4xl mx-auto px-6">
          {/* Section Heading with Elegant Underline */}
          <div className="mb-20 text-center">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 inline-block relative">
              Recent Posts
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-orange-600"></div>
            </h2>
            <p className="text-lg text-muted-foreground mt-8 max-w-2xl mx-auto">
              A selection of ideas, lessons, and insights from my journey — building companies, exploring AI, learning leadership, and growing in faith.
            </p>
          </div>

          {/* Posts Grid */}
          {isLoadingPosts ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-stone-900"></div>
              <p className="mt-4 text-stone-600">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-stone-600 text-lg">No posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-10">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card 
                    className="border border-stone-200 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white group rounded-lg"
                  >
                    <CardHeader className="p-8 md:p-10 space-y-4">
                      {/* Metadata Row */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium text-stone-700">{post.category?.title || "Uncategorized"}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      {/* Title */}
                      <CardTitle className="font-['Playfair_Display'] text-3xl md:text-4xl font-normal tracking-tight group-hover:text-orange-600 transition-colors leading-tight">
                        {post.title}
                      </CardTitle>
                      
                      {/* Excerpt */}
                      <CardDescription className="text-base md:text-lg leading-relaxed text-foreground/70 pt-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}