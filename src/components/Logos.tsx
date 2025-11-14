const Logos = () => {
  const companies = [
    {
      name: "Goldman Sachs 10,000 Small Businesses",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/286fb748-748d-4c52-9314-a252bd44762b/generated_images/goldman-sachs-10-000-small-businesses-10-4edb5cc1-20251112233016.jpg",
    },
    {
      name: "Miami Bayside Foundation",
      logo: "https://miamibaysidefoundation.org/wp-content/uploads/2021/04/Miami-Bayside-Foundation-Logo.jpeg",
    },
    {
      name: "GA Haitian-American Chamber of Commerce",
      logo: "http://gahcci.org/wp-content/uploads/2025/01/logo-small-2.png",
    },
    {
      name: "Haitian American Chamber of Commerce of Florida",
      logo: "https://haccof.com/wp-content/uploads/2024/01/HACCOF-Clear-Cut.png",
    },
    {
      name: "NAAHP – National Alliance for the Advancement of Haitian Professionals",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/286fb748-748d-4c52-9314-a252bd44762b/generated_images/naahp-national-association-of-advisors-f-5f418c88-20251112233015.jpg",
    },
    {
      name: "LakayAI",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/286fb748-748d-4c52-9314-a252bd44762b/generated_images/lakay-ai-logo-modern-artificial-intellig-e5f8ca99-20251112233015.jpg",
    },
    {
      name: "Defrilex",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/286fb748-748d-4c52-9314-a252bd44762b/generated_images/defrilex-language-services-company-logo--bd5fa88a-20251112233016.jpg",
    },
    {
      name: "AI Thinking Lab LLC",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/286fb748-748d-4c52-9314-a252bd44762b/generated_images/ai-thinking-lab-logo-modern-artificial-i-f4026096-20251112233015.jpg",
    },
    {
      name: "Perplexity AI",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/286fb748-748d-4c52-9314-a252bd44762b/generated_images/perplexity-ai-logo-official-perplexity-a-56efab57-20251112233012.jpg",
    },
    {
      name: "DeepSeek AI",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/286fb748-748d-4c52-9314-a252bd44762b/generated_images/deepseek-ai-logo-modern-chinese-artifici-d14e5a1a-20251112233016.jpg",
    },
  ];

  return (
    <section className="py-20 bg-stone-50 border-t border-b border-stone-200">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-stone-900">
            Organizations & Initiatives I Partner With
          </h2>
          <p className="text-base text-stone-600">
            Building bridges between business, communities, and technology.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="w-40 h-[70px] flex items-center justify-center p-3 rounded-xl bg-stone-100 shadow-[0_0_0_1px_rgb(245_245_244)] transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_25px_rgba(15,23,42,0.08)] group"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="max-w-full max-h-full object-contain grayscale opacity-80 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Logos };