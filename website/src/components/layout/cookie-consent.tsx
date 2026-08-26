'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage on mount to verify if consent was already recorded
    const consent = localStorage.getItem('asia_group_cookie_consent');
    if (!consent) {
      // Trigger slide-in animation after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('asia_group_cookie_consent', 'accepted');
    window.dispatchEvent(new Event('asia_group_consent_changed'));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('asia_group_cookie_consent', 'declined');
    window.dispatchEvent(new Event('asia_group_consent_changed'));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 32px;
          right: 32px;
          max-width: 420px;
          background: #ffffff;
          border: 1px solid rgba(27, 94, 32, 0.12);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
          padding: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
          font-family: var(--font-body), sans-serif;
        }
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .cookie-banner__header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .cookie-banner__icon {
          font-size: 22px;
          color: var(--green-mid, #2E7D32);
        }
        .cookie-banner__title {
          font-family: var(--font-condensed), sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #111814;
        }
        .cookie-banner__text {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.6;
          color: rgba(17, 24, 20, 0.7);
          margin: 0;
        }
        .cookie-banner__link {
          color: var(--green-mid, #2E7D32);
          text-decoration: none;
          font-weight: 500;
        }
        .cookie-banner__link:hover {
          text-decoration: underline;
        }
        .cookie-banner__actions {
          display: flex;
          gap: 12px;
        }
        .cookie-banner__btn {
          flex: 1;
          font-family: var(--font-condensed), sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 12px 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          text-align: center;
        }
        .cookie-banner__btn--accept {
          background: #082114; /* Match dark forest green theme */
          color: #ffffff;
        }
        .cookie-banner__btn--accept:hover {
          background: var(--green-mid, #2E7D32);
          box-shadow: 0 4px 12px rgba(46, 125, 50, 0.2);
        }
        .cookie-banner__btn--decline {
          background: #f2f4f2;
          color: #111814;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        .cookie-banner__btn--decline:hover {
          background: #e4e7e4;
        }
        @media (max-width: 576px) {
          .cookie-banner {
            bottom: 0;
            right: 0;
            left: 0;
            max-width: 100%;
            border-radius: 0;
            border-left: none;
            border-right: none;
            border-bottom: none;
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="cookie-banner__header">
        <i className="ri-information-line cookie-banner__icon"></i>
        <div className="cookie-banner__title">Cookie Consent</div>
      </div>
      
      <p className="cookie-banner__text">
        We use cookies to optimize site performance, analyze traffic, and enhance your browsing experience. Read our full details in the <Link href="/cookies" className="cookie-banner__link">Cookie Policy</Link>.
      </p>

      <div className="cookie-banner__actions">
        <button onClick={handleDecline} className="cookie-banner__btn cookie-banner__btn--decline">
          Decline
        </button>
        <button onClick={handleAccept} className="cookie-banner__btn cookie-banner__btn--accept">
          Accept All
        </button>
      </div>
    </div>
  );
}
