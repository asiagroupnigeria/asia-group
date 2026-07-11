'use client';

import * as React from 'react';
import Link from 'next/link';

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Subsidiaries', href: '/businesses' },
    { name: 'Operations', href: '/#operations' },
    { name: 'Partners', href: '/#partners' },
    { name: 'Leadership', href: '/#leadership' },
    { name: 'Impact', href: '/sustainability' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav id="main-nav" className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        {/* Logo */}
        <Link href="/" className="nav__logo">
          <img src="/logo.jpg" alt="Asia Group" style={{ height: '60px', width: 'auto', borderRadius: '0px' }} />
        </Link>

        {/* Desktop Links */}
        <ul className="nav__links" style={{ margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav__link">
                {link.name}
              </Link>
            </li>
          ))}
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="nav__mobile-link"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="nav__mobile-cta"
          >
            Partner With Us
          </Link>
        </div>
      )}

      {/* Hide desktop links and CTA on mobile */}
      <style>{`
        @media (max-width: 900px) {
          .nav__links { display: none !important; }
          .nav__cta { display: none !important; }
          .nav__hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
