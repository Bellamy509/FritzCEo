import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import { Brain, Database } from "lucide-react";

export default function AITechnologyOverviewPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-stone-900">
              AI & Technology Resources
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Explore comprehensive resources on artificial intelligence frameworks, global AI landscapes, and emerging technologies shaping the future of business.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Pages Grid */}
      <section className="pb-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Agent Frameworks Card */}
            <Link
              href="/resources/ai-technology/frameworks"
              className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-gradient-to-r from-stone-50 to-stone-100 p-8 border-b border-stone-200">
                <div className="flex items-center mb-4">
                  <div className="bg-stone-900 p-3 rounded-lg mr-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800">AI Agent Frameworks Portal</h3>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  An interactive catalog of 50+ production-ready and promising open-source AI agent frameworks. Filter by domain—orchestration, customer engagement, sales, finance, HR, security, and more—to discover the perfect tool for your business needs.
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center text-stone-900 font-semibold group-hover:text-stone-700">
                  Explore Frameworks
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">LangChain</span>
                  <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">CrewAI</span>
                  <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">AutoGen</span>
                  <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">MetaGPT</span>
                  <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">+46 more</span>
                </div>
              </div>
            </Link>

            {/* China AI Landscape Card */}
            <Link
              href="/resources/ai-technology/china-ai-landscape"
              className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-gradient-to-r from-stone-50 to-stone-100 p-8 border-b border-stone-200">
                <div className="flex items-center mb-4">
                  <div className="bg-stone-900 p-3 rounded-lg mr-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800">China AI Landscape Explorer</h3>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  An interactive brief on China&apos;s leading AI labs for partnership analysis. Explore detailed profiles of 15+ top players including Zhipu AI, Moonshot, DeepSeek, Alibaba Qwen, and more. Compare capabilities, benchmarks, and partnership opportunities.
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center text-stone-900 font-semibold group-hover:text-stone-700">
                  Explore AI Labs
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">Zhipu AI</span>
                  <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">Moonshot</span>
                  <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">DeepSeek</span>
                  <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">Alibaba</span>
                  <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">+11 more</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}