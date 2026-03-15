import { useEffect } from "react";

const CTA_URL =
  "https://effortlessrentalgroup.com/?ref=highline&utm_source=highline&utm_medium=referral&utm_campaign=highline_referral";

function trackReferralClick(label: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "referral_click", {
      event_label: label,
    });
  }
}

function CTAButton({
  label,
  className,
  trackLabel,
}: {
  label: string;
  className?: string;
  trackLabel: string;
}) {
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn ${className ?? ""}`}
      onClick={() => trackReferralClick(trackLabel)}
    >
      {label}
    </a>
  );
}

export default function LandingPage() {
  useEffect(() => {
    document.title =
      "Denver Short-Term Rental Property Management | Highline Denver";
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <header className="hero" role="banner">
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-topbar">
          <div className="hero-logo">
            <img
              src="/highline-logo.png"
              alt="Highline Management"
              className="hero-logo-img"
            />
            <span className="hero-logo-name">Highline Management</span>
          </div>
        </div>
        <div className="hero-content">

          <div className="hero-left">
            <h1 className="hero-h1">
              Short&#x2011;Term Rental Management<br />
              in Denver &amp; Beyond
            </h1>
            <p className="hero-sub">
              Now connecting property owners with our trusted provider,{" "}
              <strong>Effortless Rental Group</strong> for full service STR
              management and a la carte property maintenance and turnover
              operations.
            </p>
            <p className="hero-trust">Our clients are in good hands.</p>
            <CTAButton
              label="Connect with Effortless Rental Group →"
              className="hero-cta hero-cta--mobile"
              trackLabel="hero_cta"
            />
          </div>

          <div className="hero-right">
            <div className="hero-cta-card">
              <p className="hero-card-eyebrow">Now accepting owners</p>
              <p className="hero-card-body">Get matched with a trusted local STR manager for a free, no-obligation revenue estimate on your property.</p>
              <CTAButton
                label="Get a Free Revenue Estimate →"
                className="hero-cta"
                trackLabel="hero_cta_card"
              />
              <p className="hero-card-note">Free estimate &nbsp;·&nbsp; No obligation</p>
            </div>
          </div>

        </div>
      </header>

      <main id="main-content">

        {/* ── STATUS + PRIMARY CTA ── */}
        <section className="notice-band" aria-label="Status notice">
          <div className="container notice-inner">
            <div className="notice-icon" aria-hidden="true">ℹ</div>
            <div className="notice-body">
              <p className="notice-text">
                As of 2026, Highline Management has ceased operations. For
                continued STR and vacation rental management in the Denver or
                Colorado market, we refer property owners to{" "}
                <strong>Effortless Rental Group</strong> — a trusted provider
                for professional short-term rental management, property
                maintenance, and turnover coordination.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHY ERG ── */}
        <section id="why-erg" className="section section-dark">
          <div className="container section-inner">
            <h2 className="section-h2">
              Why We Recommend Effortless Rental Group
            </h2>
            <p className="section-body">
              Effortless Rental Group combines revenue optimization, guest
              services, and coordinated property operations into one structured
              management system — purpose-built for the Denver and Colorado
              short-term rental market.
            </p>
            <ul className="feature-list">
              <li>Dynamic pricing and revenue optimization</li>
              <li>Listing management across Airbnb, Vrbo, and major booking platforms</li>
              <li>Professional guest communication and support</li>
              <li>Turnover coordination and cleaning management</li>
              <li>Maintenance oversight and property operations</li>
              <li>Owner reporting and performance insights</li>
            </ul>
            <div className="cta-row">
              <CTAButton
                label="Get a Free Property Revenue Analysis"
                trackLabel="why_erg_cta"
              />
            </div>
          </div>
        </section>

        {/* ── WHY PROFESSIONAL MANAGEMENT ── */}
        <section id="why-management" className="section section-muted">
          <div className="container section-inner">
            <h2 className="section-h2">
              Why Many Property Owners Choose Professional STR Management
            </h2>
            <p className="section-body">
              Managing a successful short-term rental involves far more than
              listing a property online. Pricing strategy, guest communication,
              cleaning coordination, and maintaining property readiness between
              stays all influence occupancy rates, guest reviews, and overall
              revenue performance.
            </p>
            <p className="section-body">
              Professional management helps property owners maintain high
              standards while reducing the day-to-day demands of hosting.
            </p>
            <p className="section-body">
              Effortless Rental Group supports property owners by helping them:
            </p>
            <ul className="feature-list">
              <li>Optimize nightly pricing and revenue through data-driven pricing strategies</li>
              <li>Maintain consistent guest communication before, during, and after each stay</li>
              <li>Coordinate cleaning and turnovers between reservations</li>
              <li>Manage maintenance needs and property logistics</li>
              <li>Maintain strong guest reviews and positive guest experiences</li>
            </ul>
            <p className="section-body">
              By combining revenue strategy with coordinated property operations,
              professional management allows owners to improve performance while
              simplifying the operational side of hosting.
            </p>
            <div className="cta-row">
              <CTAButton
                label="See What Effortless Rental Group Can Do"
                trackLabel="why_mgmt_cta"
              />
            </div>
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section className="cta-section" aria-label="Call to action">
          <div className="cta-section-overlay" aria-hidden="true" />
          <div className="container cta-section-inner">
            <h2 className="cta-section-h2">
              Get a Free Revenue Estimate for Your Denver or Colorado STR Property
            </h2>
            <p className="cta-section-body">
              Effortless Rental Group reviews Colorado short-term rentals and
              provides a free revenue analysis — no commitment required.
            </p>
            <CTAButton
              label="Request a Free Revenue Analysis"
              className="cta-section-btn"
              trackLabel="bottom_cta_section"
            />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="section section-light">
          <div className="container section-inner faq-inner">
            <h2 className="section-h2">Frequently Asked Questions</h2>
            <dl className="faq-list">
              <div className="faq-item">
                <dt className="faq-q">Is Highline Denver still operating?</dt>
                <dd className="faq-a">
                  No. Highline Denver is no longer operating as a short-term
                  rental management company as of 2026.
                </dd>
              </div>
              <div className="faq-item">
                <dt className="faq-q">Who should I contact for STR management in Denver?</dt>
                <dd className="faq-a">
                  We recommend{" "}
                  <a
                    href={CTA_URL}
                    className="faq-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackReferralClick("faq_link_1")}
                  >
                    Effortless Rental Group
                  </a>
                  , an independent management company serving the Denver area.
                </dd>
              </div>
              <div className="faq-item">
                <dt className="faq-q">What services does Effortless Rental Group provide?</dt>
                <dd className="faq-a">
                  Effortless Rental Group provides full-service vacation rental
                  management — including revenue optimization, listing
                  management across Airbnb and Vrbo, guest communication,
                  turnover coordination, and owner reporting.
                </dd>
              </div>
              <div className="faq-item">
                <dt className="faq-q">How do I get started with Effortless Rental Group?</dt>
                <dd className="faq-a">
                  You can{" "}
                  <a
                    href={CTA_URL}
                    className="faq-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackReferralClick("faq_link_2")}
                  >
                    contact them directly here
                  </a>{" "}
                  to request a free property revenue analysis and learn how
                  they approach management in the Denver market.
                </dd>
              </div>
            </dl>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-logo-mark">
            <span className="logo-h">H</span>
            <span className="logo-l">L</span>
          </div>
          <div className="footer-copy">
            <p className="footer-name">Highline Management</p>
            <p className="footer-tagline">Former short-term rental operations provider.</p>
            <p className="footer-disclaimer">
              Highline Management is no longer operating. Property owners can
              connect with{" "}
              <a
                href={CTA_URL}
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackReferralClick("footer_link")}
              >
                Effortless Rental Group
              </a>
              , an independent company serving the Denver area.
            </p>
            <p className="footer-disclaimer footer-legal">
              Effortless Rental Group is not owned or operated by Highline Denver.
            </p>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="sticky-cta" role="complementary" aria-label="Quick action">
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-cta-btn"
          onClick={() => trackReferralClick("sticky_mobile_cta")}
        >
          Connect with Effortless Rental Group
        </a>
      </div>
    </>
  );
}
