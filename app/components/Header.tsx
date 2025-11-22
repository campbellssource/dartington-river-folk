"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--header-bg)] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" style={{ minHeight: "var(--header-height)" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold">
              Dartington River Folk
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <Link 
              href="/" 
              className="hover:text-[var(--button-primary)] transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/locations" 
              className="hover:text-[var(--button-primary)] transition-colors"
            >
              Locations
            </Link>
            <Link 
              href="/observations" 
              className="hover:text-[var(--button-primary)] transition-colors"
            >
              Observations
            </Link>
            <Link 
              href="/about" 
              className="hover:text-[var(--button-primary)] transition-colors"
            >
              About
            </Link>
            <Link 
              href="/account" 
              className="px-4 py-2 bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase text-sm"
            >
              My Account
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="py-2 border-b border-white/10 hover:text-[var(--button-primary)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/locations" 
                className="py-2 border-b border-white/10 hover:text-[var(--button-primary)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Locations
              </Link>
              <Link 
                href="/observations" 
                className="py-2 border-b border-white/10 hover:text-[var(--button-primary)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Observations
              </Link>
              <Link 
                href="/about" 
                className="py-2 border-b border-white/10 hover:text-[var(--button-primary)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/account" 
                className="mt-2 py-2 text-center bg-[var(--button-primary)] text-[var(--button-text)] hover:bg-[var(--button-primary-hover)] transition-colors uppercase text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Account
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
