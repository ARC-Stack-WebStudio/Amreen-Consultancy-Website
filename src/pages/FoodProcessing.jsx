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
import workforceHero from '../assets/Imgs/Industries Side Imgs/Food Processing Side Img.jpg';
import SectionTitle from '../components/SectionTitle';

import IndustriesFoodProcessing from "../assets/Imgs/FOOD Processing hero section.png"


const categories = [
  { title: 'Production Team Leadership', text: 'Supervisors who coordinate production teams and daily processing activities.', icon: ClipboardCheck },
  { title: 'Processing Line Personnel', text: 'Operators and production workers supporting food processing lines.', icon: Ruler },
  { title: 'Packaging Personnel', text: 'Workers supporting packing, labelling and finished-goods preparation.', icon: Hammer },
  { title: 'Quality and Process Support', text: 'Personnel supporting process checks and routine production requirements.', icon: Cable },
  { title: 'Plant and Machine Operators', text: 'Operators for machinery used in food production and processing environments.', icon: Settings2 },
  { title: 'Production Support Staff', text: 'Operational personnel supporting daily production and plant activities.', icon: HardHat },
];

export default function FoodProcessing({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">Food processing workforce</p>
              <h1>Food Processing <em>Workforce</em> Solutions</h1>
              <p className="construction-hero-copy">
                Source food processing and production personnel to support manufacturing lines, packaging and plant operations.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Request Manpower <ArrowRight />
              </button>
            </div>
            <div className="col-12 col-lg-6">
              <div className="construction-hero-placeholder" role="img" aria-label="Food processing workforce image">

                {/* <div className="construction-placeholder-grid" />
                <HardHat aria-hidden="true" /> */}

                <img src={IndustriesFoodProcessing} alt="" />
                <span>food processing workforce</span>
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
                <img src={workforceHero} alt="Food processing professional at an international production facility" />
                <div className="construction-image-note"><Truck aria-hidden="true" /> Production workforce support</div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">Food processing recruitment</p>
              <h2>Production teams to support safe, consistent operations.</h2>
              <p>
                Amreen Consultancy supports food processing employers with workforce sourcing for production and plant operations. Suitable personnel help maintain safe work practices, production schedules and day-to-day operational continuity.
              </p>
              <p>
                We source production workers, machine operators, quality control staff, maintenance technicians and supervisors according to operational requirements and deployment schedules.
              </p>
              <div className="construction-intro-points">
                <span><UsersRound aria-hidden="true" /> Production candidates screened for role fit</span>
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
            title="Food processing personnel for production needs."
            text="Production, processing, packaging and maintenance personnel for food manufacturing operations."
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
            <p className="construction-eyebrow">Plan your production workforce</p>
            <h2>Seeking a food processing workforce?</h2>
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
