'use client';

import React from 'react';
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="legal-page">
      <style>{`
        .legal-page {
          background: #ffffff;
          color: #111814;
          font-family: var(--font-body), sans-serif;
          min-height: 100vh;
        }
        .legal-page__wrap {
          padding: 140px 60px 100px;
          max-width: 860px;
          margin: 0 auto;
        }
        .legal-page__tag {
          font-family: var(--font-condensed), sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--green-mid, #2E7D32);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .legal-page__tag::before {
          content: '';
          display: block;
          width: 30px;
          height: 1px;
          background: var(--green-mid, #2E7D32);
        }
        .legal-page__title {
          font-family: var(--font-display), serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 300;
          line-height: 1.1;
          color: #111814;
          margin-bottom: 12px;
        }
        .legal-page__last-updated {
          font-size: 13px;
          color: #666666;
          font-weight: 300;
          margin-bottom: 56px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .legal-page__note {
          background: #f2f4f2;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-left: 3px solid var(--green-mid, #2E7D32);
          padding: 20px 24px;
          margin: 32px 0;
        }
        .legal-page__note p {
          font-size: 13px;
          color: rgba(17, 24, 20, 0.7);
          margin: 0;
        }
        .legal-page__body h2 {
          font-family: var(--font-condensed), sans-serif;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #111814;
          margin: 48px 0 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .legal-page__body h2:first-of-type {
          margin-top: 0;
        }
        .legal-page__body p {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(17, 24, 20, 0.75);
          margin-bottom: 16px;
        }
        .legal-page__body ul {
          padding-left: 20px;
          margin-bottom: 16px;
        }
        .legal-page__body li {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(17, 24, 20, 0.75);
          margin-bottom: 8px;
        }
        .legal-page__body a {
          color: var(--green-mid, #2E7D32);
          text-decoration: none;
          font-weight: 500;
        }
        .legal-page__body a:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .legal-page__wrap {
            padding: 120px 24px 80px;
          }
        }
      `}</style>

      <div className="legal-page__wrap">
        <div className="legal-page__tag">Legal</div>
        <h1 className="legal-page__title">Cookie Policy</h1>
        <p className="legal-page__last-updated">Last Updated: August 26, 2026 &nbsp;|&nbsp; Effective Date: August 26, 2026</p>

        <div className="legal-page__note">
          <p><strong>Note:</strong> This Cookie Policy serves as our official draft template. All contents are configured to conform with local and international web standards and are pending final legal authorization by the General Counsel before execution.</p>
        </div>

        <div className="legal-page__body">
          <h2>1. Introduction</h2>
          <p>This Cookie Policy explains how Asia Group of Companies Ltd uses cookies and similar technologies on our website.</p>
          <p>Asia Group of Companies Ltd ("Asia Group", "we", "us", "our") is committed to protecting your privacy and ensuring transparency about how we handle information. This document applies to all visitors and users of our website and digital platforms.</p>

          <h2>2. Company Information</h2>
          <p>Asia Group of Companies Ltd is registered in Nigeria. Our registered office and corporate details are as follows:</p>
          <p>
            Registered Address: No. 46, Niger Street, Kano, Kano State, Nigeria.<br />
            CAC Registration / RC Number: RC-1832253<br />
            Legal Contact: <a href="mailto:legal@asiagroup.ng">legal@asiagroup.ng</a>
          </p>

          <h2>3. What Are Cookies</h2>
          <p>Cookies are small text files stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

          <h2>4. How We Use Cookies</h2>
          <p>We use cookies to analyze website traffic, customize your browsing experience, and remember your preferences. This helps us optimize performance and improve the layout and functionality of our platform.</p>

          <h2>5. Your Rights & Options</h2>
          <p>Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, though doing so may prevent you from fully utilizing some features of our website.</p>

          <h2>6. Contact Us</h2>
          <p>For any questions regarding this Cookie Policy, please contact our Legal Team at:</p>
          <p>
            Asia Group Legal Department<br />
            No. 46, Niger Street, Kano, Kano State, Nigeria.<br />
            Email: <a href="mailto:legal@asiagroup.ng">legal@asiagroup.ng</a>
          </p>

          <div className="legal-page__note" style={{ marginTop: '40px' }}>
            <p>This document was last reviewed on August 26, 2026. Asia Group reserves the right to update this Cookie Policy at any time. Material changes will be notified via the website. Continued use of this website after such changes constitutes acceptance of the updated document.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
