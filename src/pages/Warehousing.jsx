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
import workforceHero from '../assets/Imgs/Industries Side Imgs/Warehousing Side Img.jpg';
import SectionTitle from '../components/SectionTitle';

import IndustriesWarehousing from "../assets/Imgs/Construction Hero section.webp";

const categories = [
  { title: 'Warehouse Supervisors', text: 'Supervisors who coordinate warehouse teams and daily workflows.', icon: ClipboardCheck },
  { title: 'Warehouse Assistants', text: 'Staff supporting receiving, storage and routine warehouse tasks.', icon: Ruler },
  { title: 'Forklift and Material Handling Operators', text: 'Operators who move and handle goods within warehouse facilities.', icon: Hammer },
  { title: 'Inventory and Stock Personnel', text: 'Staff responsible for stock checks, records and inventory organisation.', icon: Cable },
  { title: 'Order Picking and Packing Staff', text: 'Personnel preparing and packing orders for dispatch.', icon: Settings2 },
  { title: 'Dispatch and Distribution Support', text: 'Workers supporting dispatch, loading and goods movement.', icon: HardHat },
];

export default function Warehousing({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">Warehousing workforce recruitment</p>
              <h1>Warehousing <em>Workforce</em> Solutions</h1>
              <p className="construction-hero-copy">
                Source warehouse personnel to support goods handling, inventory, order preparation and distribution operations.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Request Manpower <ArrowRight />
              </button>
            </div>
            <div className="col-12 col-lg-6">
              <div className="construction-hero-placeholder" role="img" aria-label="Warehouse workforce image">

                <img src={IndustriesWarehousing} alt="" />
                {/* <div className="construction-placeholder-grid" />
                <HardHat aria-hidden="true" /> */}
                <span>Warehousing industry visual</span>
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
                <img src={workforceHero} alt="Warehouse professional supporting logistics operations" />
                <div className="construction-image-note"><Truck aria-hidden="true" /> Warehouse operations support</div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">Warehouse recruitment</p>
              <h2>Warehouse teams that keep goods moving efficiently.</h2>
              <p>
                Amreen Consultancy helps warehouse employers source personnel for daily operations. Capable teams support safe goods handling, accurate stock movement and efficient order fulfilment.
              </p>
              <p>
                We source warehouse supervisors, assistants, forklift operators, inventory staff and material handlers to suit operational requirements and schedules.
              </p>
              <div className="construction-intro-points">
                <span><UsersRound aria-hidden="true" /> Candidates screened for warehouse roles</span>
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
            title="Warehouse personnel for logistics operations."
            text="Warehouse teams for inventory, material handling, order preparation and distribution support."
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
            <p className="construction-eyebrow">Plan your warehouse workforce</p>
            <h2>Need personnel for warehouse operations?</h2>
            <p>Share your role requirements and timelines with us. We can support candidate sourcing and deployment coordination.</p>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('contact')}>
            Request Manpower <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
