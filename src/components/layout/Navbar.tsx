"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, FUTURE_SPORTS } from "@/lib/constants";
import { Button } from "@/components/shared/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sportDropdown, setSportDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(5,5,8,0.92)] backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/puntkingz-icon-dark.jpg"
              alt="Punt Kingz"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg">
              Punt<span className="text-accent">Kingz</span>
            </span>
          </Link>

          {/* Sport Selector + Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {/* Sport Selector */}
            <div className="relative">
              <button
                onClick={() => setSportDropdown(!sportDropdown)}
                className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                <span className="text-accent font-semibold">NRL</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {sportDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 left-0 glass-card p-2 min-w-[140px]"
                >
                  {FUTURE_SPORTS.map((sport) => (
                    <div
                      key={sport.name}
                      className={`px-3 py-2 rounded-lg text-sm ${
                        sport.active
                          ? "text-accent font-semibold bg-accent-dim"
                          : "text-text-faint cursor-not-allowed"
                      }`}
                    >
                      {sport.name}
                      {!sport.active && (
                        <span className="ml-2 text-xs text-text-faint">Soon</span>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Nav Links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === link.href
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button href="#pricing" size="md">
                Start Free Trial
              </Button>
            </div>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
