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
import workforceHero from '../assets/Imgs/Industries Side Imgs/Logistics Side Img.jpg';
import SectionTitle from '../components/SectionTitle';

import IndustriesLogistic from "../assets/Imgs/Logistics Hero section.png"

const categories = [
  {
    title: 'Logistics Supervisors & Operations Managers',
    text: 'Professionals who manage daily logistics activities, teams, and overall operations.',
    icon: ClipboardCheck,
  },
  {
    title: 'Warehouse Supervisors & Warehouse Assistants',
    text: 'Workers who help manage warehouse activities, stock movement, packing, and daily tasks.',
    icon: Hammer,
  },
  {
    title: 'Forklift Operators & Material Handling Operators',
    text: 'Trained operators who safely move, load, and unload goods and materials.',
    icon: Ruler,
  },
  {
    title: 'Inventory Controllers & Storekeepers',
    text: 'Staff who manage stock records, check inventory, and keep warehouse materials organised.',
    icon: Settings2,
  },
  {
    title: 'Truck Drivers, Delivery Drivers & Transport Operators',
    text: 'Experienced drivers who support safe and timely transportation and delivery of goods.',
    icon: Truck,
  },
  {
    title: 'Supply Chain Coordinators & Freight Documentation Staff',
    text: 'Professionals who coordinate shipments, logistics activities, and required transport documents.',
    icon:  Cable,
  },
];

export default function Logistics({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Logistics & Supply Chain Recruitment
              </p>

              <h1>
                Logistics <em>Workforce</em> Solutions
              </h1>

              <p className="construction-hero-copy">
                Amreen Consultancy helps logistics companies, warehouses,
                transportation businesses, and distribution centers find
                skilled and reliable workers for their daily operations.
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
                aria-label="Logistics and supply chain workforce image placeholder"
              >
                <img src={IndustriesLogistic} alt="" />
                
                {/* <div className="construction-placeholder-grid" />

                <HardHat aria-hidden="true" /> */}

                <span>Logistics Industry Workforce</span>
                <small>Skilled manpower for supply chain operations</small>
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
                  alt="Logistics professional working in a warehouse and supply chain environment"
                />

                <div className="construction-image-note">
                  <Truck aria-hidden="true" /> Logistics Workforce Support
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">
                Logistics Recruitment
              </p>

              <h2>
                Reliable people for smooth logistics operations.
              </h2>

              <p>
                Amreen Consultancy helps logistics companies, warehouses,
                transportation providers, and distribution centers find reliable
                workers for their day-to-day operations.
              </p>

              <p>
                We provide drivers, warehouse workers, forklift operators,
                logistics coordinators, inventory staff, delivery personnel,
                and other skilled workers to support efficient supply chain
                operations in India and overseas.
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
            title="Logistics personnel aligned with operational needs."
            text="Transport, warehouse and coordination roles across the supply chain."
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
            <h2>Planning your logistics workforce requirements?</h2>
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
