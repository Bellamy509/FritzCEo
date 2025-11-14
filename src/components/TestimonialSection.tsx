import { Card, CardContent } from "@/components/ui/card";

type CoreValue = {
  number: string;
  title: string;
  description: string;
};

const coreValues: CoreValue[] = [
  {
    number: "01",
    title: "Integrity over everything",
    description: "Do the right thing even when no one is watching — especially then.",
  },
  {
    number: "02",
    title: "Discipline creates freedom",
    description: "Consistency, structure, and commitment unlock possibility.",
  },
  {
    number: "03",
    title: "Serve with empathy",
    description: "Listen deeply. Care genuinely. Lead with intention.",
  },
  {
    number: "04",
    title: "Innovate with purpose",
    description: "Technology and ideas should improve lives, not complicate them.",
  },
  {
    number: "05",
    title: "Build for impact, not applause",
    description: "I measure success by the people we help and the change we create.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-gradient-to-b from-stone-50 to-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-light text-5xl md:text-6xl lg:text-7xl tracking-tight text-stone-900 mb-6">
            How I Lead & What I Believe In
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            I believe great work is built on principles that don't change with trends:
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {coreValues.map((value, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border border-stone-200/60 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-1 rounded-2xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A73E8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <CardContent className="relative p-8 md:p-10">
                {/* Number badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-stone-100 text-stone-400 font-light text-lg group-hover:bg-[#1A73E8] group-hover:text-white transition-all duration-500">
                    {value.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-normal text-stone-900 mb-4 tracking-tight leading-tight">
                  {value.title}
                </h3>

                {/* Accent line */}
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#1A73E8] to-[#1A73E8]/30 mb-5 group-hover:w-20 transition-all duration-500" />

                {/* Description */}
                <p className="text-stone-600 leading-relaxed font-light text-base md:text-lg">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 md:mt-20 text-center max-w-4xl mx-auto">
          <div className="relative inline-block">
            <p className="text-xl md:text-2xl text-stone-700 font-light leading-relaxed italic">
              These are the values that guide every decision I make — in business, in community, and in life.
            </p>
            {/* Decorative quotes */}
            <span className="absolute -left-6 -top-4 text-6xl text-[#1A73E8]/20 font-serif leading-none">"</span>
            <span className="absolute -right-6 -bottom-4 text-6xl text-[#1A73E8]/20 font-serif leading-none">"</span>
          </div>
        </div>
      </div>
    </section>
  );
}