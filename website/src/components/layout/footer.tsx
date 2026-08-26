'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer-new">
      <style>{`
        .footer-new {
          background: #082114; /* Deep dark forest green matching Option A theme */
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 60px 40px;
          color: rgba(255, 255, 255, 0.7);
          font-family: var(--font-body), sans-serif;
        }
        .footer-new__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .footer-new__main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .footer-new__brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-new__logo-img {
          height: 44px;
          width: auto;
          display: block;
          filter: brightness(0) invert(1); /* Premium white logo style for dark green background */
        }
        .footer-new__socials {
          display: flex;
          gap: 16px;
        }
        .footer-new__social {
          color: rgba(255, 255, 255, 0.5);
          font-size: 18px;
          transition: color 0.3s ease;
          text-decoration: none;
        }
        .footer-new__social:hover {
          color: #ffffff;
        }
        .footer-new__nav {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer-new__link {
          color: rgba(255, 255, 255, 0.7);
          font-family: var(--font-condensed), sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-new__link:hover {
          color: #ffffff;
        }
        .footer-new__dot {
          color: rgba(255, 255, 255, 0.2);
          font-size: 12px;
          user-select: none;
        }
        .footer-new__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.45);
        }
        .footer-new__copy {
          font-weight: 300;
        }
        .footer-new__legal {
          display: flex;
          gap: 24px;
        }
        .footer-new__legal-link {
          color: rgba(255, 255, 255, 0.45);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-new__legal-link:hover {
          color: #ffffff;
        }
        @media (max-width: 768px) {
          .footer-new {
            padding: 48px 24px;
          }
          .footer-new__main {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
          .footer-new__nav {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .footer-new__dot {
            display: none;
          }
          .footer-new__bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .footer-new__legal {
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <div className="footer-new__inner">
        <div className="footer-new__main">
          {/* Brand Logo & Socials */}
          <div className="footer-new__brand">
            <Link href="/" className="nav__logo" style={{ textDecoration: 'none' }}>
              <img src="/logo.jpg" alt="Asia Group" className="footer-new__logo-img" />
            </Link>
            <div className="footer-new__socials">
              <a href="#" className="footer-new__social" aria-label="LinkedIn">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="footer-new__social" aria-label="Facebook">
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
          </div>

          {/* Clean Horizontal Navigation Bar */}
          <nav className="footer-new__nav">
            <Link href="/about" className="footer-new__link">About</Link>
            <span className="footer-new__dot">•</span>
            <Link href="/businesses" className="footer-new__link">Subsidiaries</Link>
            <span className="footer-new__dot">•</span>
            <Link href="/csr" className="footer-new__link">CSR</Link>
            <span className="footer-new__dot">•</span>
            <Link href="/careers" className="footer-new__link">Careers</Link>
            <span className="footer-new__dot">•</span>
            <Link href="/news" className="footer-new__link">News</Link>
            <span className="footer-new__dot">•</span>
            <Link href="/contact" className="footer-new__link">Contact</Link>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="footer-new__bottom">
          <p className="footer-new__copy">
            © {new Date().getFullYear()} Asia Group of Companies Ltd. All rights reserved. Registered in Nigeria.
          </p>
          <div className="footer-new__legal">
            <Link href="/privacy" className="footer-new__legal-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-new__legal-link">Terms of Use</Link>
            <Link href="/cookies" className="footer-new__legal-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
