import { FeatureSection } from "@/components/FeatureSection";
import FooterSection from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { Logos } from "@/components/Logos";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export const metadata = {
  title: "Fritz Gerald Zephirin - Entrepreneur & Founder",
  description: "Building companies that help people communicate better and work smarter. Founder of Defrilex, AI Thinking Lab, and Innovate Global Solutions.",
};

export default function Home() {
  return (
    <div className="bg-stone-100">
      <HeroSection />
      <Logos />
      <section id="about">
        <FeatureSection />
      </section>
      <TestimonialSection />
      <section id="contact">
        <PricingSection />
      </section>
      <FooterSection />
    </div>
  );
}