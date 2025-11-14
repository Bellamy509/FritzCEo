"use client";

import type { LucideIcon } from "lucide-react";
import {
  Asterisk,
  BookOpen,
  Briefcase,
  Mail,
  Menu,
  Mic,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface Solution {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const DATA_SOLUTIONS: Solution[] = [
  {
    title: "Defrilex Services",
    description: "Interpretation, translation & customer support solutions.",
    href: "#",
    icon: Briefcase,
  },
  {
    title: "AI Thinking Lab",
    description: "AI tools to help businesses work smarter.",
    href: "#",
    icon: Asterisk,
  },
  {
    title: "Speaking Services",
    description: "Talks on entrepreneurship, AI & business growth.",
    href: "#",
    icon: Mic,
  },
];

interface Platfrom {
  title: string;
  href: string;
  icon: LucideIcon;
}

const DATA_PLATFORM_CASE: Platfrom[] = [
  {
    title: "Healthcare",
    href: "#",
    icon: Briefcase,
  },
  {
    title: "Legal Services",
    href: "#",
    icon: Briefcase,
  },
  {
    title: "Government",
    href: "#",
    icon: Briefcase,
  },
  {
    title: "Business AI",
    href: "#",
    icon: Asterisk,
  },
];

interface Resource {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const DATA_RESOURCES: Resource[] = [
  {
    title: "Blog",
    description: "Thoughts on entrepreneurship and technology",
    href: "/blog",
    icon: BookOpen,
  },
  {
    title: "AI & Technology",
    description: "What I'm learning about AI and how we use it",
    href: "/resources/ai-technology",
    icon: Asterisk,
  },
  {
    title: "Entrepreneurship",
    description: "Real experiences from building businesses",
    href: "/blog",
    icon: Briefcase,
  },
  {
    title: "Speaking",
    description: "Information about speaking engagements",
    href: "#",
    icon: Mic,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="fixed inset-x-0 top-0 z-20 bg-stone-100">
      <div className="container max-w-7xl mx-auto px-4 ">
        <NavigationMenu className="min-w-full">
          <div className="flex w-full items-center justify-between gap-12 py-4">
            <a href="/" className="flex items-center gap-2">
              <span className="font-serif text-xl font-semibold tracking-wide text-stone-900 lg:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Fritz Gerald Zephirin
              </span>
            </a>
            <NavigationMenuList className="hidden lg:flex">
              <Button variant="ghost" asChild>
                <a href="/">Home</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="/about">About</a>
              </Button>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-stone-100">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[760px] p-4">
                  <div className="flex items-start justify-between">
                    <div className="max-w-[760px] flex-1">
                      <div className="text-xs tracking-widest text-muted-foreground">
                        What I Do
                      </div>
                      <div className="grid grid-rows-1 gap-6">
                        {DATA_SOLUTIONS.map((solution, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={solution.href}
                            className="group flex flex-row items-center first:mt-4 hover:bg-transparent"
                          >
                            <div className="mr-4 rounded-lg bg-muted p-4 shadow-sm">
                              <solution.icon className="size-6 text-muted-foreground transition-all fade-in group-hover:text-foreground" />
                            </div>
                            <div className="flex flex-col gap-1 text-sm">
                              <div className="font-medium text-foreground">
                                {solution.title}
                              </div>
                              <div className="text-sm font-normal text-muted-foreground">
                                {solution.description}
                              </div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                    <div className="max-w-[760px] flex-1">
                      <div className="text-xs tracking-widest text-muted-foreground">
                        Learn More
                      </div>
                      <div className="mt-4 gap-6">
                        {DATA_RESOURCES.map((solution, index) => (
                          <NavigationMenuLink
                            key={index}
                            href={solution.href}
                            className="group flex flex-row items-center hover:bg-transparent"
                          >
                            <div className="mr-4 rounded-lg bg-muted p-2 shadow-sm">
                              <solution.icon className="size-4 text-muted-foreground transition-all fade-in group-hover:text-foreground" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="text-sm font-medium">
                                {solution.title}
                              </div>
                            </div>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <div className="hidden items-center gap-4 lg:flex">
              <Button className="rounded-full" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 lg:hidden">
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu (Root) */}
          {open && (
            <div className="absolute inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t border-border bg-background lg:hidden">
              <div>
                <a
                  href="/"
                  className="flex w-full items-center border-b-2 border-dashed px-8 py-4 text-left"
                >
                  <span className="flex-1">Home</span>
                  <span className="shrink-0"></span>
                </a>
                <a
                  href="/about"
                  className="flex w-full items-center border-b-2 border-dashed px-8 py-4 text-left"
                >
                  <span className="flex-1">About</span>
                  <span className="shrink-0"></span>
                </a>
                <a
                  href="/blog"
                  className="flex w-full items-center border-b-2 border-dashed px-8 py-4 text-left"
                >
                  <span className="flex-1">Blog</span>
                  <span className="shrink-0"></span>
                </a>
              </div>
              <div className="mx-[2rem] mt-auto flex flex-col gap-4 py-12">
                <span className="text-center">
                  Let&apos;s connect and <b>work together</b>
                </span>
                <Button className="relative" size="lg" asChild>
                  <a href="/contact">Get In Touch</a>
                </Button>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar };