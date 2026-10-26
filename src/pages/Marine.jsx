import {
  ArrowRight,
  BrickWall,
  Cable,
  ClipboardCheck,
  HardHat,
  Hammer,
  MoveUpRight,
  Ruler,
  Settings2,
  Truck,
  UsersRound,
  Wrench,
} from 'lucide-react';
import workforceHero from '../assets/Imgs/Industries Side Imgs/Marine Side Img.jpg';
import SectionTitle from '../components/SectionTitle';

import IndustriesMarine from "../assets/Imgs/Marine Hero section.png"

const categories = [
  {
    title: 'Marine Engineers & Technical Supervisors',
    text: 'Experienced professionals who support marine projects, technical work, and day-to-day site activities.',
    icon: Ruler,
  },
  {
    title: 'Shipyard Welders & Fabricators',
    text: 'Skilled welders and fabricators for shipbuilding, vessel repair, and marine fabrication work.',
    icon: Hammer,
  },
  {
    title: 'Pipe Fitters, Structural Fitters & Riggers',
    text: 'Trained workers for pipe fitting, structural work, lifting, and safe material handling.',
    icon: Cable,
  },
  {
    title: 'Marine Electricians & Instrument Technicians',
    text: 'Technical professionals who install, maintain, and repair electrical and marine instrumentation systems.',
    icon: ClipboardCheck,
  },
  {
    title: 'Mechanical Technicians & Maintenance Personnel',
    text: 'Skilled technicians who maintain marine machinery, equipment, and mechanical systems.',
    icon: Wrench,
  },
  {
    title: 'Offshore Support Crew & Marine Helpers',
    text: 'Reliable support workers who assist with daily marine, shipyard, and offshore activities.',
    icon: UsersRound,
  },
];

export default function Marine({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Marine & Offshore Recruitment
              </p>

              <h1>
                Marine <em>Workforce</em> Solutions
              </h1>

              <p className="construction-hero-copy">
                Amreen Consultancy helps shipbuilding companies, marine contractors,
                shipyards, and offshore businesses find skilled and experienced
                professionals for their workforce needs.
              </p>

              <button
                className="btn btn-primary"
                onClick={() => navigate('contact')}
              >
                Request Manpower <ArrowRight />
              </button>
            </div>

            <div className="col-12 col-lg-6">
              <div
                className="construction-hero-placeholder"
                role="img"
                aria-label="Marine and offshore workforce image placeholder"
              >
                <img src={IndustriesMarine} alt="" />
                {/* <div className="construction-placeholder-grid" />

                <HardHat aria-hidden="true" /> */}

                <span>Marine Industry Workforce</span>
                <small>Skilled manpower for marine & offshore projects</small>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section construction-intro">
        <div className="container">
          <div className="row  align-items-center">

            <div className="col-12 col-lg-6">
              <div className="construction-intro-visual">
                <img
                  src={workforceHero}
                  alt="Marine professional working at a shipbuilding or offshore project"
                />

                <div className="construction-image-note">
                  <Truck aria-hidden="true" /> Marine Workforce Support
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Marine Recruitment
              </p>

              <h2>
                Skilled people for shipbuilding and offshore work.
              </h2>

              <p>
                Amreen Consultancy helps shipyards, shipbuilding companies, marine
                contractors, and offshore businesses find skilled and experienced
                professionals for their workforce requirements.
              </p>

              <p>
                We provide marine engineers, welders, fabricators, pipe fitters,
                mechanics, electricians, technicians, and other skilled workers
                for vessel construction, repair, maintenance, and offshore
                operations in India and overseas.
              </p>

              <div className="construction-intro-points">
                <span>
                  <UsersRound aria-hidden="true" /> Skilled & screened professionals
                </span>

                <span>
                  <MoveUpRight aria-hidden="true" /> Recruitment & deployment support
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section surface construction-categories">
        <div className="container">
          <SectionTitle
            eyebrow="Workforce categories"
            title="Marine personnel for shipyard and offshore work."
            text="Technical, trade and support roles across marine operations."
          />
          <div className="row g-3">
            {categories.map(({ title, text, icon: Icon }) => (
              <div className="col-12 col-md-6 col-lg-4" key={title}>
                <article className="construction-category-card">
                  <div className="construction-category-icon"><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <BrickWall aria-hidden="true" className="construction-card-mark" />
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="construction-cta">
        <div className="container">
          <div>
            <p className="construction-eyebrow">Build your workforce</p>
            <h2>Need personnel for marine or offshore operations?</h2>
            <p>Share your roles and timelines with us. We can support candidate sourcing and deployment coordination.</p>
          </div>
          <button className="about-button about-button--primary" onClick={() => navigate('contact')}>
            Request Manpower <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
