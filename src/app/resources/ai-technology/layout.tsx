"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";

const subPages = [
  {
    name: "AI Agent Frameworks",
    href: "/resources/ai-technology/frameworks",
    description: "Production-ready open-source AI agent frameworks"
  },
  {
    name: "China AI Landscape",
    href: "/resources/ai-technology/china-ai-landscape",
    description: "Interactive brief on leading AI labs for partnership analysis"
  }
];

export default function AITechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isOverviewPage = pathname === "/resources/ai-technology";

  return (
    <>
      <Navbar />
      
      {/* Only show header and sub-nav on sub-pages, not on overview */}
      {!isOverviewPage && (
        <>
          {/* AI & Technology Section Header */}
          <div className="bg-white border-b border-stone-200">
            <div className="container max-w-7xl mx-auto px-6 pt-24 pb-8">
              <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-2">
                AI & Technology
              </h1>
              <p className="text-stone-600 text-lg">
                Exploring artificial intelligence, frameworks, and emerging technologies
              </p>
            </div>

            {/* Sub-Navigation */}
            <div className="container max-w-7xl mx-auto px-6">
              <nav className="flex space-x-8 overflow-x-auto">
                {subPages.map((page) => {
                  const isActive = pathname === page.href || pathname?.startsWith(page.href + '/');
                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        isActive
                          ? "border-stone-900 text-stone-900"
                          : "border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300"
                      }`}
                    >
                      {page.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Page Content */}
      {children}
    </>
  );
}