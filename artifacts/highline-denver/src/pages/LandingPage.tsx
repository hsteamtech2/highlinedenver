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
      "Denver Short-Term Rental Property Management | Recommended Provider";
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <header className="hero" role="banner">
        <div className="hero-overlay" aria-hidden="true" />
        <nav className="hero-nav">
          <div className="logo-mark">
            <span className="logo-h">H</span>
            <span className="logo-l">L</span>
          </div>
        </nav>
        <div className="hero-content">
          <p className="hero-eyebrow">Denver Short-Term Rental Management</p>
          <h1 className="hero-h1">
            Short-Term Rental
            <br />
            Property Management
            <br />
            in Denver
          </h1>
          <p className="hero-sub">Property Management <em>ELEVATED.</em></p>
          <CTAButton
            label="Get a Free Property Revenue Analysis"
            className="hero-cta"
            trackLabel="hero_primary_cta"
          />
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </header>

      <main id="main-content">

        {/* ── NOTICE BANNER ── */}
        <section className="notice-band" aria-label="Status notice">
          <div className="container notice-inner">
            <div className="notice-icon" aria-hidden="true">ℹ</div>
            <p>
              <strong>Highline Management is no longer operating.</strong>{" "}
              Highline previously supported vacation rental operations in the
              Denver area. As of 2026, Highline has ceased operations. Property
              owners seeking professional short-term rental management can
              connect with{" "}
              <a href={CTA_URL} className="notice-link" target="_blank" rel="noopener noreferrer" onClick={() => trackReferralClick("notice_link")}>
                Effortless Rental Group
              </a>{" "}
              — a trusted provider serving Denver and surrounding markets.
            </p>
          </div>
        </section>

        {/* ── JUMP LINKS ── */}
        <nav className="jump-nav container" aria-label="Page sections">
          <a href="#why-management">Why Professional Management</a>
          <a href="#why-erg">Why Effortless Rental Group</a>
          <a href="#is-it-right">Is It Right for You?</a>
          <a href="#airbnb">Airbnb Management</a>
          <a href="#faq">FAQ</a>
        </nav>

        {/* ── WHY MANAGEMENT ── */}
        <section id="why-management" className="section section-light">
          <div className="container section-inner">
            <h2 className="section-h2">
              Why Property Owners Choose Professional STR Management
            </h2>
            <p className="section-body">
              Managing a successful short-term rental involves more than listing
              a property online. Pricing strategy, guest communication, cleaning
              coordination, and property readiness all impact occupancy and guest
              reviews.
            </p>
            <p className="section-body">Professional management helps owners:</p>
            <ul className="feature-list">
              <li>Optimize nightly pricing and revenue</li>
              <li>Maintain consistent guest communication</li>
              <li>Coordinate cleaning and turnovers between stays</li>
              <li>Manage maintenance and property logistics</li>
              <li>Maintain strong reviews and guest experiences</li>
            </ul>
            <p className="section-body">
              Many property owners choose professional management to improve
              performance while reducing the day-to-day responsibilities of
              hosting.
            </p>
          </div>
        </section>

        {/* ── WHY ERG ── */}
        <section id="why-erg" className="section section-dark">
          <div className="container section-inner">
            <h2 className="section-h2">
              Why We Recommend Effortless Rental Group
            </h2>
            <p className="section-body">
              Based on experience supporting short-term rental operations in the
              Denver market, Effortless Rental Group stands out for combining
              revenue optimization, guest services, and coordinated property
              operations into one structured management system.
            </p>
            <p className="section-body">Their services typically include:</p>
            <ul className="feature-list">
              <li>Dynamic pricing and revenue optimization</li>
              <li>
                Listing management across Airbnb, Vrbo, and major booking
                platforms
              </li>
              <li>Professional guest communication and support</li>
              <li>Turnover coordination and cleaning management</li>
              <li>Maintenance oversight and property operations</li>
              <li>Reporting and performance insights for property owners</li>
            </ul>
            <p className="section-body">
              This integrated approach helps vacation rental owners operate their
              properties more efficiently while maintaining high guest
              satisfaction.
            </p>
            <div className="cta-row">
              <CTAButton
                label="Get a Free Property Revenue Analysis"
                trackLabel="why_erg_cta"
              />
            </div>
          </div>
        </section>

        {/* ── IS IT RIGHT ── */}
        <section id="is-it-right" className="section section-light">
          <div className="container section-inner">
            <h2 className="section-h2">
              Is Professional STR Management Right for You?
            </h2>
            <p className="section-body">
              Effortless Rental Group typically works with property owners who:
            </p>
            <ul className="feature-list">
              <li>Own a short-term rental property in the Denver area</li>
              <li>Want to improve occupancy and nightly revenue</li>
              <li>
                Prefer a professional team managing guest communication
              </li>
              <li>
                Want reliable systems for turnovers, maintenance, and property
                readiness
              </li>
            </ul>
            <p className="section-body">
              If that sounds like what you're looking for, their team can review
              your property and explain how professional management could support
              your goals.
            </p>
          </div>
        </section>

        {/* ── AIRBNB MANAGEMENT ── */}
        <section id="airbnb" className="section section-muted">
          <div className="container section-inner">
            <h2 className="section-h2">Airbnb Management in Denver</h2>
            <p className="section-body">
              Many Denver property owners list their homes on platforms such as
              Airbnb and Vrbo to generate short-term rental income.
            </p>
            <p className="section-body">
              Managing these listings successfully requires consistent pricing
              adjustments, guest communication, cleaning coordination, and
              operational oversight between stays.
            </p>
            <p className="section-body">
              Professional Airbnb management helps owners:
            </p>
            <ul className="feature-list">
              <li>Optimize listing visibility on booking platforms</li>
              <li>Adjust pricing dynamically based on demand</li>
              <li>Maintain fast guest response times</li>
              <li>Coordinate turnovers and property readiness</li>
            </ul>
            <p className="section-body">
              Effortless Rental Group supports vacation rental owners across the
              Denver area by managing Airbnb listings and coordinating the
              operational systems that keep properties performing at their best.
            </p>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="cta-section" aria-label="Call to action">
          <div className="cta-section-overlay" aria-hidden="true" />
          <div className="container cta-section-inner">
            <h2 className="cta-section-h2">
              Explore Your Property's Revenue Potential
            </h2>
            <p className="cta-section-body">
              If you're considering short-term rental management in Denver, you
              can connect directly with the Effortless Rental Group team to
              learn more about their approach to revenue management and property
              operations.
            </p>
            <CTAButton
              label="See What Your Property Could Earn"
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
                  Highline Denver is no longer operating as a short-term rental
                  management company.
                </dd>
              </div>
              <div className="faq-item">
                <dt className="faq-q">
                  Who should property owners contact for management services?
                </dt>
                <dd className="faq-a">
                  Property owners seeking professional short-term rental
                  management can contact Effortless Rental Group, an independent
                  company serving the Denver area.
                </dd>
              </div>
              <div className="faq-item">
                <dt className="faq-q">
                  What services does Effortless Rental Group provide?
                </dt>
                <dd className="faq-a">
                  Effortless Rental Group provides vacation rental management
                  services including revenue optimization, listing management
                  across major booking platforms, guest communication, and
                  coordinated property operations.
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
            <p className="footer-name">Highline Denver</p>
            <p className="footer-tagline">
              Former short-term rental operations provider.
            </p>
            <p className="footer-disclaimer">
              Highline Management is no longer operating as a business.
            </p>
            <p className="footer-disclaimer">
              Visitors seeking short-term rental property management services
              may contact{" "}
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
              Effortless Rental Group is not owned or operated by Highline
              Denver.
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
          Get a Free Revenue Analysis
        </a>
      </div>
    </>
  );
}
