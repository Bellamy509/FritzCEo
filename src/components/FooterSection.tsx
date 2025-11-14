import Link from "next/link";

const links = {
  navigation: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  companies: [
    { title: "AI Thinking Lab LLC", href: "https://aithinkinglab.co/" },
    { title: "Lakay AI", href: "https://lakay.ai/" },
    { title: "Innovai Global Solutions Inc.", href: "https://innovaigs.com/" },
    { title: "Defrilex Group LLC", href: "https://defrilex.com/" },
  ],
  platforms: [
    { title: "Marketplace", href: "https://defrilex-ls.com/" },
    { title: "Interpretation Portal", href: "https://defrilex.interpretmanager.com/ng/#/app/account/sign-in" },
    { title: "Workforce Management", href: "https://talvatec.com/" },
  ],
  connect: [
    { title: "LinkedIn", href: "https://www.linkedin.com/in/fritz-gerald-zephirin-039689252/" },
    { title: "X (Twitter)", href: "https://x.com/zephirin_fritz" },
  ],
};

export default function FooterSection() {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Main Footer Content - 5 Column Layout */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-medium tracking-tight text-stone-900">
              Fritz Gerald Zephirin
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-stone-600">
              Building companies that elevate communication, unlock opportunity, and empower people globally.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-medium text-stone-900">Navigation</h4>
            <ul className="mt-6 space-y-3">
              {links.navigation.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies Column */}
          <div>
            <h4 className="text-sm font-medium text-stone-900">Companies</h4>
            <ul className="mt-6 space-y-3">
              {links.companies.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms & Services Column */}
          <div>
            <h4 className="text-sm font-medium text-stone-900">Platforms &amp; Services</h4>
            <ul className="mt-6 space-y-3">
              {links.platforms.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-sm font-medium text-stone-900">Connect</h4>
            <ul className="mt-6 space-y-3">
              {links.connect.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-stone-200/50" />

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs font-light text-stone-500">
            © 2025 Fritz Gerald Zephirin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}