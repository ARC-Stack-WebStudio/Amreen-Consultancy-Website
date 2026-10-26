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
import workforceHero from '../assets/Imgs/Industries Side Imgs/Infrastructure  Side Img.jpg';
import SectionTitle from '../components/SectionTitle';

import IndustriesInfrastruture from "../assets/Imgs/Infrastructure Hero section.png"


const categories = [
  {
    title: 'Civil Engineers & Site Engineers',
    text: 'Experienced engineers who support project planning, site execution, technical work, and daily construction activities.',
    icon: Ruler,
  },
  {
    title: 'Project Managers & Construction Supervisors',
    text: 'Professionals who manage site teams, coordinate work, and help keep infrastructure projects on schedule.',
    icon: ClipboardCheck,
  },
  {
    title: 'Heavy Equipment Operators',
    text: 'Trained operators for excavators, loaders, cranes, and other heavy equipment used on infrastructure projects.',
    icon: Settings2,
  },
  {
    title: 'Surveyors & Quality Control Inspectors',
    text: 'Professionals who support site surveying, measurements, inspections, and quality checks during project execution.',
    icon: Wrench,
  },
  {
    title: 'Steel Fixers, Masons & Concrete Workers',
    text: 'Skilled workers experienced in reinforcement, masonry, concrete work, and other essential construction activities.',
    icon: Hammer,
  },
  {
    title: 'Electricians, Plumbers & Utility Technicians',
    text: 'Technical workers who handle electrical, plumbing, utility, and related installation and maintenance work.',
    icon: Cable,
  },
];

export default function Infrastructure({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Infrastructure Industry Recruitment
              </p>

              <h1>
                Infrastructure <em>Workforce</em> Solutions
              </h1>

              <p className="construction-hero-copy">
                Amreen Consultancy helps infrastructure companies, EPC contractors,
                and large development projects find skilled and experienced
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
                aria-label="Infrastructure industry workforce image placeholder"
              >
                <img src={IndustriesInfrastruture} alt="" />
                {/* <div className="construction-placeholder-grid" />

                <HardHat aria-hidden="true" /> */}

                <span>Infrastructure Industry Workforce</span>
                <small>Skilled manpower for development projects</small>
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
                  alt="Infrastructure professional working on a large development project"
                />

                <div className="construction-image-note">
                  <Truck aria-hidden="true" /> Infrastructure Workforce Support
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Infrastructure Recruitment
              </p>

              <h2>
                Skilled people for projects that build better infrastructure.
              </h2>

              <p>
                Amreen Consultancy helps infrastructure companies, EPC contractors,
                and development projects find skilled and experienced professionals
                for their workforce requirements.
              </p>

              <p>
                We provide engineers, supervisors, equipment operators, technicians,
                skilled tradespeople, and project support staff for roads, bridges,
                buildings, utilities, and other large-scale infrastructure projects
                in India and overseas.
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
            title="Infrastructure personnel matched to project requirements."
            text="Engineering, equipment operation, skilled trade and project support roles."
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
            <h2>Planning the workforce for an infrastructure project?</h2>
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
