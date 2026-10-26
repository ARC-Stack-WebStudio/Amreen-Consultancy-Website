import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Check,
  Compass,
  Globe2,
  Handshake,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import aboutHeroImage from "../assets/Imgs/About Hero section Img.webp";
import "../styles/about.css";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Recruitment conducted with honesty, transparency and accountability.",
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    text: "Professional standards and considered service at every stage.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    text: "A commitment to identifying suitable candidates and dependable workforce support.",
  },
  {
    icon: Target,
    title: "Commitment",
    text: "Attentive to the needs and priorities of employers and candidates.",
  },
  {
    icon: Check,
    title: "Compliance",
    text: "Recruitment practices guided by applicable employment requirements.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    text: "Building lasting relationships with employers, candidates and stakeholders.",
  },
];

const reasonsToChoose = [
  {
    icon: Users,
    title: "Candidate-focused guidance",
    text: "Guidance that takes each candidate’s experience and career goals into account.",
  },
  {
    icon: Target,
    title: "Employer requirements",
    text: "Understanding the role, working environment and wider staffing requirements.",
  },
  {
    icon: Globe2,
    title: "International recruitment",
    text: "Recruitment support connecting organisations with talent across international markets.",
  },
  {
    icon: MessageCircle,
    title: "Transparent communication",
    text: "Open communication and organised coordination at each stage.",
  },
  {
    icon: Compass,
    title: "Industry-focused approach",
    text: "Recruitment support aligned with the requirements of each sector and position.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term relationships",
    text: "A relationship-focused approach that considers both employers and candidates.",
  },
];

