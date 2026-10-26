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
import workforceHero from '../assets/Imgs/Industries Side Imgs/Mining Side Img.jpg';
import SectionTitle from '../components/SectionTitle';

import IndustriesMining from "../assets/Imgs/Mining Hero section.webp";


const categories = [
  {
    title: 'Mining Engineers & Site Supervisors',
    text: 'Professionals who help plan, manage, and supervise daily mining activities at the site.',
    icon: Ruler,
  },
  {
    title: 'Excavator, Loader & Dump Truck Operators',
    text: 'Experienced operators who handle heavy equipment used for digging, loading, and material movement.',
    icon: Truck,
  },
  {
    title: 'Drilling Operators & Blasting Assistants',
    text: 'Trained workers who support drilling activities and assist with controlled blasting operations.',
    icon: Hammer,
  },
  {
    title: 'Heavy Equipment Mechanics & Technicians',
    text: 'Skilled technicians who maintain and repair mining machinery and heavy equipment.',
    icon: Wrench,
  },
  {
    title: 'Industrial Electricians & Maintenance Personnel',
    text: 'Technical workers who maintain electrical systems, machinery, and equipment at mining sites.',
    icon: Cable,
  },
  {
    title: 'Safety Officers, Surveyors & Support Staff',
    text: 'Professionals who support site safety, surveying, daily operations, and other mining activities.',
    icon: Settings2,
  },
];

export default function Mining({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Mining & Resource Industry Recruitment
              </p>

              <h1>
                Mining <em>Workforce</em> Solutions
              </h1>

              <p className="construction-hero-copy">
                Amreen Consultancy helps mining companies, mineral processing
                facilities, and resource projects find skilled and experienced
                workers for their manpower needs.
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
                aria-label="Mining and resource industry workforce image placeholder"
              >
                <img src={IndustriesMining} alt="" />
                {/* <div className="construction-placeholder-grid" />

                <HardHat aria-hidden="true" /> */}

                <span>Mining Industry Workforce</span>
                <small>Skilled manpower for mining operations</small>
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
                  alt="Mining professional working at an industrial site"
                />

                <div className="construction-image-note">
                  <Truck aria-hidden="true" /> Mining Workforce Support
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Mining Recruitment
              </p>

              <h2>
                Skilled workers for demanding mining operations.
              </h2>

              <p>
                Amreen Consultancy helps mining companies, quarry operations, and
                mineral processing facilities find experienced people for their
                workforce requirements.
              </p>

              <p>
                We provide mining engineers, heavy equipment operators, technicians,
                supervisors, mechanics, electricians, and other skilled workers for
                mining and resource projects in India and overseas.
              </p>

              <div className="construction-intro-points">
                <span>
                  <UsersRound aria-hidden="true" /> Skilled & screened workers
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
            title="Mining personnel for site and processing needs."
            text="Engineering, equipment operation, maintenance and site support roles."
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
            <h2>Need personnel for mining operations?</h2>
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
