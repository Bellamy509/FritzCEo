import React from "react";

const FOCUS_AREAS = [
  {
    title: "Human-Centered Innovation",
    description: "Building AI and business systems designed to make people's work more fulfilling, not replace them."
  },
  {
    title: "Leadership Development",
    description: "Coaching and mentoring entrepreneurs to think bigger, act ethically, and lead with vision."
  },
  {
    title: "Global Empowerment",
    description: "Supporting initiatives that expand access to education, opportunity, and entrepreneurship worldwide."
  },
  {
    title: "Faith and Purpose",
    description: "Integrating spiritual wisdom and personal growth principles into leadership and innovation."
  }
];

const FeatureSection = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-gradient-to-b from-white via-stone-50 to-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-stone-50/50 pointer-events-none" />
      
      <div className="container relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 lg:mb-28 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Building a Vision That Connects People and Purpose
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            From leading teams across borders to mentoring young innovators, my work goes beyond building companies—it's about shaping systems that empower people to communicate, collaborate, and create meaningful change.
          </p>
        </div>

        {/* Two-column layout with refined structure */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-28">
          {/* Left: Core principles and focus areas */}
          <div className="space-y-12">
            {/* Core Principles Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/5 to-blue-500/5 rounded-2xl transform transition-all duration-500 group-hover:scale-[1.02]" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/50">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Every project I lead begins with a single principle: 
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] mt-2.5 flex-shrink-0" />
                    <p className="text-lg font-medium text-gray-900">Build with purpose</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] mt-2.5 flex-shrink-0" />
                    <p className="text-lg font-medium text-gray-900">Scale with integrity</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] mt-2.5 flex-shrink-0" />
                    <p className="text-lg font-medium text-gray-900">Serve with empathy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy statement */}
            <div className="pl-6 border-l-2 border-gray-200">
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether it's developing new technologies, guiding entrepreneurs, or bridging cultural and professional divides, I believe innovation is only valuable when it helps people thrive—socially, economically, and spiritually.
              </p>
            </div>
          </div>

          {/* Right: Image with overlay */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/10 via-transparent to-blue-900/10 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/286fb748-748d-4c52-9314-a252bd44762b/generated_images/create-a-modern-inspirational-and-futuri-5613261c-20251113000824.jpg"
                  alt="Modern futuristic illustration representing innovation, leadership, and global impact with sunrise and network connections"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 z-20" />
              </div>
            </div>
          </div>
        </div>

        {/* What I Focus On - Grid layout */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-4">
              What I Focus On
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#1A73E8] to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {FOCUS_AREAS.map((area, index) => (
              <div 
                key={index} 
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background band */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/0 to-[#1A73E8]/0 group-hover:from-[#1A73E8]/5 group-hover:to-blue-600/5 rounded-xl transition-all duration-500" />
                
                <div className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 group-hover:border-[#1A73E8]/20">
                  {/* Index number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#1A73E8] text-white rounded-full flex items-center justify-center text-sm font-medium shadow-md">
                    {index + 1}
                  </div>
                  
                  <h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#1A73E8] transition-colors duration-300">
                    {area.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* Hover accent line */}
                  <div className="h-0.5 bg-gradient-to-r from-[#1A73E8] to-blue-600 mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inspirational Quote with refined styling */}
        <div className="relative">
          {/* Gradient divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          
          <div className="pt-16 pb-8">
            <blockquote className="text-center max-w-4xl mx-auto">
              <div className="relative inline-block">
                {/* Quote marks */}
                <span className="absolute -top-6 -left-8 text-6xl text-[#1A73E8]/20 font-serif">"</span>
                <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 italic px-12 leading-tight">
                  Technology can connect us, but only purpose can unite us.
                </p>
                <span className="absolute -bottom-12 -right-8 text-6xl text-[#1A73E8]/20 font-serif">"</span>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureSection };