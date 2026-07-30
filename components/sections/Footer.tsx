import Link from "next/link";

import Container from "@/components/layout/Container";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/#jobs" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Categories", href: "/#job-categories" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const socialLinkClassName = `
  inline-flex h-8 w-8 items-center justify-center
  rounded-full text-white/90
  transition-colors duration-300
  hover:bg-white/15
  hover:text-white
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-white
`;

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-brand-500 pb-12 pt-16 text-white lg:pb-16 lg:pt-20"
    >
      <Container>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-x-12">
          <div className="min-w-0 lg:max-w-[310px]">
            <Link
              href="/"
              aria-label="JobNow homepage"
              className="inline-flex items-center text-[30px] font-bold leading-none lg:text-[34px]"
            >
              <span className="text-ink">Job</span>
              <span className="text-white">Now</span>
            </Link>

            <p className="mt-5 max-w-[300px] text-[13px] leading-6 text-white/85 lg:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              consequat facilisis nibh vel faucibus.
            </p>
          </div>

          <div className="min-w-0 lg:max-w-[330px]">
            <h2 className="text-[20px] font-semibold leading-tight lg:text-[22px]">
              Company
            </h2>

            <address className="mt-5 space-y-3 text-[13px] leading-6 not-italic lg:text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Fifth+Avenue+New+York+1060+USA"
                target="_blank"
                rel="noreferrer"
                className="block max-w-full text-white/90 transition-colors duration-300 hover:text-white hover:underline focus-visible:outline-none focus-visible:underline"
              >
                Address: 123 Fifth Avenue, New York - 1060, USA.
              </a>

              <a
                href="tel:+16004567890"
                className="block w-fit text-white/90 transition-colors duration-300 hover:text-white hover:underline focus-visible:outline-none focus-visible:underline"
              >
                Call Us: +1 (600) 456 7890
              </a>

              <a
                href="mailto:yourid@example.com"
                className="block w-fit text-white/90 transition-colors duration-300 hover:text-white hover:underline focus-visible:outline-none focus-visible:underline"
              >
                Email: yourid@example.com
              </a>

              <p className="text-white/90">Mon-Sat: 9:00 AM - 7:00 PM</p>
            </address>
          </div>

          <nav aria-label="Footer navigation" className="min-w-0">
            <h2 className="text-[20px] font-semibold leading-tight lg:text-[22px]">
              Pages
            </h2>

            <ul className="mt-5 space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/90 transition-colors duration-300 hover:text-white hover:underline focus-visible:outline-none focus-visible:underline"
                  >
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      &gt;
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h2 className="text-[20px] font-semibold leading-tight lg:text-[22px]">
              Contact Us
            </h2>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Google"
                className={socialLinkClassName}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="block h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M21.35 12.18c0-.7-.06-1.22-.18-1.77H12v3.34h5.39a4.6 4.6 0 0 1-2 3.02l-.02.11 2.9 2.25.2.02c1.84-1.7 2.88-4.2 2.88-6.97Z" />
                  <path d="M12 21.75c2.63 0 4.83-.87 6.44-2.37l-3.07-2.38c-.82.56-1.92.95-3.37.95a5.85 5.85 0 0 1-5.54-4.04l-.11.01-3.02 2.34-.04.1A9.72 9.72 0 0 0 12 21.75Z" />
                  <path d="M6.46 13.91A5.92 5.92 0 0 1 6.14 12c0-.67.12-1.31.31-1.91v-.12L3.4 7.59l-.1.05A9.72 9.72 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.36l3.17-2.45Z" />
                  <path d="M12 6.05c1.83 0 3.06.79 3.76 1.44l2.74-2.67C16.82 3.25 14.63 2.25 12 2.25a9.72 9.72 0 0 0-8.71 5.39l3.16 2.45A5.87 5.87 0 0 1 12 6.05Z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Facebook"
                className={socialLinkClassName}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="block h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M14 8.2V6.7c0-.7.2-1.1 1.2-1.1h1.3V3.2c-.6-.1-1.3-.2-2-.2-2.2 0-3.7 1.3-3.7 3.6v1.6H8.3V11h2.5v10H14V11h2.5l.4-2.8H14Z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Twitter"
                className={socialLinkClassName}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="block h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M20.7 7.1v.6c0 6-4.5 12.8-12.8 12.8-2.5 0-4.9-.7-6.9-2a9 9 0 0 0 6.6-1.9 4.5 4.5 0 0 1-4.2-3.1 4.5 4.5 0 0 0 2-.1 4.5 4.5 0 0 1-3.6-4.4v-.1c.6.3 1.3.5 2 .6A4.5 4.5 0 0 1 2.4 3.5a12.8 12.8 0 0 0 9.3 4.7 4.5 4.5 0 0 1 7.7-4.1 9 9 0 0 0 2.9-1.1 4.5 4.5 0 0 1-2 2.5c.9-.1 1.7-.3 2.5-.7-.6.9-1.3 1.7-2.1 2.3Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit LinkedIn"
                className={socialLinkClassName}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="block h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M5.2 8.4H1.8V21h3.4V8.4ZM3.5 3A2 2 0 1 0 3.5 7a2 2 0 0 0 0-4ZM21 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2V8.4H9.2V21h3.4v-6.2c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H21v-7.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
