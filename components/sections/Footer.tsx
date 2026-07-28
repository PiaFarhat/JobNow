import Link from "next/link";

import Container from "@/components/layout/Container";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Booking", href: "#booking" },
  { label: "Facilities", href: "#facilities" },
  { label: "About Us", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 lg:h-6 lg:w-6"
      fill="currentColor"
    >
      <path d="M21.8 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.5a4.8 4.8 0 0 1-2.1 3.1v2.6h3.4c2-1.9 3-4.6 3-7.6Z" />
      <path d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.7v2.7A10.4 10.4 0 0 0 12 22Z" />
      <path d="M6.2 13.6a6.3 6.3 0 0 1 0-4V6.9H2.7a10.4 10.4 0 0 0 0 9.4l3.5-2.7Z" />
      <path d="M12 5.1c1.5 0 2.9.5 4 1.6l3-3A10 10 0 0 0 2.7 6.9l3.5 2.7C7 7 9.3 5.1 12 5.1Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 lg:h-6 lg:w-6"
      fill="currentColor"
    >
      <path d="M14 8h3V4.4c-.5-.1-2.1-.2-4-.2-3.9 0-6.6 2.4-6.6 6.8v3.8H2v4h4.4V24h5.4v-5.2h4.5l.7-4h-5.2v-3.4C11.8 9.2 12.4 8 14 8Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 lg:h-6 lg:w-6"
      fill="currentColor"
    >
      <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.6 1A4 4 0 0 0 12 8.9c0 .3 0 .6.1.9A11.4 11.4 0 0 1 3.8 5.6a4 4 0 0 0 1.2 5.3c-.7 0-1.3-.2-1.8-.5v.1a4 4 0 0 0 3.2 3.9c-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1a4 4 0 0 0 3.8 2.8A8.1 8.1 0 0 1 3.2 19H2a11.4 11.4 0 0 0 6.2 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5c.9-.8 1.6-1.7 2.2-2.8Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 lg:h-6 lg:w-6"
      fill="currentColor"
    >
      <path d="M5.3 7.5A2.3 2.3 0 1 0 5.3 3a2.3 2.3 0 0 0 0 4.5ZM3.4 9.2h3.8V21H3.4V9.2ZM9.4 9.2H13v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-3.8v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9.4V9.2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-brand-500 pb-12 pt-10 text-white lg:pb-20 lg:pt-24"
    >
      <Container>
        <div
          className="
            grid grid-cols-2 gap-x-8 gap-y-9

            lg:grid-cols-[1.35fr_1.25fr_0.65fr_0.65fr]
            lg:gap-x-20
          "
        >
          {/* Logo and description */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="JobNow home"
              className="
                inline-block text-[30px]
                font-bold leading-none
                tracking-[-0.04em]
                text-ink

                lg:text-[46px]
              "
            >
              Job<span className="text-white">Now</span>
            </Link>

            <p
              className="
                mt-4 max-w-[240px]
                text-[8px] leading-[1.55]
                text-white/90

                lg:mt-6 lg:max-w-[300px]
                lg:text-[14px] lg:leading-6
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              consequat facilisis nibh vel faucibus.
            </p>
          </div>

          {/* Company information */}
          <div>
            <h3 className="text-[15px] font-semibold lg:text-[24px]">
              Company
            </h3>

            <div
              className="
                mt-3 space-y-1
                text-[7px] leading-[1.6]
                text-white/95

                lg:mt-5 lg:text-[14px]
                lg:leading-6
              "
            >
              <p>Address : 123 Fifth Avenue, New York - 1060, USA.</p>
              <p>Call Us : +(1600) 456 7890</p>
              <p>Email : yourid@example.com</p>
              <p>Mon Sat : 9:00 AM - 19:00 PM</p>
            </div>
          </div>

          {/* Page links */}
          <div>
            <h3 className="text-[15px] font-semibold lg:text-[24px]">
              Pages
            </h3>

            <ul className="mt-3 space-y-1 lg:mt-5">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="
                      inline-flex items-center
                      gap-1.5 text-[7px]
                      text-white transition-opacity
                      hover:opacity-70

                      lg:text-[14px]
                    "
                  >
                    <span aria-hidden="true">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-[15px] font-semibold lg:text-[24px]">
              Contact Us
            </h3>

            <div className="mt-3 flex items-center gap-4 lg:mt-5">
              <Link
                href="#"
                aria-label="Google"
                className="transition-transform hover:-translate-y-0.5"
              >
                <GoogleIcon />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="transition-transform hover:-translate-y-0.5"
              >
                <FacebookIcon />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="transition-transform hover:-translate-y-0.5"
              >
                <TwitterIcon />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="transition-transform hover:-translate-y-0.5"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}