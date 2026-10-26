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
import workforceHero from '../assets/Imgs/Workforce Hero Img.webp';
import SectionTitle from '../components/SectionTitle';
import IndustriesCounstruction from "../assets/Imgs/Construction Hero section.webp";

const categories = [
  { title: 'Project Leadership', text: 'Project managers and construction supervisors who keep work coordinated on site.', icon: ClipboardCheck },
  { title: 'Engineering Teams', text: 'Civil and site engineers for planning, execution and quality control.', icon: Ruler },
  { title: 'Skilled Trades', text: 'Masons, carpenters, steel fixers and welders for essential build work.', icon: Hammer },
  { title: 'MEP Specialists', text: 'Electricians and plumbers for dependable mechanical, electrical and plumbing work.', icon: Cable },
  { title: 'Plant Operators', text: 'Qualified equipment operators for productive, safety-focused project sites.', icon: Settings2 },
  { title: 'Site Workforce', text: 'Reliable general construction workers ready to support daily operations.', icon: HardHat },
];

export default function ConstructionIndustry({ navigate }) {
  return (
    <div className="construction-page">
      <section className="construction-hero">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">construction workforce recruitment</p>
              <h1>Construction <em>Workforce</em> Solutions</h1>
              <p className="construction-hero-copy">
                Construction professionals and skilled trades sourced for project roles and overseas deployment.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('contact')}>
                Request Manpower <ArrowRight />
              </button>
            </div>
            <div className="col-12 col-lg-6">
              <div className="construction-hero-placeholder" role="img" aria-label="Construction workforce image">
                <img src={IndustriesCounstruction} alt="" />
                {/* <div className="construction-placeholder-grid" /> */}
                {/* <HardHat aria-hidden="true" /> */}
                <span>construction workforce</span>
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
                <img src={workforceHero} alt="Construction professional at an international project site" />
                <div className="construction-image-note"><Truck aria-hidden="true" /> Workforce mobilisation support</div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <p className="construction-eyebrow">construction recruitment</p>
              <h2>Construction manpower for safe, well-coordinated project delivery.</h2>
              <p>
                We source construction engineers, site supervisors, skilled trades and support staff against technical role requirements and deployment schedules.
              </p>
              <p>
                From experienced engineers and supervisors to certified trades and site support teams, we source candidates matched to your technical requirements and deployment timelines.
              </p>
              <div className="construction-intro-points">
                <span><UsersRound aria-hidden="true" /> Screened, job-ready candidates</span>
                <span><MoveUpRight aria-hidden="true" /> Overseas deployment support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section surface construction-categories">
        <div className="container">
          <SectionTitle
            eyebrow="Workforce categories"
            title="Construction personnel matched to site requirements."
            text="Technical, trade and site support roles across construction projects."
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
            <h2>Need construction manpower for your project?</h2>
            <p>Share your roles and timelines with us. We can support candidate sourcing and deployment coordination.</p>
          </div>
          {/* <button className="btn btn-primary" onClick={() => navigate('contact')}> */}
          <button className="about-button about-button--primary" onClick={() => navigate('contact')}>
            Request Manpower <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
