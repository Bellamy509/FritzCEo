"use client";

import { useState } from "react";
import FooterSection from "@/components/FooterSection";

type Lab = {
  id: string;
  name: string;
  parent: string;
  hq: string;
  founded: number;
  parentType: string;
  flagshipModels: string;
  techDetails: string;
  gameChanger: string;
  justification: string;
  osAssets: Array<{ name: string; desc: string; license: string }>;
  partnerInfo: Array<{ type: string; text: string; url: string }>;
  commercialTerms: string;
  benchmarks: string;
  domain: string;
  differentiator: string;
  citations: Array<{ text: string; url: string }>;
};

const allLabsData: Lab[] = [
  {
    id: 'zhipu-ai',
    name: 'Zhipu AI (智谱AI)',
    parent: 'Tsinghua (KEG Lab)',
    hq: 'Beijing',
    founded: 2019,
    parentType: 'Academic/Startup',
    flagshipModels: 'GLM-4, GLM-4V (Multimodal), CodeGeeX 3',
    techDetails: 'GLM (General Language Model) architecture. GLM-4 is a 1T+ sparse MoE model. Strong emphasis on bilingual (CN/EN) performance and tool-use (CogVLM). Trained on large, curated CN/EN datasets.',
    gameChanger: 'YES',
    justification: 'Zhipu has consistently demonstrated state-of-the-art performance, particularly with its GLM-4 series. Its academic roots (THUDM) provide deep research rigor, while its commercial execution is aggressive. Their strength in tool-use and agents (GLM-4 + CogAgent) makes them a top contender for complex enterprise workflows.',
    osAssets: [
      { name: 'GLM-4 (API-only)', desc: 'Flagship 1T+ MoE model.', license: 'Proprietary' },
      { name: 'ChatGLM3-6B', desc: 'Powerful 6B base and chat model.', license: 'Apache-2.0 (Commercial)' },
      { name: 'CogVLM & CogAgent', desc: 'Open-source visual language models.', license: 'Apache-2.0 (Commercial)' },
      { name: 'CodeGeeX 2', desc: '6B code model.', license: 'Apache-2.0 (Commercial)' }
    ],
    partnerInfo: [
      { type: 'Website', text: 'zhipuai.cn', url: 'https://www.zhipuai.cn/' },
      { type: 'Partner Page', text: 'Zhipu AI Open Platform', url: 'https://open.bigmodel.cn/' },
      { type: 'GitHub', text: 'THUDM', url: 'https://github.com/THUDM' },
      { type: 'Email', text: 'bd@zhipuai.cn', url: 'mailto:bd@zhipuai.cn' }
    ],
    commercialTerms: 'API access via BigModel platform. Clear pricing tiers. Offers private deployment and on-premise solutions for enterprise customers. Enterprise SLAs available.',
    benchmarks: 'Top-tier on MMLU, GSM8K, HumanEval, and MMMU. Often first or second among CN models.',
    domain: 'LLM, Multimodal, Agents, Code',
    differentiator: 'Strongest academic-to-commercial pipeline; excellent tool-use/agent capabilities.',
    citations: [
      { text: 'Official Website', url: 'https://www.zhipuai.cn/' },
      { text: 'GLM-4 Tech Report', url: 'https://arxiv.org/abs/2401.01772' },
      { text: 'GitHub (THUDM)', url: 'https://github.com/THUDM' }
    ]
  },
  {
    id: 'moonshot-ai',
    name: 'Moonshot AI (月之暗面)',
    parent: 'Startup',
    hq: 'Beijing',
    founded: 2023,
    parentType: 'Startup',
    flagshipModels: 'Kimi Chat (based on Moonshot-v1)',
    techDetails: 'Closed, proprietary models. Kimi is famous for its 2-million-token context window (as of Oct 2025). Architecture likely a Transformer variant optimized for extreme context length and retrieval-augmented generation.',
    gameChanger: 'YES',
    justification: 'Moonshot completely changed the game on context length. Their ability to ingest and reason over millions of tokens (e.g., entire codebases, 20 books) unlocks entirely new use cases for legal, research, and complex document analysis. While others are catching up, Kimi\'s lead in *usable* long-context is a massive differentiator.',
    osAssets: [
      { name: 'Kimi Chat (API)', desc: 'Flagship long-context model.', license: 'Proprietary' },
      { name: 'moonshot-v1-8k/32k/128k', desc: 'Earlier API models.', license: 'Proprietary' }
    ],
    partnerInfo: [
      { type: 'Website', text: 'moonshot.cn', url: 'https://www.moonshot.cn/' },
      { type: 'API Platform', text: 'Moonshot Platform', url: 'https://platform.moonshot.cn/' },
      { type: 'Email', text: 'business@moonshot.cn', url: 'mailto:business@moonshot.cn' }
    ],
    commercialTerms: 'API access with pricing based on context length. Focused on cloud-first, but enterprise/on-prem is likely available for major partners given their recent large funding rounds.',
    benchmarks: 'Strong on long-context benchmarks (Needle-in-a-Haystack). Competitive, but not always top, on standard evals like MMLU. Focus is on context.',
    domain: 'LLM (Long-Context)',
    differentiator: 'World-leading 2M-token usable context window.',
    citations: [
      { text: 'Official Website', url: 'https://www.moonshot.cn/' },
      { text: 'API Platform', url: 'https://platform.moonshot.cn/' }
    ]
  },
  {
    id: 'alibaba-qwen',
    name: 'Alibaba (Qwen / 通义千问)',
    parent: 'Alibaba Cloud',
    hq: 'Hangzhou',
    founded: 2017,
    parentType: 'Big Tech',
    flagshipModels: 'Qwen2.5, Qwen2-72B, Qwen-VL-Max',
    techDetails: 'Qwen2 is a series of MoE and dense models. Qwen2-72B is a top-performing open model. Qwen-VL-Max is a highly capable proprietary multimodal model. Trained on massive, diverse multilingual datasets.',
    gameChanger: 'MAYBE',
    justification: 'Alibaba\'s Qwen team is a powerhouse. Their main contribution is providing extremely high-quality, commercially-permissive open-source models (Qwen1.5, Qwen2) that rival proprietary systems. While their proprietary models are strong, their *impact* is largest in the open-source world, setting the bar for all other players.',
    osAssets: [
      { name: 'Qwen2 (Series)', desc: 'SOTA open models from 0.5B to 72B.', license: 'Apache-2.0 (Commercial)' },
      { name: 'Qwen-VL (Series)', desc: 'Open visual language models.', license: 'Apache-2.0 (Commercial)' },
      { name: 'ModelScope', desc: 'Alibaba\'s model/dataset hub.', license: 'Varies' }
    ],
    partnerInfo: [
      { type: 'Website', text: 'Alibaba Cloud AI', url: 'https://www.alibabacloud.com/product/machine-learning' },
      { type: 'ModelScope', text: 'ModelScope Community', url: 'https://modelscope.cn/' },
      { type: 'GitHub', text: 'Qwen (Tongyi)', url: 'https://github.com/QwenLM' },
      { type: 'Partner Program', text: 'Alibaba Cloud Partner Network', url: 'https://www.alibabacloud.com/partner' }
    ],
    commercialTerms: 'API access via Alibaba Cloud. Full suite of enterprise services, including on-prem, private cloud (Apsara), and dedicated SLAs. Deep integration with their cloud ecosystem.',
    benchmarks: 'Qwen2-72B is at or near the top of all open-model leaderboards (MMLU, GPQA, MT-Bench). Qwen-VL-Max is top-tier on MMMU/MathVista.',
    domain: 'LLM, Multimodal, Code, Infra',
    differentiator: 'Leader in high-performance, commercially-viable open-source models.',
    citations: [
      { text: 'GitHub (QwenLM)', url: 'https://github.com/QwenLM' },
      { text: 'ModelScope', url: 'https://modelscope.cn/models?name=qwen' },
      { text: 'Qwen2 Blog', url: 'https://qwen.aliyun.com/blog/qwen2' }
    ]
  },
  {
    id: 'baichuan',
    name: 'Baichuan (百川智能)',
    parent: 'Startup (founders from Sogou)',
    hq: 'Beijing',
    founded: 2023,
    parentType: 'Startup',
    flagshipModels: 'Baichuan 4, Baichuan 3 (Turbo)',
    techDetails: 'Proprietary models (Baichuan 3/4) are large-scale. Previously released open models (Baichuan 2 - 7B/13B) were very popular. Strong focus on high-quality Chinese data curation and multilingual capabilities.',
    gameChanger: 'MAYBE',
    justification: 'Baichuan\'s speed is its game-changer. Founded in 2023, it released 4 generations of models in under 2 years. Their open-source Baichuan 2 models were very strong for their size. Their proprietary Baichuan 3/4 are highly competitive, especially in Chinese. They are a "fast follower" startup executing at an elite level.',
    osAssets: [
      { name: 'Baichuan 2 (7B/13B)', desc: 'Popular open-source base/chat models.', license: 'Apache-2.0 (Commercial)' },
      { name: 'Baichuan 4 (API)', desc: 'Flagship proprietary model.', license: 'Proprietary' }
    ],
    partnerInfo: [
      { type: 'Website', text: 'baichuan-ai.com', url: 'https://www.baichuan-ai.com/' },
      { type: 'API Platform', text: 'Baichuan Platform', url: 'https://platform.baichuan-ai.com/' },
      { type: 'GitHub', text: 'baichuan-inc', url: 'https://github.com/baichuan-inc' },
      { type: 'Email', text: 'business@baichuan-ai.com', url: 'mailto:business@baichuan-ai.com' }
    ],
    commercialTerms: 'API access with competitive pricing. Enterprise plans for higher throughput and private deployment are advertised.',
    benchmarks: 'Baichuan 4 scores very high on Chinese benchmarks (C-MMLU, SuperCLUE) and is competitive on English evals.',
    domain: 'LLM (Multilingual)',
    differentiator: 'Exceptional execution speed; strong balance of open-source and proprietary.',
    citations: [
      { text: 'Official Website', url: 'https://www.baichuan-ai.com/' },
      { text: 'GitHub (baichuan-inc)', url: 'https://github.com/baichuan-inc' }
    ]
  },
  {
    id: 'deepseek',
    name: 'DeepSeek (深度求索)',
    parent: 'Startup (quant fund backing)',
    hq: 'Beijing',
    founded: 2023,
    parentType: 'Startup',
    flagshipModels: 'DeepSeek-V2, DeepSeek-Coder-V2',
    techDetails: 'DeepSeek-V2 is a 236B MoE model (21B active) known for its extreme cost-efficiency. DeepSeek-Coder-V2 is a 16B/236B MoE code model, SOTA in open code generation. Trained on 2T tokens, heavy on code and math.',
    gameChanger: 'YES',
    justification: 'DeepSeek has decisively won the "best open-source code model" crown with DeepSeek-Coder-V2. More importantly, DeepSeek-V2 (the general model) is a breakthrough in MoE architecture, offering performance competitive with 1T+ models at a fraction of the computational cost. This cost/performance ratio is a true game-changer for on-premise deployment.',
    osAssets: [
      { name: 'DeepSeek-V2', desc: '236B MoE (21B active) general model.', license: 'DeepSeek-V2 License (Commercial, requires application)' },
      { name: 'DeepSeek-Coder-V2', desc: '16B/236B SOTA code models.', license: 'MIT License (Commercial)' },
      { name: 'DeepSeekMath', desc: 'SOTA open math model.', license: 'MIT License (Commercial)' }
    ],
    partnerInfo: [
      { type: 'Website', text: 'deepseek.com', url: 'https://www.deepseek.com/' },
      { type: 'API Platform', text: 'DeepSeek Platform', url: 'https://platform.deepseek.com/' },
      { type: 'GitHub', text: 'deepseek-ai', url: 'https://github.com/deepseek-ai' },
      { type: 'Email', text: 'service@deepseek.com', url: 'mailto:service@deepseek.com' }
    ],
    commercialTerms: 'Very aggressive API pricing, reflecting their model\'s efficiency. On-premise options are a key part of their strategy for enterprise customers, especially for their Coder models.',
    benchmarks: 'DeepSeek-Coder-V2 is #1 on HumanEval, MBPP. DeepSeek-V2 (general) is highly competitive with Llama 3 70B and Qwen1.5-72B at much lower cost.',
    domain: 'LLM, Code, Math, Infra',
    differentiator: 'SOTA open-source code models; SOTA MoE efficiency for low-cost, high-performance inference.',
    citations: [
      { text: 'Official Website', url: 'https://www.deepseek.com/' },
      { text: 'GitHub (deepseek-ai)', url: 'https://github.com/deepseek-ai' },
      { text: 'DeepSeek-V2 Blog', url: 'https://deepseek.com/blog/deepseek-v2' }
    ]
  },
  {
    id: '01-ai',
    name: '01.AI (零一万物)',
    parent: 'Startup (founder Lee Kai-Fu)',
    hq: 'Beijing/Shanghai',
    founded: 2023,
    parentType: 'Startup',
    flagshipModels: 'Yi-Large, Yi-Large-Turbo, Yi-VL-Plus',
    techDetails: 'Yi-Large is a proprietary model competitive with GPT-4. Yi open series (e.g., Yi-34B, Yi-9B) are strong bilingual (EN/CN) models. Yi-VL-Plus is a top-tier multimodal system.',
    gameChanger: 'MAYBE',
    justification: 'Led by Kai-Fu Lee, 01.AI has immense talent and funding. Their open-source Yi-34B model was a sensation, topping leaderboards upon release (Dec 2023). Their proprietary Yi-Large is a genuine GPT-4 competitor. They are a "prestige" startup that partners are eager to work with, combining brand, talent, and SOTA performance.',
    osAssets: [
      { name: 'Yi-34B / 9B / 6B', desc: 'Series of strong bilingual open models.', license: 'Yi License (Commercial, requires application)' },
      { name: 'Yi-VL (6B/34B)', desc: 'Open-source visual language models.', license: 'Yi License (Commercial, requires application)' }
    ],
    partnerInfo: [
      { type: 'Website', text: '01.ai', url: 'https://01.ai/' },
      { type: 'API Platform', text: '01.AI Platform', url: 'https://platform.01.ai/' },
      { type: 'GitHub', text: '01-ai', url: 'https://github.com/01-ai' },
      { type: 'Email', text: 'bd@01.ai', url: 'mailto:bd@01.ai' }
    ],
    commercialTerms: 'API platform with clear pricing. Enterprise offerings for private deployment and fine-tuning are available. Strong push for global partners.',
    benchmarks: 'Yi-Large is a top-5 model on global leaderboards (MT-Bench, MMLU). Yi-VL-Plus is a top-3 model on MMMU.',
    domain: 'LLM, Multimodal',
    differentiator: 'High-prestige team; SOTA open-source bilingual models and SOTA proprietary multimodal.',
    citations: [
      { text: 'Official Website', url: 'https://01.ai/' },
      { text: 'GitHub (01-ai)', url: 'https://github.com/01-ai' }
    ]
  },
  {
    id: 'baidu',
    name: 'Baidu (ERNIE / 文心)',
    parent: 'Baidu',
    hq: 'Beijing',
    founded: 2000,
    parentType: 'Big Tech',
    flagshipModels: 'ERNIE 4.0, ERNIE 3.5',
    techDetails: 'ERNIE (Enhanced Representation through kNowledge IntEgration) is a series of proprietary models. ERNIE 4.0 is their flagship GPT-4 class model, deeply integrated into Baidu\'s search and cloud products. Strong on Chinese language understanding and reasoning.',
    gameChanger: 'NO',
    justification: 'Baidu is a foundational player, but not a "game-changer" in the same way as the startups. ERNIE 4.0 is a powerful, competent model that is crucial to China\'s ecosystem, but it rarely pioneers new architectures or capabilities that stun the global community. It is a fast-follower and a powerful incumbent.',
    osAssets: [
      { name: 'PaddlePaddle', desc: 'Baidu\'s deep learning framework.', license: 'Apache-2.0 (Commercial)' },
      { name: 'ERNIE (Older versions)', desc: 'Some older/smaller models are open.', license: 'Varies' }
    ],
    partnerInfo: [
      { type: 'Website', text: 'Baidu AI Cloud (Qianfan)', url: 'https://cloud.baidu.com/product/wenxinworkshop' },
      { type: 'Partner Program', text: 'Baidu AI Cloud Partners', url: 'https://cloud.baidu.com/partner/partner' },
      { type: 'GitHub', text: 'PaddlePaddle', url: 'https://github.com/PaddlePaddle' }
    ],
    commercialTerms: 'Full enterprise suite via Baidu AI Cloud (Qianfan platform). Offers public API, private cloud, and on-premise "all-in-one" machines. Deepest enterprise penetration in China.',
    benchmarks: 'ERNIE 4.0 is a top-3 model on all major Chinese benchmarks (SuperCLUE, C-MMLU). Competitive on English.',
    domain: 'LLM, Multimodal, Speech, Infra',
    differentiator: 'Deepest enterprise integration in mainland China; strong legacy in NLP and search data.',
    citations: [
      { text: 'Baidu AI Cloud', url: 'https://cloud.baidu.com/product/wenxinworkshop' },
      { text: 'ERNIE 4.0 Announcement', url: 'https://www.baidu.com/ernie' }
    ]
  },
  {
    id: 'iflytek',
    name: 'iFlytek (科大讯飞)',
    parent: 'iFlytek',
    hq: 'Hefei',
    founded: 1999,
    parentType: 'Big Tech',
    flagshipModels: 'SparkDesk V4.0',
    techDetails: 'Proprietary LLM series. iFlytek\'s core strength for decades has been speech and language (ASR, TTS, NLP). SparkDesk is built on this foundation, with exceptional capabilities in multilingual speech translation, voice cloning, and audio-based reasoning.',
    gameChanger: 'MAYBE',
    justification: 'For pure text, SparkDesk is "just" competitive. But for anything involving *voice*, it is a game-changer. Its integration of SOTA speech recognition and generation directly into the LLM reasoning loop is world-class. This makes it a go-to for voice agents, multilingual CX, and accessibility.',
    osAssets: [
      { name: 'SparkDesk (API)', desc: 'Flagship LLM with SOTA speech.', license: 'Proprietary' },
      { name: 'iFlytek Open Platform', desc: 'APIs for speech, NLP, etc.', license: 'Varies' }
    ],
    partnerInfo: [
      { type: 'Website', text: 'iflytek.com', url: 'https://www.iflytek.com/' },
      { type: 'API Platform', text: 'iFlytek Open Platform', url: 'https://www.xfyun.cn/' },
      { type: 'Partner Program', text: 'iFlytek Partners', url: 'https://www.xfyun.cn/partners' }
    ],
    commercialTerms: 'Mature API platform. Offers "all-in-one" hardware/software solutions for on-premise deployment, especially for government, education, and healthcare.',
    benchmarks: 'SparkDesk V4.0 is competitive on text benchmarks (MMLU, C-MMLU) but is SOTA on speech-related evals (e.g., speech translation).',
    domain: 'Speech, LLM, Multimodal',
    differentiator: 'World-class, deeply integrated speech and voice capabilities (ASR/TTS).',
    citations: [
      { text: 'Official Website', url: 'https://www.iflytek.com/' },
      { text: 'SparkDesk API', url: 'https://www.xfyun.cn/services/spark' }
    ]
  }
];

