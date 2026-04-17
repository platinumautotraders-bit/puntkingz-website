import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about#contact" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/puntkingz-icon-dark.jpg"
                alt="Punt Kingz"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-base">
                Punt<span className="text-accent">Kingz</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              NRL match predictions powered by Monte Carlo simulation. Not AI.
              Pure mathematics.
            </p>
            <p className="text-xs text-text-faint">
              More sports coming soon.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-sm text-text-primary mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-sm text-text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-sm text-text-primary mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Responsible Gambling + Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-text-faint leading-relaxed mb-4">
            Punt Kingz provides statistical predictions for entertainment and
            informational purposes. Gambling involves risk. If you or someone you
            know has a gambling problem, contact the{" "}
            <a
              href="https://www.gambleaware.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary underline"
            >
              National Gambling Helpline
            </a>{" "}
            on 1800 858 858 or visit gambleaware.com.au. Please gamble
            responsibly.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-xs text-text-faint">
              {new Date().getFullYear()} Punt Kingz. All rights reserved.
            </p>
            <p className="text-xs text-text-faint">
              18+ only. Conditions apply.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
