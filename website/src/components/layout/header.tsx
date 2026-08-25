'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileSubsOpen, setMobileSubsOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Subsidiaries', href: '/businesses' },
    { name: 'Operations', href: '/operations' },
    { name: 'CSR', href: '/csr' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const subsidiaryLinks = [
    { name: 'Wholesale & Distribution', href: '/businesses/wholesale' },
    { name: 'Asia Automobiles', href: '/businesses/automobiles' },
    { name: 'Asia Beverages', href: '/businesses/beverages' },
    { name: 'Asia Cosmetics', href: '/businesses/cosmetics' },
    { name: 'Asia Pharmaceuticals', href: '/businesses/pharmaceuticals' },
    { name: 'Asia Phones & Accessories', href: '/businesses/phones' },
  ];

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || /^\/[a-zA-Z]{2}$/.test(pathname);
    }
    return pathname.includes(href);
  };

  return (
    <>
      <nav id="main-nav" className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        {/* Logo */}
        <Link href="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.jpg" alt="Asia Group" style={{ height: '60px', width: 'auto', borderRadius: '0px' }} />
        </Link>

        {/* Desktop Links */}
        <ul className="nav__links" style={{ margin: 0, padding: 0 }}>
          {navLinks.map((link) => {
            if (link.name === 'Subsidiaries') {
              return (
                <li key={link.href} className="nav__item--has-dropdown">
                  <Link href={link.href} className={`nav__link ${isActive(link.href) ? 'active' : ''}`}>
                    {link.name} <i className="ri-arrow-down-s-line" style={{ fontSize: '0.85em', marginLeft: '2px', verticalAlign: 'middle' }}></i>
                  </Link>
                  <ul className="nav__dropdown">
                    {subsidiaryLinks.map((sub) => (
                      <li key={sub.href}>
                        <Link href={sub.href} className="nav__dropdown-link">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={link.href}>
                <Link href={link.href} className={`nav__link ${isActive(link.href) ? 'active' : ''}`}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + Hamburger */}
        <div className="nav__actions">
          <Link href="/contact" className="nav__cta">
            Partner With Us
          </Link>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="nav__hamburger"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="nav__mobile">
          {navLinks.map((link) => {
            if (link.name === 'Subsidiaries') {
              return (
                <div key={link.href} className="nav__mobile-dropdown-container">
                  <button
                    onClick={() => setMobileSubsOpen(!mobileSubsOpen)}
                    className="nav__mobile-link"
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      padding: '14px 0',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{link.name}</span>
                    <i className={mobileSubsOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"} style={{ fontSize: '1.2em' }}></i>
                  </button>
                  {mobileSubsOpen && (
                    <div className="nav__mobile-sublinks">
                      {subsidiaryLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          className="nav__mobile-sublink"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="nav__mobile-link"
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="nav__mobile-cta"
          >
            Partner With Us
          </Link>
        </div>
      )}

      {/* Styles for hover dropdown and mobile sublinks */}
      <style>{`
        @media (max-width: 900px) {
          .nav__links { display: none !important; }
          .nav__cta { display: none !important; }
          .nav__hamburger { display: flex !important; }
        }

        /* Desktop Dropdown Styles */
        .nav__links li {
          position: relative;
        }

        .nav__item--has-dropdown:hover .nav__dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .nav__dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
          list-style: none;
          padding: 8px 0;
          margin: 0;
          min-width: 260px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          z-index: 1010;
        }

        .nav__dropdown-link {
          display: block;
          padding: 10px 24px;
          font-family: var(--font-condensed);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.25s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.02);
        }

        .nav__dropdown-link:last-child {
          border-bottom: none;
        }

        .nav__dropdown-link:hover {
          background: var(--bg-muted);
          color: var(--text-main);
          padding-left: 28px;
        }

        /* Mobile Sublinks Styles */
        .nav__mobile-sublinks {
          display: flex;
          flex-direction: column;
          padding-left: 16px;
          border-left: 1px solid var(--border-color);
          margin-bottom: 8px;
        }

        .nav__mobile-sublink {
          display: block;
          font-family: var(--font-condensed);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.03);
          transition: all 0.2s ease;
        }

        .nav__mobile-sublink:last-child {
          border-bottom: none;
        }

        .nav__mobile-sublink:hover {
          color: var(--text-main);
          padding-left: 4px;
        }
      `}</style>
    </>
  );
}