const shortlistIds = ['zhipu-ai', 'moonshot-ai', 'deepseek', 'alibaba-qwen', 'iflytek'];

const getShortlistRationale = (labId: string): string => {
  const rationales: Record<string, string> = {
    'zhipu-ai': 'Excellent fit. Their SOTA tool-use (CogAgent) and strong GLM-4 reasoning are ideal for complex agentic CX workflows. Their on-premise solutions and academic backing are attractive for government and legal sectors.',
    'moonshot-ai': 'High potential for regulated industries (legal, healthcare) due to their 2M token context window. Perfect for massive document analysis, summarization, and RAG. Partnership would focus on licensing this unique long-context capability for on-prem deployment.',
    'deepseek': 'Top pick for cost-efficiency. Their DeepSeek-V2 MoE model offers SOTA performance at a fraction of the cost, ideal for high-volume BPO/CX. Their SOTA Coder model is a huge asset for internal dev tools and IT support automation. On-prem focus is a major plus.',
    'alibaba-qwen': 'Best "all-rounder" partner. Their SOTA open-source models (Qwen2) allow for rapid, low-cost on-prem prototyping, while their proprietary Qwen2.5 API offers a clear upgrade path. Alibaba Cloud provides robust, mature enterprise SLAs and global infrastructure.',
    'iflytek': 'The non-negotiable choice for voice-centric CX. Their deeply integrated SOTA speech (ASR/TTS) and LLM (SparkDesk) is unmatched for multilingual call centers, voice bots, and accessibility. Strong government and healthcare relationships in China.',
  };
  return rationales[labId] || 'This lab shows a strong balance of performance and enterprise-readiness.';
};

