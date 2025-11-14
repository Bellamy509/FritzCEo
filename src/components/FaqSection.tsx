export default function FAQs() {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl  md:text-6xl">
              What I <br className="hidden lg:block" /> Believe{" "}
              <br className="hidden lg:block" />
              & Values
            </h2>
            <p>Honest thoughts on building and leading.</p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            <div className="pb-6">
              <h3 className="font-medium text-lg">
                My Core Philosophy
              </h3>
              <p className="text-muted-foreground mt-4">
                "Change is a one-time decision with a daily commitment." Success comes from showing up consistently, even on hard days. I&apos;m still working on this myself.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium text-lg">
                How I approach business
              </h3>
              <p className="text-muted-foreground mt-4">
                Build things that actually help people. Stay honest about what works and what doesn&apos;t. Keep learning, keep improving, keep showing up.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium text-lg">What drives my work</h3>
              <p className="text-muted-foreground my-4">
                I started because I saw real problems that needed solving. Language barriers. Access to technology. Business efficiency. Still trying to make a difference where I can.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium text-lg">
                Balancing faith and work
              </h3>
              <p className="text-muted-foreground mt-4">
                Trying to build something meaningful while staying grounded in what really matters. It&apos;s a daily practice, not a destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}