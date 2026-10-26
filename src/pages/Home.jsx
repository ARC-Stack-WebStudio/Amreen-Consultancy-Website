import { useEffect, useRef, useState } from "react";
import { ArrowRight, Quote } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Globe2,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  Wrench,
} from "../components/Icons";
import ContactForm from "../components/ContactForm";
import heroVisual from "../assets/hero/global-opportunities-hero.png";
import AboutAmreen from "../components/AboutAmreen";
import GlobalReach from "../components/GlobalReach";
import WhyEmployersChooseAmreen from "../components/WhyEmployersChooseAmreen";
const categories = [
  ["Construction", Wrench],
  ["Engineering", Wrench],
  ["Skilled Trades", Wrench],
  ["Information Technology", ChartNoAxesCombined],
  ["Administration", BriefcaseBusiness],
  ["Sales & Marketing", ChartNoAxesCombined],
  ["Hospitality", HeartHandshake],
  ["Healthcare", Stethoscope],
];
const features = [
  ["Right People", "We connect opportunity with the right talent.", UsersRound],
  [
    "Global Reach",
    "Access opportunities across international markets.",
    Globe2,
  ],
  [
    "Trust & Integrity",
    "Guidance with transparency and responsibility.",
    ShieldCheck,
  ],
  [
    "Better Futures",
    "Supporting career growth that lasts.",
    ChartNoAxesCombined,
  ],
];
function Counter({ end, label }) {
  const [v, setV] = useState(0),
    ref = useRef();
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let s;
      const tick = (t) => {
        s ??= t;
        setV(Math.min(end, Math.round(((t - s) / 900) * end)));
        if (t - s < 900) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      ob.disconnect();
    });
    ob.observe(ref.current);
    return () => ob.disconnect();
  }, [end]);
  return (
    <div ref={ref}>
      <b>{v.toLocaleString()}+</b>
      <span>{label}</span>
    </div>
  );
}
export default function Home({ navigate }) {
  return (
    <>
      <section className="hero home-hero">
        <div className="home-hero-visual" aria-hidden="true">
          <img src={heroVisual} alt="" />
        </div>
        <div className="container home-hero-content">
          <div className="home-hero-copy">
            <p className="eyebrow">
              YOUR SKILLS <span>|</span> OUR NETWORK <span>|</span> A BRIGHTER
              TOMORROW
            </p>
            <h1>
              Global
              <br />
              <em>Opportunities</em>
              <br />
              Start Here
            </h1>
            <p>
              We connect talented professionals with trusted employers overseas.
              Your career goals, our commitment.
            </p>
            <div className="hero-actions">
              <button
                className="btn btn-primary"
                onClick={() => navigate("jobs")}
              >
                Explore Job Opportunities <ArrowRight />
              </button>
              <button
                className="btn home-hero-secondary"
                onClick={() => navigate("contact")}
              >
                Talk to Our Experts <UsersRound />
              </button>
            </div>
          </div>
          <div
            className="home-hero-stats"
            aria-label="Amreen Consultancy statistics"
          >
            <div>
              <UsersRound />
              <Counter end={10000} label="Candidates Placed" />
            </div>
            <div>
              <BriefcaseBusiness />
              <Counter end={500} label="Trusted Employers" />
            </div>
            <div>
              <Globe2 />
              <Counter end={20} label="Countries" />
            </div>
          </div>
        </div>
      </section>
      <AboutAmreen navigate={navigate} />
      <GlobalReach navigate={navigate} />
      <WhyEmployersChooseAmreen />
      <section className="section categories">
        <div className="container">
          <SectionTitle
            eyebrow="Find your field"
            title="Opportunities across industries"
          />
          <div className="row g-3">
            {categories.map(([name, Icon]) => (
              <div className="col-6 col-md-4 col-lg-3" key={name}>
                <button
                  className="category-card"
                  onClick={() => navigate("jobs")}
                >
                  <Icon />
                  <span>{name}</span>
                  <ArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section confident">
        <div className="container">
          <SectionTitle
            eyebrow="The Amreen Consultancy difference"
            title="A more confident way forward"
          />
          <div className="row g-4">
            {features.map(([t, x, I]) => (
              <div className="col-12 col-sm-6 col-lg-3" key={t}>
                <article className="feature">
                  <I />
                  <h3>{t}</h3>
                  <p>{x}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section process surface">
        <div className="container">
          <SectionTitle
            eyebrow="Simple by design"
            title="How your journey works"
          />
          <div className="row g-4">
            {[
              ["01", "Explore Opportunities"],
              ["02", "Submit Your Profile"],
              ["03", "Screening & Guidance"],
              ["04", "Start Your Journey"],
            ].map(([n, t]) => (
              <div className="col-12 col-sm-6 col-lg-3" key={n}>
                <div className="process-card">
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>
                    Clear next steps and support that keeps your momentum
                    moving.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section audience">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <article className="audience-card candidate">
                <p className="eyebrow">For candidates</p>
                <h2>Build your career beyond borders.</h2>
                <p>
                  Discover opportunities, share your profile and receive
                  professional guidance for your next step.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("jobs")}
                >
                  Find jobs <ArrowRight />
                </button>
              </article>
            </div>
            <div className="col-12 col-lg-6">
              <article className="audience-card employer">
                <p className="eyebrow light">For employers</p>
                <h2>Find the right talent for your organisation.</h2>
                <p>
                  Source, screen and connect with professionals who are ready to
                  make an impact.
                </p>
                <button
                  className="btn btn-outline-light"
                  onClick={() => navigate("contact")}
                >
                  Partner with us <ArrowRight />
                </button>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section testimonials surface">
        <div className="container">
          <SectionTitle
            eyebrow="Stories to come"
            title="Trusted connections, meaningful outcomes"
            text="Client and candidate stories will be shared here as they become available."
          />
          <div className="row g-4">
            {[
              "A candidate success story will appear here.",
              "An employer partnership story will appear here.",
              "A career transition story will appear here.",
            ].map((q, i) => (
              <div className="col-12 col-md-4" key={q}>
                <article className="quote">
                  <Quote />
                  <p>“{q}”</p>
                  <small>Placeholder testimonial · Demo content</small>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="contact-section section" id="contact">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-6">
              <p className="eyebrow">Start a conversation</p>
              <h2>Your next opportunity starts here.</h2>
              <p>
                Take the next step toward a better professional future. Tell us
                how we can support you.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
