import { ArrowRight, BriefcaseBusiness, Globe2, UsersRound } from 'lucide-react';
import aboutGlobalImage from '../assets/about/about-global-visual.png';

const points = [
  ['01', 'Global Perspective', 'Connecting professionals with international opportunities.', Globe2],
  ['02', 'Professional Guidance', 'Supporting candidates throughout their recruitment journey.', BriefcaseBusiness],
  ['03', 'People-First Recruitment', 'Focused on meaningful connections between talent and opportunity.', UsersRound],
];

export default function AboutAmreen({ navigate }) {
  return (
    <section
      className="section about-amreen"
      id="about-amreen"
      aria-labelledby="about-amreen-heading"
    >
      <div className="home-hero-visual about-hero-visual" aria-hidden="true">
        <img src={aboutGlobalImage} alt="" />
      </div>
      <div className="container home-hero-content">
        <div className="row align-items-center g-4 g-xl-5">
          <div className="col-12 col-lg-6 order-2 order-lg-2">
            <div className="home-hero-visual">
              {/* <img
                src={aboutGlobalImage}
                alt="A luminous blue globe connected by global network lights, with an aircraft flying above a modern city"
              /> */}
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-1">
            <div className="about-amreen-content">
              <p className="section-eyebrow">ABOUT Amreen Consultancy</p>
              <span className="brand-divider" aria-hidden="true" />
              <h2 id="about-amreen-heading">
                Connecting Talent With{' '}
                <span className="brand-text">Global Opportunities</span>
              </h2>
              <p>
                Amreen Consultancy is focused on connecting talented professionals
                with meaningful career opportunities across international markets.
                We help candidates move toward better career possibilities while
                supporting organizations in finding the right talent.
              </p>
              <p>
                With a commitment to professionalism, transparency, and long-term
                relationships, we aim to make the recruitment journey clear,
                reliable, and opportunity-focused.
              </p>
              <div className="about-points">
                {points.map(([number, title, text, Icon]) => (
                  <article className="about-point" key={number}>
                    <span>{number}</span>
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="about-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate('about')}
                >
                  Discover Amreen Consultancy
                  <ArrowRight aria-hidden="true" />
                </button>
                <button
                  className="btn about-secondary"
                  onClick={() => navigate('jobs')}
                >
                  Explore Opportunities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
