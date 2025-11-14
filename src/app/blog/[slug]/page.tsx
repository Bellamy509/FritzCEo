"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: {
    id: number;
    title: string;
    description: string;
    slug: string;
  } | null;
};

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!params.slug) return;

    fetch(`/api/posts/${params.slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Post not found");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-stone-900"></div>
          <p className="mt-4 text-stone-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container max-w-4xl mx-auto px-6 py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Post Not Found
            </h1>
            <p className="text-lg text-stone-600 mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <article className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Button
            variant="ghost"
            asChild
            className="mb-8 -ml-4 hover:bg-stone-100"
          >
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Category & Metadata */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <span className="font-medium text-orange-600">
              {post.category?.title || "Uncategorized"}
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed mb-12 pb-12 border-b border-stone-200">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-lg prose-stone max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-stone-700 mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Category Tag at Bottom */}
          {post.category && (
            <div className="mt-16 pt-8 border-t border-stone-200">
              <p className="text-sm text-stone-500 mb-2">Filed under:</p>
              <div className="inline-block px-4 py-2 bg-stone-100 rounded-full text-sm font-medium text-stone-700">
                {post.category.title}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-stone-200">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Posts
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <FooterSection />
    </div>
  );
}
