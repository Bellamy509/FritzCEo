import { ChevronRight, MoveDown } from "lucide-react";
import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 overflow-hidden flex items-center">
      <div className="container max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-28 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-12 relative z-10">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-['Playfair_Display'] text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] font-extrabold tracking-tighter leading-[0.85]">
                Hi, I&apos;m{" "}
                <span className="block mt-3 lg:mt-4 relative inline-block">
                  Fritz
                  <span className="text-orange-600">.</span>
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-orange-600"></div>
                </span>
              </h1>
            </div>

            {/* Opening Statement - Prominent */}
            <div className="relative pl-6 border-l-4 border-orange-600">
              <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-semibold leading-tight tracking-tight">
                I build businesses that help people communicate better and work smarter.
              </p>
            </div>

            {/* Body Text */}
            <div className="space-y-5 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl">
              <p>
                I started <span className="text-foreground font-bold">Defrilex</span> in 2021 to break down language barriers through interpretation and translation services for healthcare, legal, and government organizations.
              </p>
              <p>
                Recently, I launched <span className="text-foreground font-bold">AI Thinking Lab</span> to help businesses use AI to automate their daily work.
              </p>
              <p className="text-sm md:text-base italic text-foreground/65 pt-2">
                Sometimes I speak at events about entrepreneurship and technology, but mostly, I&apos;m just trying to help where I can.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="h-[4.5rem] px-14 rounded-none bg-foreground text-background hover:bg-foreground/95 hover:scale-[1.02] transition-all duration-300 font-bold text-lg tracking-wide shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] group relative overflow-hidden"
                asChild
              >
                <a href="/contact" className="flex items-center gap-3 relative z-10">
                  <span>Contact Me</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10"></div>
                </a>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden lg:flex items-center gap-3 text-sm font-medium text-muted-foreground pt-6">
              <MoveDown className="w-5 h-5 animate-bounce" />
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="relative lg:justify-self-end w-full max-w-lg mx-auto lg:mx-0">
            {/* Decorative Elements - Repositioned */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full border-[3px] border-foreground z-10"></div>
            <div className="absolute top-[15%] -left-12 w-16 h-16 bg-orange-600 rotate-45 z-10 shadow-lg"></div>
            
            {/* Portrait Frame */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full aspect-[3/4] bg-white border-[14px] border-white shadow-[0_25px_70px_rgba(0,0,0,0.35)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.45)] transition-all duration-700 group">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Fritz-08-1762987401655.jpg?width=8000&height=8000&resize=contain"
                  alt="Fritz Gerald Zepherin - Entrepreneur & Founder"
                  fill
                  className="object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 contrast-[1.15] brightness-[1.02]"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 550px"
                />
                
                {/* Orange corner accent - Enhanced */}
                <div className="absolute bottom-0 right-0 w-40 h-40 border-r-[6px] border-b-[6px] border-orange-600 translate-x-6 translate-y-6 opacity-90"></div>
              </div>

              {/* Curved Arrow Doodle - More Prominent */}
              <svg 
                className="absolute -top-24 left-[20%] w-40 h-40 text-foreground opacity-60"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M15 85 Q 35 15, 82 38" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  strokeDasharray="5 3"
                />
                <path 
                  d="M76 33 L 82 38 L 79 45" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              {/* Abstract Shape Accent */}
              <div className="absolute -bottom-12 -right-20 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern - Refined */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #1c1917 1.5px, transparent 1.5px)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-100/40 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export { HeroSection };