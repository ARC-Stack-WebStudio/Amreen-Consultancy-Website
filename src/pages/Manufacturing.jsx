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
import workforceHero from '../assets/Imgs/Industries Side Imgs/Manufacturing Side Img.jpg';
import SectionTitle from '../components/SectionTitle';

import IndustriesManufacturing from "../assets/Imgs/Manufacturing Hero Section.png"


const categories = [
  {
    title: 'Production Supervisors & Plant Managers',
    text: 'Experienced professionals who manage production teams and help keep plant operations running smoothly.',
    icon: ClipboardCheck,
  },
  {
    title: 'Machine Operators & Production Workers',
    text: 'Skilled workers who handle machines and support daily manufacturing and production activities.',
    icon: Settings2,
  },
  {
    title: 'CNC Operators & CNC Programmers',
    text: 'Trained CNC professionals who operate machines and manage accurate production work.',
    icon: Ruler,
  },
  {
    title: 'Quality Control Inspectors & Technicians',
    text: 'Professionals who check products, materials, and processes to maintain required quality standards.',
    icon: Ruler,
  },
  {
    title: 'Welders, Fabricators & Industrial Fitters',
    text: 'Skilled tradespeople experienced in welding, fabrication, fitting, and industrial assembly work.',
    icon: Hammer,
  },
  {
    title: 'Maintenance Technicians & Industrial Electricians',
    text: 'Technical professionals who help maintain machinery, electrical systems, and smooth plant operations.',
    icon: Wrench,
  },
];

export default function ManufacturingIndustry({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Manufacturing & Industrial Recruitment
              </p>

              <h1>
                Manufacturing <em>Workforce</em> Solutions
              </h1>

              <p className="construction-hero-copy">
                Amreen Consultancy helps manufacturing companies, factories,
                production units, and engineering businesses find reliable and
                skilled workers for opportunities in India and overseas.
              </p>

              <button
                className="btn btn-primary"
                onClick={() => navigate('contact')}
              >
                Find Skilled Workforce <ArrowRight />
              </button>
            </div>

            <div className="col-12 col-lg-6">
              <div
                className="construction-hero-placeholder"
                role="img"
                aria-label="Manufacturing and industrial workforce image placeholder"
              >
                <img src={IndustriesManufacturing} alt="" />
                {/* <div className="construction-placeholder-grid" />
                <HardHat aria-hidden="true" /> */}

                <span>Manufacturing & Industrial Workforce</span>
                <small>Professional recruitment solutions</small>
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
                  alt="Skilled manufacturing worker at an industrial workplace"
                />

                <div className="construction-image-note">
                  <Truck aria-hidden="true" /> Workforce for Industry
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Manufacturing Recruitment
              </p>

              <h2>
                The right people for smooth and efficient operations.
              </h2>

              <p>
                Amreen Consultancy helps manufacturing companies and industrial
                businesses find skilled and dependable workers for their workforce
                needs. We focus on finding people who are suitable for the job,
                workplace, and required skills.
              </p>

              <p>
                We provide production workers, machine operators, technicians,
                supervisors, engineers, and other skilled professionals for
                manufacturing and industrial roles in India and overseas.
              </p>

              <div className="construction-intro-points">
                <span>
                  <UsersRound aria-hidden="true" /> Skilled and screened candidates
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
            title="Manufacturing personnel for production requirements."
            text="Production, technical and maintenance roles across manufacturing environments."
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
            <h2>Need a workforce for your manufacturing operations?</h2>
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
