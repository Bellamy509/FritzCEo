"use client";

import { useState } from "react";
import FooterSection from "@/components/FooterSection";
import { 
  Box, 
  FileText, 
  Star, 
  FileCheck,
  ExternalLink
} from "lucide-react";

type Framework = {
  name: string;
  url: string;
  func: string;
  stack: string;
  license: string;
  stars: string;
  commit: string;
  notes: string;
  category: string;
};

const frameworks: Framework[] = [
  // Orchestration & Multi-Agent
  { name: 'LangChain', url: 'https://github.com/langchain-ai/langchain', func: 'Core toolkit for building LLM-powered applications and agents.', stack: 'Python, Node.js', license: 'MIT', stars: '84.1k', commit: '1 day ago', notes: 'The foundational library for many agentic systems, extensive integrations.', category: 'orchestration' },
  { name: 'CrewAI', url: 'https://github.com/crewAI-org/crewAI', func: 'Orchestration framework for role-playing, autonomous AI agents.', stack: 'Python, LangChain', license: 'MIT', stars: '12.2k', commit: '1 day ago', notes: 'Ideal for collaborative tasks like sales outreach or research teams.', category: 'orchestration' },
  { name: 'AutoGen', url: 'https://github.com/microsoft/autogen', func: 'Microsoft\'s framework for creating multi-agent applications.', stack: 'Python, OpenAI', license: 'MIT', stars: '23.3k', commit: '1 day ago', notes: 'Enables complex conversational workflows between multiple agents.', category: 'orchestration' },
  { name: 'AgentVerse', url: 'https://github.com/OpenBMB/AgentVerse', func: 'A flexible framework for building multi-agent environments for various tasks.', stack: 'Python', license: 'Apache-2.0', stars: '4.1k', commit: '3 weeks ago', notes: 'Good for simulating complex interactions and social behaviors.', category: 'orchestration' },
  { name: 'Semantic Kernel', url: 'https://github.com/microsoft/semantic-kernel', func: 'Microsoft\'s SDK for integrating LLMs with conventional code.', stack: 'C#, Python, Java', license: 'MIT', stars: '17.4k', commit: '1 day ago', notes: 'Pluggable architecture, enterprise-focused, strong Azure integration.', category: 'orchestration' },
  { name: 'Agent-S', url: 'https://github.com/simular-ai/Agent-S', func: 'Framework for autonomous computer interaction with a GUI.', stack: 'Python, OpenAI', license: 'Apache-2.0', stars: '4.5k', commit: 'Active', notes: 'Allows agents to interact with desktop environments directly.', category: 'orchestration' },
  { name: 'VoltAgent', url: 'https://github.com/VoltAgent/voltagent', func: 'TypeScript framework for AI agents with workflow orchestration.', stack: 'TypeScript, Node.js', license: 'MIT', stars: '1.8k', commit: 'Active', notes: 'Good for building robust, observable agents in a JS environment.', category: 'orchestration' },
  
  // Customer Engagement
  { name: 'Rasa', url: 'https://github.com/RasaHQ/rasa', func: 'Platform for building enterprise-grade conversational support bots.', stack: 'Python, TensorFlow', license: 'Apache-2.0', stars: '18.1k', commit: 'Active', notes: 'Use for customer service, HR onboarding, and internal helpdesks.', category: 'customer' },
  { name: 'RasaGPT', url: 'https://github.com/paulpierre/RasaGPT', func: 'Headless LLM chatbot platform combining Rasa + LangChain.', stack: 'Python, LangChain', license: 'MIT', stars: '650+', commit: 'Active', notes: 'Combines Rasa\'s dialogue management with LangChain\'s LLM tools.', category: 'customer' },
  { name: 'LangGraph Email Automation', url: 'https://github.com/kaymen99/langgraph-email-automation', func: 'Multi-agent customer support automation with RAG.', stack: 'Python, LangGraph', license: 'MIT', stars: '138+', commit: 'Active', notes: 'Automates email classification, qualification, and response.', category: 'customer' },
  { name: 'Botpress', url: 'https://github.com/botpress/botpress', func: 'Open-source platform for building and deploying chatbots.', stack: 'Node.js, TypeScript', license: 'AGPL-3.0', stars: '11.9k', commit: '1 week ago', notes: 'Visual flow editor, modular architecture, and easy deployment.', category: 'customer' },
  { name: 'Open-Assistant', url: 'https://github.com/LAION-AI/Open-Assistant', func: 'A chat-based assistant that can be trained on custom tasks.', stack: 'Python, PyTorch', license: 'Apache-2.0', stars: '36.5k', commit: '4 months ago', notes: 'Open-source alternative to ChatGPT for building assistants.', category: 'customer' },

  // Sales
  { name: 'Sales Outreach Automation', url: 'https://github.com/kaymen99/sales-outreach-automation-langgraph', func: 'Automated lead research, qualification & outreach.', stack: 'Python, LangGraph', license: 'MIT', stars: '142+', commit: 'Active', notes: 'Integrates with HubSpot, Google Sheets, and scrapes websites.', category: 'sales' },
  { name: 'Dealbot', url: 'https://github.com/dealbot/dealbot', func: 'Battle-tested sales automation system for Pipedrive CRM.', stack: 'Ruby on Rails', license: 'MIT', stars: '200+', commit: 'Stable', notes: 'Ready for Heroku deployment with webhook automation.', category: 'sales' },
  { name: 'AI Sales Agent', url: 'https://github.com/kaymen99/AI-Sales-agent', func: 'Conversational sales agent with payment processing.', stack: 'Python, Stripe', license: 'MIT', stars: '48+', commit: 'Active', notes: 'Can handle consultation and product sales with Stripe integration.', category: 'sales' },
  
  // Data & Research
  { name: 'LlamaIndex', url: 'https://github.com/run-llama/llama_index', func: 'Data framework for connecting custom data sources to LLMs.', stack: 'Python, LangChain', license: 'MIT', stars: '30.1k', commit: '1 day ago', notes: 'Essential for building RAG applications and knowledge-based agents.', category: 'data' },
  { name: 'GPT-Researcher', url: 'https://github.com/tavily/gpt-researcher', func: 'Autonomous agent for comprehensive online research on any topic.', stack: 'Python, LangChain', license: 'MIT', stars: '7.8k', commit: '2 days ago', notes: 'Generates detailed, factual, and unbiased research reports.', category: 'data' },
  { name: 'WrenAI', url: 'https://github.com/Canner/WrenAI', func: 'Text-to-SQL agent that connects to your data warehouse for BI.', stack: 'Go, Python', license: 'Apache-2.0', stars: '650', commit: '2 days ago', notes: 'Allows business users to query data using natural language.', category: 'data' },
  
  // Software Development
  { name: 'MetaGPT', url: 'https://github.com/geekan/MetaGPT', func: 'Simulates a software company with agents for project planning.', stack: 'Python, LLMs', license: 'MIT', stars: '36.1k', commit: '1 day ago', notes: 'Automates software development processes using SOPs.', category: 'development' },
  { name: 'OpenDevin', url: 'https://github.com/OpenDevin/OpenDevin', func: 'An open-source autonomous AI software engineer.', stack: 'Python, Docker', license: 'MIT', stars: '11.2k', commit: '1 day ago', notes: 'Aims to replicate and democratize the capabilities of Devin.', category: 'development' },
  { name: 'Aider', url: 'https://github.com/paul-gauthier/aider', func: 'AI-powered pair programmer that works in your local git repo.', stack: 'Python', license: 'Apache-2.0', stars: '7.5k', commit: '1 day ago', notes: 'Edit code for new features, bug fixes, and updates via chat.', category: 'development' },
  { name: 'Plandex', url: 'https://github.com/plandex-ai/plandex', func: 'An AI-powered, terminal-based tool for complex, real-world tasks.', stack: 'Go, YAML', license: 'MIT', stars: '2.1k', commit: '1 day ago', notes: 'Uses long-running background agents to tackle large projects.', category: 'development' },

  // Finance & Trading
  { name: 'FinRobot', url: 'https://github.com/AI4Finance-Foundation/FinRobot', func: 'Financial analysis with forecasting, document analysis & trading.', stack: 'Python, AutoGen', license: 'Apache-2.0', stars: '7.8k', commit: 'Active', notes: 'A comprehensive suite of agents for financial tasks.', category: 'finance' },
  { name: 'TradingAgents', url: 'https://github.com/TauricResearch/TradingAgents', func: 'Multi-agent trading framework with specialized roles.', stack: 'Python, FastAPI', license: 'MIT', stars: '400+', commit: 'Active', notes: 'Designed for building sophisticated, collaborative trading systems.', category: 'finance' },
  { name: 'Hummingbot', url: 'https://github.com/hummingbot/hummingbot', func: 'Open-source framework for building high-frequency crypto trading bots.', stack: 'Python, Cython', license: 'Apache-2.0', stars: '6.7k', commit: '1 day ago', notes: 'Connects to many exchanges for market making and arbitrage.', category: 'finance' },
  { name: 'FinRL', url: 'https://github.com/AI4Finance-Foundation/FinRL', func: 'Library for quantitative finance using deep reinforcement learning.', stack: 'Python, PyTorch', license: 'MIT', stars: '12.3k', commit: 'Active', notes: 'Build and test automated stock trading strategy agents.', category: 'finance' },
  { name: 'Qlib', url: 'https://github.com/microsoft/qlib', func: 'AI-oriented quantitative investment platform from Microsoft.', stack: 'Python, PyTorch', license: 'MIT', stars: '13.2k', commit: '1 month ago', notes: 'Comprehensive platform for quant research and strategy backtesting.', category: 'finance' },
  { name: 'VectorBT', url: 'https://github.com/polakowo/vectorbt', func: 'A Python library for backtesting and analyzing trading strategies at scale.', stack: 'Python, Numba', license: 'MIT', stars: '1.9k', commit: '3 months ago', notes: 'Extremely fast for processing large datasets and complex signals.', category: 'finance' },

  // HR & Recruiting
  { name: 'ChiefOnboarding', url: 'https://github.com/chiefonboarding/ChiefOnboarding', func: 'Complete employee onboarding platform with automated workflows.', stack: 'Python, Django', license: 'AGPL-3.0', stars: '400+', commit: 'Active', notes: 'Automates IT setup, documentation, and Slack introductions.', category: 'hr' },
  { name: 'Resume Matcher', url: 'https://github.com/srbhr/Resume-Matcher', func: 'ATS-compatible resume screening with local AI processing.', stack: 'Python, Next.js', license: 'Apache-2.0', stars: '1k+', commit: 'Active', notes: 'Uses local LLMs via Ollama to rank resumes against job descriptions.', category: 'hr' },
  { name: 'FoloUp', url: 'https://github.com/FoloUp/FoloUp', func: 'AI-powered voice interviewer with real-time analysis.', stack: 'Next.js, OpenAI', license: 'MIT', stars: '500+', commit: 'Active', notes: 'Conducts initial screening interviews and provides analysis.', category: 'hr' },

  // Security & DevOps
  { name: 'CAI (Cybersecurity AI)', url: 'https://github.com/aliasrobotics/cai', func: 'Bug bounty-ready framework for autonomous penetration testing.', stack: 'Python, LiteLLM', license: 'Apache-2.0', stars: '1.2k+', commit: 'Active', notes: 'Uses a swarm of agents to find vulnerabilities.', category: 'security' },
  { name: 'NVIDIA Garak', url: 'https://github.com/NVIDIA/garak', func: 'LLM vulnerability scanner for hallucination, prompt injection, etc.', stack: 'Python', license: 'Apache-2.0', stars: '2.8k+', commit: 'Active', notes: 'A probe-based tool to test for a wide range of LLM failure modes.', category: 'security' },
  { name: 'Nuclei', url: 'https://github.com/projectdiscovery/nuclei', func: 'Vulnerability scanner with YAML templates.', stack: 'Go, YAML', license: 'MIT', stars: '22.2k+', commit: 'Active', notes: 'Fast, template-based scanner for network, web, and cloud.', category: 'security' },
  
  // Translation
  { name: 'Seamless Communication', url: 'https://github.com/facebookresearch/seamless_communication', func: 'Meta\'s library for real-time speech and text translation.', stack: 'Python, PyTorch', license: 'MIT', stars: '11.1k', commit: 'Active', notes: 'Enables speech-to-speech/text interpretation across 100+ languages.', category: 'translation' },
  { name: 'OpenNMT', url: 'https://github.com/OpenNMT/OpenNMT-py', func: 'A neural machine translation (NMT) toolkit for production.', stack: 'Python, PyTorch', license: 'MIT', stars: '6.8k', commit: 'Active', notes: 'Build custom, high-quality translation models for specific domains.', category: 'translation' },
  { name: 'LibreTranslate', url: 'https://github.com/LibreTranslate/LibreTranslate', func: 'A free and Open Source Machine Translation API, self-hostable.', stack: 'Python', license: 'AGPL-3.0', stars: '6.9k', commit: '3 days ago', notes: 'Core engine for building private translation/interpretation agents.', category: 'translation' },
  { name: 'Argos Translate', url: 'https://github.com/argosopentech/argos-translate', func: 'Open-source offline translation library and GUI.', stack: 'Python, OpenNMT', license: 'MIT', stars: '2k', commit: 'Active', notes: 'Another excellent self-hostable option for text translation.', category: 'translation' },

  // Operations & Workflow
  { name: 'n8n', url: 'https://github.com/n8n-io/n8n', func: 'Visual workflow automation with 400+ AI integrations.', stack: 'TypeScript, Node.js', license: 'Fair-code', stars: '40k+', commit: 'Active', notes: 'Low-code platform for connecting APIs and automating tasks.', category: 'operations' },
  { name: 'Prefect', url: 'https://github.com/PrefectHQ/prefect', func: 'Orchestration platform for data pipelines and workflows.', stack: 'Python', license: 'Apache-2.0', stars: '13.9k', commit: '1 day ago', notes: 'Python-native scheduling and monitoring for complex jobs.', category: 'operations' },
  { name: 'Airflow', url: 'https://github.com/apache/airflow', func: 'Platform to programmatically author, schedule, and monitor workflows.', stack: 'Python', license: 'Apache-2.0', stars: '34.2k', commit: '3 days ago', notes: 'Industry standard for DAG-based workflow management.', category: 'operations' },
];

