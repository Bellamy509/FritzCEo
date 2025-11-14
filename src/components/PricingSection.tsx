import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-stone-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-4 text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg text-stone-600 font-light leading-relaxed">
            Let&apos;s explore speaking opportunities, meaningful partnerships, and collaborative work that moves ideas into impact.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Card 1: Speaking Engagements */}
          <div className="bg-white rounded-xl border border-stone-200 p-8 space-y-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-light tracking-tight">
              Speaking Engagements
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              If you&apos;re hosting an event on leadership, AI, innovation, or purpose-driven entrepreneurship, I&apos;m available for keynotes, panels, and workshops tailored to your audience.
            </p>
            <Button 
              asChild 
              variant="outline"
              className="w-full border-stone-300 hover:bg-stone-50 transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <span>→</span> Invite Me to Speak
              </Link>
            </Button>
          </div>

          {/* Card 2: Strategic Partnerships */}
          <div className="bg-white rounded-xl border border-stone-200 p-8 space-y-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-light tracking-tight">
              Strategic Partnerships
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              If you&apos;re building something meaningful and see potential alignment with my work or companies, I&apos;d be happy to explore how our strengths can support each other.
            </p>
            <Button 
              asChild 
              variant="outline"
              className="w-full border-stone-300 hover:bg-stone-50 transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <span>→</span> Explore Partnership
              </Link>
            </Button>
          </div>

          {/* Card 3: Work With Me */}
          <div className="bg-white rounded-xl border border-stone-200 p-8 space-y-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-light tracking-tight">
              Work With Me
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              For advisory roles, consulting, collaborative projects, or opportunities involving Defrilex, AI Thinking Lab LLC, or my other ventures — let&apos;s discuss how we can create value together.
            </p>
            <Button 
              asChild 
              variant="outline"
              className="w-full border-stone-300 hover:bg-stone-50 transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <span>→</span> Start a Conversation
              </Link>
            </Button>
          </div>
        </div>

        {/* Send a Message Section */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h3 className="text-3xl font-light tracking-tight">
            Send a Message
          </h3>
          <p className="text-stone-600 font-light leading-relaxed">
            Fill out the form and I&apos;ll respond as soon as possible.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-stone-900 hover:bg-stone-800 transition-all duration-300 shadow-sm hover:shadow-md mt-6"
          >
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}