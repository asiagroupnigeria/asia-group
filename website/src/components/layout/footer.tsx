'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        {/* Footer Top */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="nav__logo" style={{ textDecoration: 'none', marginBottom: '20px' }}>
              <img src="/logo.jpg" alt="Asia Group" style={{ height: '50px', width: 'auto', borderRadius: '0px' }} />
            </Link>
            <p className="footer__desc">
              Africa&apos;s number one wholesale and distribution conglomerate. Building legacy. Empowering trade. Growing together.
            </p>
            <div className="footer__socials">
              {[
                <i key="in" className="ri-linkedin-fill"></i>,
                // <i key="x" className="ri-twitter-x-line"></i>,
                <i key="f" className="ri-facebook-fill"></i>,
                // <i key="ig" className="ri-instagram-line"></i>,
                // <i key="yt" className="ri-youtube-fill"></i>
              ].map((icon, i) => (
                <a key={i} href="#" className="footer__social" style={{ fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="footer__col-title">Company</h5>
            <div className="footer__links">
              {[
                { label: 'About Asia Group', href: '/about' },
                { label: 'Our History', href: '/about#history' },
                { label: 'Leadership', href: '/#leadership' },
                { label: 'Community Impact', href: '/sustainability' },
                { label: 'Careers', href: '/careers' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="footer__link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Subsidiaries */}
          <div>
            <h5 className="footer__col-title">Subsidiaries</h5>
            <div className="footer__links">
              {[
                { label: 'Wholesale & Distribution', href: '/businesses/wholesale' },
                { label: 'Asia Pharmacy', href: '/businesses/pharmaceuticals' },
                { label: 'Asia Beverages', href: '/businesses/beverages' },
                { label: 'Asia Automobiles', href: '/businesses/automobiles' },
                { label: 'Asia Cosmetics', href: '/businesses/cosmetics' },
                { label: 'Asia Phones', href: '/businesses/phones' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="footer__link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div>
            <h5 className="footer__col-title">Sectors</h5>
            <div className="footer__links">
              {[
                'FMCG Distribution',
                'Pharmaceuticals',
                'Automobiles & Logistics',
                'Beverages',
                'Consumer Electronics',
                'Manufacturing (Coming)',
              ].map((label) => (
                <span key={label} className="footer__link" style={{ cursor: 'default' }}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="footer__col-title">Contact</h5>
            <div className="footer__links">
              {[
                { label: 'Head Office — Kano', href: '/contact' },
                { label: 'Niger State Office', href: '/contact' },
                { label: 'Cameroon Office', href: '/contact' },
                { label: 'Media Enquiries', href: '/contact' },
                { label: 'Investor Relations', href: '/contact' },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Asia Group of Companies Ltd. All rights reserved. Registered in Nigeria.
          </p>
          <div className="footer__legal">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Use', href: '/terms' },
              { label: 'Cookie Policy', href: '/cookies' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="footer__legal-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
