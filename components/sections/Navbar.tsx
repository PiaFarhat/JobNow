"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Container from "@/components/layout/Container";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Job", href: "#jobs" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showSolidHeader = isScrolled || isMenuOpen;

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        ${
          showSolidHeader
            ? "bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md"
            : "bg-hero lg:bg-transparent"
        }
      `}
    >
      <Container>
        <nav
          aria-label="Main navigation"
          className="relative flex h-[72px] min-w-0 items-center justify-between md:h-20"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="JobNow home"
            className="
              absolute left-1/2 -translate-x-1/2
              text-[28px] font-bold leading-none
              tracking-[-0.04em] text-ink
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-500
              focus-visible:ring-offset-4
              md:static md:translate-x-0
            "
          >
            Job<span className="text-brand-500">Now</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden min-w-0 items-center gap-5 md:flex lg:gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  whitespace-nowrap text-sm font-medium text-heading
                  transition-colors hover:text-brand-500
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-brand-500
                  focus-visible:ring-offset-4
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop account actions */}
          <div className="hidden shrink-0 items-center gap-4 md:flex lg:gap-5">
            <Link
              href="#sign-in"
              className={`
                whitespace-nowrap text-sm font-medium transition-colors
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand-500
                focus-visible:ring-offset-2
                ${
                  isScrolled
                    ? "text-ink hover:text-brand-500"
                    : "text-ink hover:text-brand-500 lg:text-white lg:hover:text-white/75"
                }
              `}
            >
              Sign In
            </Link>

            <Link
  href="/register"
  className="
    group inline-flex min-h-11 items-center gap-2
    whitespace-nowrap rounded-[7px] bg-white px-4 py-3
    text-sm font-semibold text-ink
    transition-all duration-300
    hover:-translate-y-0.5
    hover:shadow-md
  "
>
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    className="
      h-5 w-5
      transition-transform duration-300 ease-out
      group-hover:-translate-y-1
      group-hover:translate-x-1
    "
  >
    <path
      d="M14 5H19V10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M19 5L11 13"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    <path
      d="M19 13V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H11"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  <span>Create Account</span>
</Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="
              ml-auto inline-flex h-9 w-9
              items-center justify-center
              rounded-[4px] bg-brand-500 text-white
              transition-colors hover:bg-brand-600
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-500
              focus-visible:ring-offset-2
              md:hidden
            "
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-[22px] w-[22px]"
            >
              {isMenuOpen ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="
              mb-4 max-h-[calc(100vh-88px)] overflow-y-auto rounded-xl border border-border
              bg-white p-4 shadow-lg sm:p-5 md:hidden
            "
          >
            <div className="flex flex-col gap-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="
                    rounded-md px-3 py-3
                    text-sm font-medium text-heading
                    transition-colors
                    hover:bg-brand-50 hover:text-brand-700
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-500
                  "
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-border pt-4">
                <Link
                  href="#sign-in"
                  onClick={closeMobileMenu}
                  className="
                    inline-flex h-11 items-center justify-center
                    rounded-md border border-brand-500
                    text-sm font-semibold text-brand-700
                    transition-colors hover:bg-brand-50
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-500
                  "
                >
                  Sign In
                </Link>

                <Link
                  href="#create-account"
                  onClick={closeMobileMenu}
                  className="
                    inline-flex h-11 items-center justify-center
                    rounded-md bg-brand-500 px-3
                    text-center text-sm font-semibold text-white
                    cursor-pointer
                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5 hover:scale-[1.01]
                    hover:bg-brand-600
                    active:translate-y-0 active:scale-[0.99]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-500
                  "
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
