"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studiesDropdownOpen, setStudiesDropdownOpen] = useState(false);
  const [mobileStudiesOpen, setMobileStudiesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--header-bg)] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" style={{ minHeight: "var(--header-height)" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="font-semibold" style={{ fontSize: '20px', lineHeight: '24px', color: '#ffffff' }}>
              Bidwell Brook Monitors
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
            <div 
              className="relative"
              onMouseEnter={() => setStudiesDropdownOpen(true)}
              onMouseLeave={() => setStudiesDropdownOpen(false)}
            >
              <button
                className="hover:text-[var(--button-primary)] transition-colors flex items-center gap-1"
                aria-expanded={studiesDropdownOpen}
              >
                Studies
                <svg className={`w-4 h-4 transition-transform ${studiesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {studiesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 text-sm font-semibold text-[var(--primary-navy)] border-b border-gray-100">
                    Heavy Rain Surveys
                  </div>
                  <Link
                    href="/studies/heavy-rain/locations"
                    className="block px-4 py-2 text-sm text-[var(--primary-dark)] hover:bg-[var(--secondary-light-grey)] transition-colors"
                  >
                    Locations
                  </Link>
                  <Link
                    href="/studies/heavy-rain/observations"
                    className="block px-4 py-2 text-sm text-[var(--primary-dark)] hover:bg-[var(--secondary-light-grey)] transition-colors"
                  >
                    Observations
                  </Link>
                </div>
              )}
            </div>
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
              <div>
                <button
                  onClick={() => setMobileStudiesOpen(!mobileStudiesOpen)}
                  className="w-full py-2 border-b border-white/10 hover:text-[var(--button-primary)] transition-colors flex items-center justify-between"
                >
                  <span>Studies</span>
                  <svg className={`w-4 h-4 transition-transform ${mobileStudiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileStudiesOpen && (
                  <div className="pl-4 py-2 bg-white/5">
                    <div className="text-sm font-semibold mb-2 text-white/70">Heavy Rain Surveys</div>
                    <Link
                      href="/studies/heavy-rain/locations"
                      className="block py-2 text-sm hover:text-[var(--button-primary)] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Locations
                    </Link>
                    <Link
                      href="/studies/heavy-rain/observations"
                      className="block py-2 text-sm hover:text-[var(--button-primary)] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Observations
                    </Link>
                  </div>
                )}
              </div>
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
