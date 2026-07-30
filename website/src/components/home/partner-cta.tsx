import React from 'react';
import Link from 'next/link';

export function PartnerCta() {
  return (
    <section id="partner-cta">
      <div className="pc-inner">
        <div className="pc-content fade-up">
          {/* Tag removed per requirements */}
          <h2 className="pc-headline">
            If you manufacture it,<br />we distribute it.<br />
            If you need it in volume,<br />we supply it.
          </h2>
          <p className="pc-sub">
            Whether you are a global manufacturer seeking African distribution reach, an institutional buyer requiring volume supply, or an investor looking at Africa&apos;s most credible trade infrastructure — Asia Group is your partner.
          </p>
        </div>
        <div className="pc-paths fade-up delay-2">
          <Link href="/businesses/wholesale" className="pc-path">
            <div className="pc-path-icon"><i className="ri-building-line"></i></div>
            <div>
              <div className="pc-path-title">Become a Principal Partner</div>
              <p className="pc-path-desc">
                Global manufacturers seeking authorised distribution across Nigeria and West Africa — enquire about principal partnership terms.
              </p>
            </div>
            <div className="pc-path-arrow">→</div>
          </Link>
          <Link href="/businesses/wholesale" className="pc-path">
            <div className="pc-path-icon"><i className="ri-truck-line"></i></div>
            <div>
              <div className="pc-path-title">Enquire as a Bulk Buyer</div>
              <p className="pc-path-desc">
                Institutional buyers, sub-distributors, and traders requiring container-scale quantities across all product categories.
              </p>
            </div>
            <div className="pc-path-arrow">→</div>
          </Link>
          <Link href="/contact" className="pc-path">
            <div className="pc-path-icon"><i className="ri-earth-line"></i></div>
            <div>
              <div className="pc-path-title">Setup in Nigeria</div>
              <p className="pc-path-desc">
                Companies seeking to establish a presence in Nigeria and looking for credible, experienced local partners.
              </p>
            </div>
            <div className="pc-path-arrow">→</div>
          </Link>
        </div>
      </div>
    </section>
  );
}