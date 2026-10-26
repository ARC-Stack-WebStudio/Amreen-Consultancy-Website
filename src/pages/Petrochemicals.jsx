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
import workforceHero from '../assets/Imgs/Industries Side Imgs/Petrochemical Side Img.jpg';
import SectionTitle from '../components/SectionTitle';

import IndustriesPetrochemical from "../assets/Imgs/Petrochemical Hero section.webp";


const categories = [
  {
    title: 'Process Engineers & Chemical Engineers',
    text: 'Engineers who support plant processes, production activities, and chemical operations.',
    icon: Ruler,
  },
  {
    title: 'Plant Operators & Control Room Operators',
    text: 'Trained operators who monitor equipment and help keep plant operations running smoothly.',
    icon: Settings2,
  },
  {
    title: 'Mechanical Technicians & Maintenance Supervisors',
    text: 'Technical professionals who handle equipment maintenance and support reliable plant operations.',
    icon: Wrench,
  },
  {
    title: 'Instrumentation & Electrical Technicians',
    text: 'Skilled technicians who work with plant instruments, control systems, and electrical equipment.',
    icon: Cable,
  },
  {
    title: 'Pipe Fitters, Welders & Fabricators',
    text: 'Experienced tradespeople for piping, welding, fabrication, and industrial installation work.',
    icon: Hammer,
  },
  {
    title: 'HSE Officers, Inspectors & Safety Professionals',
    text: 'Safety professionals who help maintain safe working practices and support site safety requirements.',
    icon: Settings2,
  },
];

export default function Petrochemicals({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Petrochemical & Industrial Recruitment
              </p>

              <h1>
                Petrochemical <em>Workforce</em> Solutions
              </h1>

              <p className="construction-hero-copy">
                Amreen Consultancy helps petrochemical companies, refineries,
                chemical plants, and industrial facilities find skilled and
                experienced professionals for their workforce needs.
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
                aria-label="Petrochemical and industrial workforce image placeholder"
              >
                  <img src={IndustriesPetrochemical} alt="" />
                {/* <div className="construction-placeholder-grid" />

                <HardHat aria-hidden="true" /> */}

                <span>Petrochemical Industry Workforce</span>
                <small>Skilled manpower for industrial operations</small>
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
                  alt="Petrochemical and industrial professional at a plant"
                />

                <div className="construction-image-note">
                  <Truck aria-hidden="true" /> Industrial Workforce Support
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Petrochemical Recruitment
              </p>

              <h2>
                Skilled people for safe and reliable plant operations.
              </h2>

              <p>
                Amreen Consultancy helps petrochemical companies, refineries,
                chemical plants, and industrial facilities find experienced
                professionals for their workforce requirements.
              </p>

              <p>
                We provide engineers, technicians, plant operators, maintenance
                workers, safety professionals, welders, and other skilled workers
                for plant operations, maintenance, shutdowns, and industrial
                projects.
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
            title="Petrochemical personnel for plant requirements."
            text="Plant operations, maintenance, technical and safety roles."
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
            <h2>Planning your petrochemical workforce?</h2>
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
