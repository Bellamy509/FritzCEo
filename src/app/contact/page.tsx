"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FooterSection from "@/components/FooterSection";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", organization: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-stone-100 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-3xl">
            Let&apos;s explore speaking opportunities, meaningful partnerships, and collaborative work that moves ideas into impact.
          </p>
        </div>
      </section>

      {/* Three Cards - No Icons */}
      <section className="pb-20 md:pb-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Speaking Engagements */}
            <div className="bg-white rounded-xl border border-stone-200 p-8 space-y-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-light tracking-tight">
                Speaking Engagements
              </h3>
              <p className="text-stone-600 font-light leading-relaxed min-h-[120px]">
                If you&apos;re hosting an event on leadership, AI, innovation, or purpose-driven entrepreneurship, I&apos;m available for keynotes, panels, and workshops tailored to your audience.
              </p>
              <Button 
                asChild 
                variant="outline"
                className="w-full border-stone-300 hover:bg-stone-50 transition-all duration-300"
              >
                <a href="#contact-form" className="flex items-center justify-center gap-2">
                  <span>→</span> Invite Me to Speak
                </a>
              </Button>
            </div>

            {/* Card 2: Strategic Partnerships */}
            <div className="bg-white rounded-xl border border-stone-200 p-8 space-y-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-light tracking-tight">
                Strategic Partnerships
              </h3>
              <p className="text-stone-600 font-light leading-relaxed min-h-[120px]">
                If you&apos;re building something meaningful and see potential alignment with my work or companies, I&apos;d be happy to explore how our strengths can support each other.
              </p>
              <Button 
                asChild 
                variant="outline"
                className="w-full border-stone-300 hover:bg-stone-50 transition-all duration-300"
              >
                <a href="#contact-form" className="flex items-center justify-center gap-2">
                  <span>→</span> Explore Partnership
                </a>
              </Button>
            </div>

            {/* Card 3: Work With Me */}
            <div className="bg-white rounded-xl border border-stone-200 p-8 space-y-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-light tracking-tight">
                Work With Me
              </h3>
              <p className="text-stone-600 font-light leading-relaxed min-h-[120px]">
                For advisory roles, consulting, collaborative projects, or opportunities involving Defrilex, AI Thinking Lab LLC, or my other ventures — let&apos;s discuss how we can create value together.
              </p>
              <Button 
                asChild 
                variant="outline"
                className="w-full border-stone-300 hover:bg-stone-50 transition-all duration-300"
              >
                <a href="#contact-form" className="flex items-center justify-center gap-2">
                  <span>→</span> Start a Conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 md:pb-32 bg-white" id="contact-form">
        <div className="container max-w-4xl mx-auto px-4 pt-20 md:pt-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Send a Message
            </h2>
            <p className="text-lg text-stone-600 font-light">
              Fill out the form and I&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization (Optional)</Label>
                      <Input
                        id="organization"
                        name="organization"
                        placeholder="Your company or organization"
                        value={formData.organization}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light tracking-tight mb-6">
                  Direct Contact
                </h3>
                <Card className="border-2 border-dashed">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-stone-700" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">Email</p>
                        <a 
                          href="mailto:fgz@fritzgeraldzephirin.com" 
                          className="text-stone-600 hover:text-stone-900 transition-colors"
                        >
                          fgz@fritzgeraldzephirin.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-light tracking-tight mb-6">
                  Connect
                </h3>
                <Card className="border-2 border-dashed">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-stone-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">LinkedIn</p>
                        <a 
                          href="https://www.linkedin.com/in/fritz-gerald-zephirin-039689252/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-stone-600 hover:text-stone-900 transition-colors"
                        >
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}