export default function ChinaAILandscapePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);
  const [labSearchTerm, setLabSearchTerm] = useState('');
  const [tableSearchTerm, setTableSearchTerm] = useState('');

  const filteredLabs = allLabsData.filter(lab =>
    lab.name.toLowerCase().includes(labSearchTerm.toLowerCase()) ||
    lab.parent.toLowerCase().includes(labSearchTerm.toLowerCase())
  );

  const filteredTableLabs = allLabsData.filter(lab =>
    lab.name.toLowerCase().includes(tableSearchTerm.toLowerCase())
  );

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="container max-w-7xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-light tracking-tight mb-4 text-stone-900">
            China AI Landscape Explorer
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl">
            An interactive brief on leading AI labs for partnership analysis.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-stone-200 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8 -mb-px overflow-x-auto">
            {[
              { id: 'overview', label: 'Landscape Overview' },
              { id: 'explorer', label: 'Lab Explorer' },
              { id: 'comparison', label: 'Comparison Matrix' },
              { id: 'shortlist', label: 'Partnership Shortlist' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-stone-900 text-stone-900'
                    : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-6">
          {activeTab === 'overview' && (
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">Executive Summary</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                As of late 2025, China&apos;s AI landscape is exceptionally dynamic, characterized by a three-way race between established tech giants (Alibaba, Baidu, Tencent, Huawei), agile and well-funded startups (Zhipu AI, Moonshot, Baichuan, MiniMax), and formidable academic-linked labs (THUDM, DeepSeek). Competition is driving rapid advancements in model scale, reasoning, multimodal capabilities, and cost-efficiency. Startups, in particular, are proving to be &quot;game-changers&quot; by focusing on novel architectures and data strategies, rivaling and sometimes surpassing global benchmarks. This interactive report provides a detailed breakdown of the top 15-20 players, their technical capabilities, open-source contributions, and commercial readiness, designed to identify prime targets for enterprise partnership in multilingual CX, BPO, and regulated industries.
              </p>
              <h4 className="text-xl font-semibold text-stone-900 mb-4">Landscape Composition</h4>
              <p className="text-stone-600 mb-4">
                The ecosystem is a mix of large, established corporations, nimble startups, and research institutions, each contributing differently to the pace of innovation. This breakdown shows the key players analyzed in this report by their organizational type.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="space-y-4">
                  {Object.entries(allLabsData.reduce((acc, lab) => {
                    const type = lab.parentType || 'Unknown';
                    acc[type] = (acc[type] || 0) + 1;
                    return acc;
                  }, {} as Record<string, number>)).map(([type, count]) => (
                    <div key={type} className="flex items-center">
                      <div className="w-32 text-sm font-medium text-stone-700">{type}</div>
                      <div className="flex-1 h-8 bg-stone-100 rounded-lg overflow-hidden">
                        <div
                          className="h-full bg-stone-700 flex items-center justify-end pr-3 text-white text-sm font-semibold"
                          style={{ width: `${(count / allLabsData.length) * 100}%` }}
                        >
                          {count}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'explorer' && (
            <div className="md:flex md:space-x-6">
              <aside className="md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold text-stone-900 mb-4">All Labs</h3>
                <input
                  type="text"
                  placeholder="Filter labs by name..."
                  value={labSearchTerm}
                  onChange={(e) => setLabSearchTerm(e.target.value)}
                  className="w-full p-3 border border-stone-300 rounded-lg mb-4 focus:ring-2 focus:ring-stone-900 focus:border-stone-900"
                />
                <div className="space-y-2 overflow-y-auto max-h-[70vh] bg-white p-4 rounded-lg border border-stone-200">
                  {filteredLabs.map((lab) => (
                    <button
                      key={lab.id}
                      onClick={() => setSelectedLab(lab)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedLab?.id === lab.id
                          ? 'bg-stone-200 text-stone-900 font-semibold'
                          : 'hover:bg-stone-50'
                      }`}
                    >
                      <div className="font-semibold">{lab.name}</div>
                      <div className="text-sm text-stone-500">{lab.parent}</div>
                    </button>
                  ))}
                </div>
              </aside>
              
              <section className="md:w-2/3">
                {selectedLab ? (
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-3xl font-bold text-stone-900">{selectedLab.name}</h3>
                    <p className="text-lg text-stone-500 mt-1 mb-4">
                      {selectedLab.parent} • {selectedLab.hq} • Est. {selectedLab.founded}
                    </p>
                    
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4 ${
                      selectedLab.gameChanger === 'YES' ? 'bg-green-100 text-green-800' :
                      selectedLab.gameChanger === 'MAYBE' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      Game-Changer: {selectedLab.gameChanger}
                    </span>
                    
                    <p className="text-stone-700 italic bg-stone-50 p-4 rounded-md border border-stone-200 mb-6">
                      {selectedLab.justification}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-xl font-semibold text-stone-900 mb-3">Flagship Systems</h4>
                        <p className="text-stone-600">{selectedLab.flagshipModels}</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-stone-900 mb-3">Technical Snapshot</h4>
                        <p className="text-stone-600">{selectedLab.techDetails}</p>
                      </div>
                    </div>

                    <hr className="my-6 border-stone-200" />

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-stone-900 mb-3">Open-Source Assets</h4>
                      <div className="space-y-2">
                        {selectedLab.osAssets.map((asset, idx) => (
                          <p key={idx} className="text-stone-600">
                            <strong>{asset.name}</strong>: {asset.desc} <em>({asset.license})</em>
                          </p>
                        ))}
                      </div>
                    </div>

                    <hr className="my-6 border-stone-200" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-xl font-semibold text-stone-900 mb-3">Partnering & Contact</h4>
                        <div className="space-y-2">
                          {selectedLab.partnerInfo.map((info, idx) => (
                            <p key={idx} className="text-stone-600">
                              <strong>{info.type}:</strong>{' '}
                              <a href={info.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                {info.text}
                              </a>
                            </p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-stone-900 mb-3">Commercial Terms</h4>
                        <p className="text-stone-600">{selectedLab.commercialTerms}</p>
                      </div>
                    </div>

                    <hr className="my-6 border-stone-200" />

                    <div>
                      <h4 className="text-xl font-semibold text-stone-900 mb-3">Citations</h4>
                      <div className="space-y-2">
                        {selectedLab.citations.map((cite, idx) => (
                          <p key={idx}>
                            <a href={cite.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                              {cite.text}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white p-10 rounded-lg shadow-sm text-center text-stone-500 h-full flex items-center justify-center">
                    <p>Select a lab from the list to view its detailed profile.</p>
                  </div>
                )}
              </section>
            </div>
          )}

          {activeTab === 'comparison' && (
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">Comparison Matrix</h3>
              <p className="text-stone-600 mb-4">
                Use this table to quickly compare key metrics across all analyzed labs. Use the search box to filter by lab name for a direct, side-by-side analysis of capabilities and openness.
              </p>
              <input
                type="text"
                placeholder="Filter by lab name..."
                value={tableSearchTerm}
                onChange={(e) => setTableSearchTerm(e.target.value)}
                className="w-full max-w-md p-3 border border-stone-300 rounded-lg mb-4 focus:ring-2 focus:ring-stone-900 focus:border-stone-900"
              />
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-stone-200">
                  <thead className="bg-stone-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Lab / Team</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Flagship Model(s)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Domain</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Benchmarks</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Game-Changer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase tracking-wider">Differentiator</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-stone-200">
                    {filteredTableLabs.map((lab) => (
                      <tr key={lab.id} className="hover:bg-stone-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-stone-900">{lab.name}</div>
                          <div className="text-sm text-stone-500">{lab.parent}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-stone-600">{lab.flagshipModels.split(',')[0]}</td>
                        <td className="px-6 py-4 text-sm text-stone-600">{lab.domain}</td>
                        <td className="px-6 py-4 text-sm text-stone-600">{lab.benchmarks}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            lab.gameChanger === 'YES' ? 'bg-green-100 text-green-800' :
                            lab.gameChanger === 'MAYBE' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {lab.gameChanger}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-stone-600 max-w-xs">{lab.differentiator}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'shortlist' && (
            <div>
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">Partnership Shortlist (Top 5 Picks)</h3>
              <p className="text-stone-600 mb-6">
                Based on the analysis, this shortlist identifies the 5 labs with the strongest combination of model performance, enterprise-readiness (on-prem options, SLAs), cost-efficiency, and openness to partnership. These are the prime targets for immediate outreach for multilingual CX, healthcare, legal, and government use cases.
              </p>
              <div className="space-y-6">
                {allLabsData.filter(lab => shortlistIds.includes(lab.id)).map((lab) => (
                  <div key={lab.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h4 className="text-2xl font-bold text-stone-900 mb-2">{lab.name}</h4>
                      <p className="text-md text-stone-500 mb-4">{lab.differentiator}</p>
                      <div className="bg-stone-50 p-4 rounded-md border border-stone-200">
                        <h5 className="text-sm font-semibold uppercase text-stone-500 tracking-wider mb-2">Partnership Rationale</h5>
                        <p className="text-stone-700">
                          <strong>Fit for CX/BPO & Regulated Industries:</strong> {getShortlistRationale(lab.id)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}