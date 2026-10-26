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
import workforceHero from '../assets/Imgs/Industries Side Imgs/Hospitality Side Img.jpg';
import SectionTitle from '../components/SectionTitle';

import IndustriesHospitality from "../assets/Imgs/Hospitality Hero section.png"

const categories = [
  { title: 'Hospitality Supervisors', text: 'Supervisors who coordinate service teams and day-to-day hospitality operations.', icon: ClipboardCheck },
  { title: 'Guest Services Personnel', text: 'Staff supporting front office, guest reception and customer service.', icon: Ruler },
  { title: 'Housekeeping Personnel', text: 'Room attendants and housekeeping staff for guest areas and facilities.', icon: Hammer },
  { title: 'Food and Beverage Service', text: 'Service staff supporting dining and food and beverage operations.', icon: Cable },
  { title: 'Kitchen and Catering Support', text: 'Personnel supporting kitchen, catering and food preparation operations.', icon: Settings2 },
  { title: 'Hospitality Operations Staff', text: 'Operational staff supporting the daily needs of hospitality venues.', icon: HardHat },
];

export default function Hospitality({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">Hospitality workforce recruitment</p>
              <h1>Hospitality <em>Workforce</em> Solutions</h1>
              <p className="construction-hero-copy">
                Source hospitality personnel to support hotels, guest services and day-to-day property operations.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Request Manpower <ArrowRight />
              </button>
            </div>
            <div className="col-12 col-lg-6">
              <div className="construction-hero-placeholder" role="img" aria-label="Hospitality workforce image">

                <img src={IndustriesHospitality} alt="" />
                {/* <div className="construction-placeholder-grid" />
                <HardHat aria-hidden="true" /> */}
                <span>hospitality workforce</span>
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
                <img src={workforceHero} alt="Hospitality professional at a hotel or service workplace" />
                <div className="construction-image-note"><Truck aria-hidden="true" /> Hospitality workforce support</div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">Hospitality recruitment</p>
              <h2>Service professionals who support positive guest experiences.</h2>
              <p>
                Amreen Consultancy supports hospitality employers with workforce sourcing for guest-facing and operational roles. Suitable service personnel contribute to consistent guest care and efficient day-to-day hotel operations.
              </p>
              <p>
                We source hospitality staff for service, housekeeping, food and beverage, front office and operational support roles in line with employer requirements.
              </p>
              <div className="construction-intro-points">
                <span><UsersRound aria-hidden="true" /> Candidates screened for service roles</span>
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
            title="Hospitality personnel aligned with service needs."
            text="Service and operational personnel to support hotels, hospitality venues and guest services."
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
            <p className="construction-eyebrow">Plan your hospitality workforce</p>
            <h2>Seeking hospitality personnel for your operations?</h2>
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
