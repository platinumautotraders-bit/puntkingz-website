"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, TRIAL_CHECKOUT_URL } from "@/lib/constants";
import { Button } from "@/components/shared/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-bg-secondary border-l border-border"
          >
            <div className="flex flex-col h-full p-6">
              {/* Close */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={onClose}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block px-4 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-bg-card rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-auto">
                <Button href={TRIAL_CHECKOUT_URL} size="lg" className="w-full">
                  Start Free Trial
                </Button>
                <p className="mt-3 text-xs text-text-faint text-center">
                  7-day free trial. Cancel anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
