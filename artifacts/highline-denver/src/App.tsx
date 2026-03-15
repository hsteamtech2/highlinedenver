import { useEffect } from "react";
import LandingPage from "@/pages/LandingPage";
import "@/pages/landing.css";

const CTA_URL =
  "https://effortlessrentalgroup.com/?ref=highline&utm_source=highline&utm_medium=referral&utm_campaign=highline_referral";

function SEOMeta() {
  useEffect(() => {
    document.title =
      "Denver Short-Term Rental Property Management | Recommended Provider";

    const setMeta = (name: string, content: string, prop?: boolean) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Highline Management is no longer operating. Denver property owners seeking short-term rental management can connect with a trusted provider offering revenue optimization, guest services, and coordinated property operations."
    );
    setMeta("robots", "index, follow");
    setMeta("og:title", "Denver Short-Term Rental Property Management | Highline Denver", true);
    setMeta(
      "og:description",
      "Highline Management is no longer operating. Connect with Effortless Rental Group for professional vacation rental management in Denver.",
      true
    );
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://highlinedenver.com/", true);
    setMeta("og:image", "https://highlinedenver.com/highline-hero.png", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Denver Short-Term Rental Property Management | Highline Denver");
    setMeta(
      "twitter:description",
      "Highline Management is no longer operating. Connect with Effortless Rental Group for professional vacation rental management in Denver."
    );

    let canonical = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://highlinedenver.com/";

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://highlinedenver.com/#webpage",
        name: "Denver Short-Term Rental Property Management | Recommended Provider",
        url: "https://highlinedenver.com/",
        description:
          "Highline Management is no longer operating. Denver property owners can connect with Effortless Rental Group for professional vacation rental management.",
        inLanguage: "en-US",
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://highlinedenver.com/#organization",
        name: "Highline Denver",
        description:
          "Former short-term rental operations provider in Denver, Colorado. No longer operating.",
        url: "https://highlinedenver.com/",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Denver",
          addressRegion: "CO",
          addressCountry: "US",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is Highline Denver still operating?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Highline Denver is no longer operating as a short-term rental management company.",
            },
          },
          {
            "@type": "Question",
            name: "Who should property owners contact for management services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Property owners seeking professional short-term rental management can contact Effortless Rental Group, an independent company serving the Denver area.",
            },
          },
          {
            "@type": "Question",
            name: "What services does Effortless Rental Group provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Effortless Rental Group provides vacation rental management services including revenue optimization, listing management across major booking platforms, guest communication, and coordinated property operations.",
            },
          },
        ],
      },
    ];

    schemas.forEach((schema, i) => {
      const id = `schema-ld-${i}`;
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement("script");
        el.id = id;
        el.type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(schema);
    });

    const gaScript = document.getElementById("ga-script");
    if (!gaScript) {
      const s1 = document.createElement("script");
      s1.id = "ga-script";
      s1.async = true;
      s1.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
      document.head.appendChild(s1);

      const s2 = document.createElement("script");
      s2.id = "ga-inline";
      s2.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      `;
      document.head.appendChild(s2);
    }
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <SEOMeta />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <LandingPage />
    </>
  );
}