const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'orchestration', label: 'Orchestration' },
  { id: 'customer', label: 'Customer' },
  { id: 'sales', label: 'Sales' },
  { id: 'data', label: 'Data & Research' },
  { id: 'development', label: 'Development' },
  { id: 'finance', label: 'Finance' },
  { id: 'hr', label: 'HR & Recruiting' },
  { id: 'security', label: 'Security' },
  { id: 'operations', label: 'Operations' },
  { id: 'translation', label: 'Translation' },
];

export default function AIFrameworksPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const sortedFrameworks = [...frameworks].sort((a, b) => {
    const starsA = parseFloat(a.stars.replace('k', '').replace('+', '')) * (a.stars.includes('k') ? 1000 : 1);
    const starsB = parseFloat(b.stars.replace('k', '').replace('+', '')) * (b.stars.includes('k') ? 1000 : 1);
    return starsB - starsA;
  });

  const filteredFrameworks = activeFilter === 'all' 
    ? sortedFrameworks 
    : sortedFrameworks.filter(f => f.category === activeFilter);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              AI Agent Frameworks Portal
            </h2>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              An interactive catalog of production-ready and promising open-source AI agent frameworks. Filter by domain to discover the perfect tool for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2 font-semibold rounded-full shadow-sm transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Grid */}
      <section className="pb-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-stone-50 to-stone-100 p-5 border-b border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-stone-800">{framework.name}</h3>
                    <a
                      href={framework.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-stone-600 text-sm">{framework.func}</p>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-4 text-sm">
                  <div className="flex items-start">
                    <Box className="w-5 h-5 text-stone-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-stone-700">
                      <span className="font-semibold text-stone-800">Stack:</span> {framework.stack}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-stone-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-stone-700">
                      <span className="font-semibold text-stone-800">License:</span>{' '}
                      <span className="bg-stone-900 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {framework.license}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Star className="w-5 h-5 text-stone-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-stone-700">
                      <span className="font-semibold text-stone-800">Popularity:</span> {framework.stars} ⭐ / {framework.commit}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FileCheck className="w-5 h-5 text-stone-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-stone-700">
                      <span className="font-semibold text-stone-800">Use For:</span> {framework.notes}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
