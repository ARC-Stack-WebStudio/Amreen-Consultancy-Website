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
import workforceHero from '../assets/Imgs/Industries Side Imgs/Shipbuilding Side Img.jpg';
import SectionTitle from '../components/SectionTitle';

import IndustriesShipbudiling from "../assets/Imgs/Shipbuilding hero section.png"


const categories = [
  { title: 'Shipyard Supervisors', text: 'Supervisors who coordinate shipyard teams and vessel work schedules.', icon: ClipboardCheck },
  { title: 'Marine Engineering Personnel', text: 'Engineers supporting ship construction, vessel systems and technical work.', icon: Ruler },
  { title: 'Shipyard Welders and Fabricators', text: 'Tradespeople supporting welding, fabrication and vessel assembly.', icon: Hammer },
  { title: 'Pipe Fitters and Marine Electricians', text: 'Technical trades supporting vessel pipework and electrical systems.', icon: Cable },
  { title: 'Vessel Outfitting Personnel', text: 'Personnel supporting installation and outfitting work on vessels.', icon: Settings2 },
  { title: 'Shipyard Support Staff', text: 'Support workers assisting shipyard and vessel operations.', icon: HardHat },
];

export default function Shipbuilding({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">Shipbuilding workforce recruitment</p>
              <h1>Shipbuilding <em>Workforce</em> Solutions</h1>
              <p className="construction-hero-copy">
                Source shipbuilding personnel and skilled marine trades for shipyard construction, outfitting and repair work.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Request Manpower <ArrowRight />
              </button>
            </div>
            <div className="col-12 col-lg-6">
              <div className="construction-hero-placeholder" role="img" aria-label="Shipbuilding workforce image">

                {/* <div className="construction-placeholder-grid" />
                <HardHat aria-hidden="true" /> */}
                <img src={IndustriesShipbudiling} alt="" />
                <span>shipbuilding workforce</span>
                <small>Image coming soon</small>
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
                <img src={workforceHero} alt="Shipbuilding professional at a shipyard" />
                <div className="construction-image-note"><Truck aria-hidden="true" /> Shipyard workforce support</div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">Shipbuilding recruitment</p>
              <h2>Skilled teams for shipyard construction and vessel work.</h2>
              <p>
                Amreen Consultancy supports shipyards and shipbuilding employers with workforce sourcing for vessel construction and repair. Suitable personnel help maintain safe work practices, project schedules and coordinated yard operations.
              </p>
              <p>
                We source marine engineers, supervisors, welders, fabricators, fitters, electricians and shipyard support personnel according to project requirements and timelines.
              </p>
              <div className="construction-intro-points">
                <span><UsersRound aria-hidden="true" /> Candidates screened for shipyard roles</span>
                <span><MoveUpRight aria-hidden="true" /> Workforce deployment coordination</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface construction-categories">
        <div className="container">
          <SectionTitle
            eyebrow="Workforce categories"
            title="Shipbuilding personnel matched to yard requirements."
            text="Marine technical staff, shipyard trades and support workers for vessel construction, outfitting and repair."
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
            <p className="construction-eyebrow">Plan your shipyard workforce</p>
            <h2>Need skilled shipbuilding personnel?</h2>
            <p>Share your role requirements and timelines with us. We can support candidate sourcing and deployment coordination.</p>
          </div>
          <button className="about-button about-button--primary" onClick={() => navigate('contact')}>
            Request Manpower <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