export default function About({ navigate }) {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!page || prefersReducedMotion || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const items = page.querySelectorAll("[data-about-reveal]");
    if (!items.length) return undefined;

    page.classList.add("about-motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--about-delay", `${(index % 3) * 80}ms`);
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      page.classList.remove("about-motion-ready");
      items.forEach((item) => item.classList.remove("is-visible"));
    };
  }, []);

  return (
    <div className="about-page" ref={pageRef}>
      <section className="about-hero" aria-labelledby="about-page-title">
        <div className="about-hero__background" aria-hidden="true">
          <img src={aboutHeroImage} alt="" />
        </div>
        <div className="container about-shell about-hero__layout">
          <div className="about-hero__copy" data-about-reveal>
            <p className="about-eyebrow about-eyebrow--light">
              ABOUT Amreen Consultancy
            </p>
            <h1 id="about-page-title">
              Connecting Talent.
              <span>Supporting Global Workforce Needs.</span>
            </h1>
            <p className="about-hero__intro">
              Amreen Consultancy connects skilled professionals with international career opportunities and helps employers source people suited to their workforce requirements.
            </p>
            <a className="about-text-link" href="#about-who-we-are">
              Learn about our approach <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="about-section about-who"
        id="about-who-we-are"
        aria-labelledby="about-who-title"
      >
        <div className="about-shell about-who__layout">
          <div id="about-who-title" data-about-reveal>
            <SectionTitle
              centered={false}
              eyebrow="Who we are"
              title="Connecting people and organisations across international markets."
              text="Amreen Consultancy delivers recruitment and workforce support that brings candidates and employers together across international markets."
            />
          </div>
          <div className="about-who__details" data-about-reveal>
            <p>
              We connect candidates and employers through recruitment support grounded in role requirements, professional service and open communication.
            </p>
            <ul className="about-check-list">
              <li>
                <Check aria-hidden="true" />
                <span>Career guidance for candidates considering new opportunities</span>
              </li>
              <li>
                <Check aria-hidden="true" />
                <span>Workforce solutions aligned with employer requirements</span>
              </li>
              <li>
                <Check aria-hidden="true" />
                <span>Recruitment connections across international markets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="about-section about-purpose"
        aria-labelledby="about-purpose-title"
      >
        <div className="about-shell">
          <div className="about-purpose__intro" data-about-reveal>
            <p className="about-eyebrow about-eyebrow--light">
              Our Purpose
            </p>
            <h2 id="about-purpose-title">
              A clear purpose and responsible recruitment.
            </h2>
          </div>
          <div className="about-purpose__grid">
            <article
              className="about-purpose-card about-purpose-card--vision"
              aria-labelledby="about-vision-title"
              data-about-reveal
            >
              <span className="about-purpose-card__index">01 / OUR VISION</span>
              <h3 id="about-vision-title">
                To build trust as a recruitment partner across international markets.
              </h3>
              <p>
                We seek to earn trust through lasting relationships, dependable workforce solutions and access to international opportunities, supported by ethical and professional recruitment practices.
              </p>
              <div className="about-purpose-card__tags">
                <span>Long-term relationships</span>
                <span>Ethical recruitment</span>
              </div>
              <Globe2
                className="about-purpose-card__watermark"
                aria-hidden="true"
                strokeWidth={0.8}
              />
            </article>

            <article
              className="about-purpose-card about-purpose-card--mission"
              aria-labelledby="about-mission-title"
              data-about-reveal
            >
              <span className="about-purpose-card__index">02 / OUR MISSION</span>
              <h3 id="about-mission-title">
                Matching talent with suitable opportunities.
              </h3>
              <p>
                Our work centres on understanding employer needs, identifying suitable candidates and meeting international workforce requirements through responsible recruitment and clear processes.
              </p>
              <div className="about-purpose-card__note">
                <BadgeCheck aria-hidden="true" />
                <span>Clear, considered recruitment coordination</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="about-section about-values"
        aria-labelledby="about-values-heading"
      >
        <div className="about-shell">
          <div
            className="about-section-heading"
            id="about-values-heading"
            data-about-reveal
          >
            <SectionTitle
              centered={false}
              eyebrow="Core values"
              title="Principles that shape our work."
              text="Our standards guide every recruitment relationship and workforce connection."
            />
          </div>
          <div className="about-card-grid about-values__grid">
            {coreValues.map(({ icon: Icon, title, text }) => (
              <article className="about-value-card" key={title} data-about-reveal>
                <span className="about-value-card__icon">
                  <Icon aria-hidden="true" strokeWidth={1.65} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about-section about-why"
        aria-labelledby="about-why-heading"
      >
        <div className="about-shell">
          <div
            className="about-section-heading about-section-heading--mathauto"
            id="about-why-heading"
            data-about-reveal
          >
            <SectionTitle
              centered={false}
              eyebrow="WHY Amreen Consultancy"
              title="Recruitment shaped by clear requirements and mutual trust."
              text="We consider the priorities of employers and candidates throughout the recruitment process."
            />
          </div>
          <div className="about-card-grid about-why__grid">
            {reasonsToChoose.map(({ icon: Icon, title, text }) => (
              <article className="about-why-card" key={title} data-about-reveal>
                <span className="about-why-card__icon">
                  <Icon aria-hidden="true" strokeWidth={1.65} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowRight
                  className="about-why-card__arrow"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about-section about-commitment"
        aria-labelledby="about-commitment-title"
      >
        <div className="about-shell about-commitment__layout">
          <div data-about-reveal>
            <p className="about-eyebrow">Our Commitment</p>
            <h2 id="about-commitment-title">
              Committed to effective workforce connections.
            </h2>
          </div>
          <div className="about-commitment__content" data-about-reveal>
            <p>
              Amreen Consultancy is committed to clear communication, responsible recruitment support and reliable coordination between employers and candidates.
            </p>
            <div className="about-commitment__principles">
              <span>Clear communication</span>
              <span>Responsible support</span>
              <span>Dependable coordination</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-section about-cta"
        aria-labelledby="about-cta-title"
      >
        <div className="about-shell about-cta__layout" data-about-reveal>
          <div>
            <p className="about-eyebrow about-eyebrow--light">
              Start a conversation
            </p>
            <h2 id="about-cta-title">
              Ready to discuss your recruitment or career goals?
            </h2>
            <p>
              Contact our team to discuss your workforce needs or career plans.
            </p>
          </div>
          <div className="about-cta__actions">
            <button
              className="about-button about-button--primary"
              type="button"
              onClick={() => navigate("contact")}
            >
              Contact Us <ArrowRight aria-hidden="true" />
            </button>
            <button
              className="about-button about-button--secondary"
              type="button"
              onClick={() => navigate("jobs")}
            >
              Explore Opportunities <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
