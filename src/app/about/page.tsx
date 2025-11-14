"use client";

import { Button } from "@/components/ui/button";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-stone-100 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            Building a Life of Purpose,<br />Innovation, and Impact
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-3xl mb-8">
            Entrepreneur. Innovator. Communicator. Builder.
          </p>
          <p className="text-lg text-stone-600 font-light leading-relaxed max-w-3xl">
            My journey began long before I launched companies, built teams, or stepped into the world of AI and global communications. I was born and raised in Haiti — a place where hardship and hope coexist, and where I learned early that people&apos;s potential is often limited not by talent, but by lack of opportunity and the barriers that separate us.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-32">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="space-y-12">
            <div>
              <p className="text-lg text-stone-600 font-light leading-relaxed mb-6">
                I grew up surrounded by resilience. I watched people fight through obstacles every day, and I saw how deeply language, access, and systems affected their ability to thrive. Those early experiences planted a seed in me:
              </p>
              <div className="border-l-2 border-stone-300 pl-8 space-y-4">
                <p className="text-xl text-stone-700 font-light italic">
                  What if I could build bridges where walls existed?
                </p>
                <p className="text-xl text-stone-700 font-light italic">
                  What if I could create systems that empowered people instead of limiting them?
                </p>
              </div>
              <p className="text-lg text-stone-600 font-light leading-relaxed mt-6">
                That question has guided my entire life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            From Haiti to the World
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              My story is marked by seasons of rebuilding from nothing. Each chapter taught me something that became foundational:
            </p>
            
            <div className="grid gap-6">
              <div className="border-l-2 border-stone-300 pl-6">
                <p className="text-base text-stone-700 leading-relaxed">
                  As a young interpreter for missionaries in Haiti, I saw firsthand how communication could save lives, open doors, and unite people who otherwise couldn&apos;t understand each other.
                </p>
              </div>
              
              <div className="border-l-2 border-stone-300 pl-6">
                <p className="text-base text-stone-700 leading-relaxed">
                  Moving to the Dominican Republic, I faced new cultural and linguistic challenges, sharpening my belief in the power of connection.
                </p>
              </div>
              
              <div className="border-l-2 border-stone-300 pl-6">
                <p className="text-base text-stone-700 leading-relaxed">
                  Launching Defrilex in 2020, with no investment and no blueprint, taught me how to build and scale under pressure.
                </p>
              </div>
              
              <div className="border-l-2 border-stone-300 pl-6">
                <p className="text-base text-stone-700 leading-relaxed">
                  Immigrating to the United States, starting over again, strengthened my discipline, faith, and conviction.
                </p>
              </div>
              
              <div className="border-l-2 border-stone-300 pl-6">
                <p className="text-base text-stone-700 leading-relaxed">
                  Discovering the potential of AI, I realized I could not only solve human problems today — I could help shape the future of work.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-stone-700 font-light leading-relaxed italic mt-8">
              Every challenge refined my purpose. Every new beginning expanded my vision.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Am Today */}
      <section className="py-20 md:py-32">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            Who I Am Today
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              I am an entrepreneur, innovator, communicator, and builder.
            </p>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              Professionally, I design and lead systems — companies, technologies, teams, and platforms that remove barriers and expand opportunity. My work sits at the intersection of language, AI, leadership, and global empowerment.
            </p>
            <div className="bg-stone-200 p-8 md:p-12 rounded-lg">
              <p className="text-xl md:text-2xl text-stone-800 font-light leading-relaxed">
                My mission is simple: Empower people. Build bridges. Create opportunity. Transform communities.
              </p>
              <p className="text-base text-stone-600 font-light leading-relaxed mt-6">
                Everything I build exists to help people connect, grow, and thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            My Core Principles
          </h2>
          <p className="text-lg text-stone-600 font-light leading-relaxed mb-12">
            I live and lead by values that guide every decision:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-1 w-12 bg-stone-300"></div>
              <h3 className="text-2xl font-light tracking-tight">Excellence without excuses</h3>
            </div>
            
            <div className="space-y-4">
              <div className="h-1 w-12 bg-stone-300"></div>
              <h3 className="text-2xl font-light tracking-tight">Faith-led discipline</h3>
            </div>
            
            <div className="space-y-4">
              <div className="h-1 w-12 bg-stone-300"></div>
              <h3 className="text-2xl font-light tracking-tight">Courage in uncertainty</h3>
            </div>
            
            <div className="space-y-4">
              <div className="h-1 w-12 bg-stone-300"></div>
              <h3 className="text-2xl font-light tracking-tight">A commitment to relentless learning</h3>
            </div>
            
            <div className="space-y-4">
              <div className="h-1 w-12 bg-stone-300"></div>
              <h3 className="text-2xl font-light tracking-tight">Service above recognition</h3>
            </div>
            
            <div className="space-y-4">
              <div className="h-1 w-12 bg-stone-300"></div>
              <h3 className="text-2xl font-light tracking-tight">Creating opportunity for others before myself</h3>
            </div>
          </div>
          
          <p className="text-lg text-stone-600 font-light leading-relaxed mt-12">
            These values are non-negotiable. They shape how I build, how I lead, and how I show up in every room.
          </p>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className="py-20 md:py-32">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            What Makes Me Different
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-stone-700 font-light leading-relaxed italic">
              I build from zero. I grow with clarity. And I lead with purpose.
            </p>
            
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              What differentiates me is not resources — it&apos;s perspective:
            </p>
            
            <div className="grid gap-6 mt-8">
              <div className="flex gap-4">
                <div className="text-stone-400 text-xl font-light">→</div>
                <p className="text-base text-stone-700 leading-relaxed">
                  I understand the struggles of underserved communities because I lived them.
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="text-stone-400 text-xl font-light">→</div>
                <p className="text-base text-stone-700 leading-relaxed">
                  I speak the language of both the everyday worker and the executive boardroom.
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="text-stone-400 text-xl font-light">→</div>
                <p className="text-base text-stone-700 leading-relaxed">
                  I build systems that combine faith, empathy, technology, and innovation.
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="text-stone-400 text-xl font-light">→</div>
                <p className="text-base text-stone-700 leading-relaxed">
                  I create companies that solve real human problems, not theoretical ones.
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="text-stone-400 text-xl font-light">→</div>
                <p className="text-base text-stone-700 leading-relaxed">
                  I bring a global understanding of people — Haitian, Dominican, American, immigrant, multilingual — into everything I design.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-stone-700 font-light leading-relaxed mt-8 italic">
              I am a communicator. A systems architect. A visionary founder. And above all, someone who believes in people.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            Key Milestones in My Journey
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-8 items-start">
              <div className="text-xl font-light text-stone-400 min-w-[120px]">2013-2016</div>
              <div className="flex-1">
                <p className="text-base text-stone-700 leading-relaxed">
                  Professor, communicator, and Radio Host in Haiti.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="text-xl font-light text-stone-400 min-w-[120px]">2017</div>
              <div className="flex-1">
                <p className="text-base text-stone-700 leading-relaxed">
                  Moved to the Dominican Republic and started language-based work.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="text-xl font-light text-stone-400 min-w-[120px]">2021</div>
              <div className="flex-1">
                <p className="text-base text-stone-700 leading-relaxed">
                  Launched Defrilex during the global pandemic.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="text-xl font-light text-stone-400 min-w-[120px]">2022</div>
              <div className="flex-1">
                <p className="text-base text-stone-700 leading-relaxed">
                  Immigrated to the U.S. and expanded Defrilex into a multilingual BPO.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="text-xl font-light text-stone-400 min-w-[120px]">2024</div>
              <div className="flex-1">
                <p className="text-base text-stone-700 leading-relaxed">
                  Established Zepour Inc. as a holding company.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="text-xl font-light text-stone-400 min-w-[120px]">2024</div>
              <div className="flex-1">
                <p className="text-base text-stone-700 leading-relaxed">
                  Launched AI Thinking Lab LLC to focus on AI agents and automation.
                </p>
              </div>
            </div>
            
            <div className="flex gap-8 items-start">
              <div className="text-xl font-light text-stone-400 min-w-[120px]">2025</div>
              <div className="flex-1">
                <p className="text-base text-stone-700 leading-relaxed">
                  Began developing enterprise agentic systems and the foundations of a multi-agent OS.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-stone-600 font-light leading-relaxed italic mt-12">
            Each milestone is a reminder of what is possible when faith and discipline meet opportunity.
          </p>
        </div>
      </section>

      {/* Ventures I Lead */}
      <section className="py-20 md:py-32">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            Ventures I Lead
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light tracking-tight mb-4">Defrilex</h3>
              <p className="text-base text-stone-600 font-light leading-relaxed">
                A multilingual BPO and language services company providing interpretation, translation, customer support, and workforce solutions across multiple countries.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light tracking-tight mb-4">Zepour Inc.</h3>
              <p className="text-base text-stone-600 font-light leading-relaxed">
                My holding company overseeing ventures in AI, BPO, staffing, financial education, real estate, and global empowerment.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light tracking-tight mb-4">AI Thinking Lab LLC</h3>
              <p className="text-base text-stone-600 font-light leading-relaxed">
                An innovation-focused AI company developing agentic systems, enterprise automation tools, and next-generation solutions for the future of work.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light tracking-tight mb-4">Other Initiatives</h3>
              <ul className="space-y-3">
                <li className="text-base text-stone-600 font-light leading-relaxed flex gap-3">
                  <span className="text-stone-400">→</span>
                  Financial literacy and distribution services
                </li>
                <li className="text-base text-stone-600 font-light leading-relaxed flex gap-3">
                  <span className="text-stone-400">→</span>
                  Entrepreneurial training programs
                </li>
                <li className="text-base text-stone-600 font-light leading-relaxed flex gap-3">
                  <span className="text-stone-400">→</span>
                  Nonprofit empowerment initiatives
                </li>
                <li className="text-base text-stone-600 font-light leading-relaxed flex gap-3">
                  <span className="text-stone-400">→</span>
                  Community development in Haiti and the Dominican Republic
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Beyond Business */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            Impact Beyond Business
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              My work extends beyond profit. I&apos;ve built interpreter pipelines that created jobs, empowered families, and changed communities. I&apos;ve spoken at events, chambers of commerce, leadership gatherings, and global organizations. I&apos;ve helped people access language, education, opportunity, and technology in ways they once believed were impossible.
            </p>
            <p className="text-lg text-stone-700 font-light leading-relaxed italic">
              Service remains at the heart of everything I do.
            </p>
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-20 md:py-32">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            Looking Ahead — My Vision for the Future
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              My long-term vision is bold:
            </p>
            
            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="text-stone-400 text-xl font-light">→</div>
                <p className="text-base text-stone-700 leading-relaxed">
                  Build multilingual AI systems that break global communication barriers.
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="text-stone-400 text-xl font-light">→</div>
                <p className="text-base text-stone-700 leading-relaxed">
                  Establish a world-class innovation and research hub for AI and entrepreneurship.
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="text-stone-400 text-xl font-light">→</div>
                <p className="text-base text-stone-700 leading-relaxed">
                  Create economic opportunities for underserved communities worldwide.
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="text-stone-400 text-xl font-light">→</div>
                <p className="text-base text-stone-700 leading-relaxed">
                  Develop a full ecosystem of companies that transform how humans work, learn, and communicate.
                </p>
              </div>
              
              <div className="flex gap-4">
                <div className="text-stone-400 text-xl font-light">→</div>
                <p className="text-base text-stone-700 leading-relaxed">
                  Raise leaders, empower families, and inspire generations to dream bigger.
                </p>
              </div>
            </div>
            
            <p className="text-xl text-stone-700 font-light leading-relaxed italic mt-12">
              I want to build not just companies — but legacies.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">
            A Personal Note
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              Beyond entrepreneurship, I am a man grounded in faith, family, leadership, and growth. I love learning, reading, traveling, speaking, and helping others rise.
            </p>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              One of my greatest dreams is to build a beautiful family and raise children who serve God, lead with integrity, and live with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-stone-900 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            If you&apos;re interested in speaking engagements, strategic partnerships, or collaborative opportunities, I&apos;d love to connect.
          </p>
          <Button 
            asChild 
            size="lg"
            className="rounded-full bg-white text-stone-900 hover:bg-stone-100 px-8"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}