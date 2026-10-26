import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CircuitBoard,
  ClipboardCheck,
  Cog,
  Construction,
  DraftingCompass,
  Globe2,
  Hammer,
  HardHat,
  Headphones,
  HeartPulse,
  Plane,
  ShieldCheck,
  Truck,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";
import workforceHero from "../assets/Imgs/Workforce Hero Img.webp";
// import workforceSideImage from "../assets/Imgs/Workforce Side Image.webp";

const categories = [
  ["Welders", Hammer],
  ["Electricians", Zap],
  ["Fitters & Fabricators", Wrench],
  ["Drivers", Truck],
  ["Mechanics", Cog],
  ["Machine Operators", Construction],
  ["Construction Workers", HardHat],
  ["Engineers", DraftingCompass],
  ["Technical Professionals", CircuitBoard],
  ["Supervisors", ClipboardCheck],
  ["Semi-Skilled Workers", BriefcaseBusiness],
];
const timeline = [
  ["Candidate Sourcing", "& Screening", UsersRound],
  ["Trade Testing", "& Interviews", ClipboardCheck],
  ["Medical Examination", "& Documentation", HeartPulse],
  ["Visa Processing", "& Approvals", Globe2],
  ["Travel Coordination", "& Departure", Plane],
];
const process = [
  "Employer Requirement Analysis",
  "Candidate Sourcing",
  "Screening & Shortlisting",
  "Trade Testing & Interviews",
  "Documentation & Medicals",
  "Visa Processing & Deployment",
];
const quality = [
  ["Identity Verification", ShieldCheck],
  ["Skill Assessment & Trade Testing", Wrench],
  ["Medical Fitness Examination", HeartPulse],
  ["Background Verification", UsersRound],
  ["Document Compliance Checks", ClipboardCheck],
  ["Deployment Readiness Verification", BadgeCheck],
];

export default function Workforce({ navigate }) {
  return <main className="workforce-page">
    <section className="workforce-hero"><div className="workforce-hero-image" aria-hidden="true"><img src={workforceHero} alt="" /></div><div className="container workforce-hero-content"><p className="workforce-eyebrow">INTERNATIONAL MANPOWER SOLUTIONS</p><h1>International<br /><em>Workforce Mobilisation</em></h1><p>We connect talent from India with international opportunities, sourcing skilled, semi-skilled and professional personnel for projects across industries.</p><div className="workforce-actions"><button className="btn btn-primary" onClick={() => navigate('contact')}>Request Manpower <ArrowRight /></button><button className="btn workforce-outline" onClick={() => document.getElementById('mobilization-process')?.scrollIntoView({ behavior: 'smooth' })}>View Our Recruitment Process <ArrowRight /></button></div><div className="workforce-values"><span><BadgeCheck />International Recruitment Support</span><span><Headphones />Coordinated Recruitment Support</span><span><Globe2 />Global Opportunities</span></div></div></section>
    <section className="workforce-intro section"><div className="container"><div className="row g-4 align-items-center"><div className="col-12 col-l"><div className="workforce-intro-image"><img src={workforceHero} alt="Professional supporting international workforce operations" /></div></div><div className="col-12 col-lg-7"><p className="workforce-eyebrow">WORKFORCE RECRUITMENT</p><h2>Recruitment and Deployment<br />Support from India</h2><p>Amreen Consultancy sources and screens candidates to meet employer requirements. Our support spans candidate sourcing, trade assessments, documentation, medical checks, visa processing and deployment coordination.</p><button className="btn btn-primary" onClick={() => navigate('about')}>Learn About Our Services <ArrowRight /></button></div><div className="col-12 col-lg-5"><div className="workforce-benefits"><span><BadgeCheck /><b>100%</b> Compliance Checks</span><span><UsersRound />Skilled &amp; Verified Workforce</span><span><Globe2 />Timely Deployment</span><span><Headphones />Dedicated Client Support</span></div></div></div></div></section>
    <section className="workforce-categories section surface"><div className="container text-center"><p className="workforce-eyebrow">OUR WORKFORCE</p><h2 className="workforce-categories-title">Workforce Categories <span>We Source</span></h2><p>We source skilled, semi-skilled and professional personnel for a range of industry-specific workforce requirements.</p><div className="workforce-category-grid">{categories.map(([name, Icon], i) => <article className="workforce-category-card" key={name}><div className="workforce-category-icon"><Icon aria-hidden="true" /></div><h3 className="workforce-category-title">{name}</h3><span className="workforce-category-duration">{i % 3 === 1 ? '4 – 6 Weeks' : '6 – 8 Weeks'}</span></article>)}</div></div></section>

    <section className="workforce-timeline section" id="mobilization-process"><div className="container text-center"><p className="workforce-eyebrow">OUR TIMELINE</p><h2>Typical Mobilisation Timeline</h2><p>Our recruitment stages are coordinated from candidate sourcing through deployment preparation.</p><div className="workforce-timeline-row">{timeline.map(([a, b, Icon]) => <article key={a}><Icon /><span>{a}<br />{b}</span></article>)}<strong>4 – 12 Weeks<small>Typical Mobilization</small></strong></div></div></section>

    <section className="workforce-process section"><div className="container">
      <div className="row workforce-process-and-quality"><div className="col-12 col-lg-12">
        <p className="workforce-eyebrow">OUR PROCESS</p>
        <h2>Workforce Recruitment and Deployment</h2>
        <p>A coordinated process to identify suitable candidates and prepare them for project deployment.</p>

        <div className="workforce-process-grid">{process.map((item, i) => <article key={item}>
          <b>0{i + 1}</b>
          <span>{item}</span></article>)}
        </div>
      </div>

        <div className="col-12 col-lg-12">
          <p className="workforce-eyebrow">QUALITY ASSURANCE</p>
          <h2>Candidate Screening and Verification</h2>
          <p>Candidates are assessed for role suitability, documentation and readiness for deployment.</p>
          <div className="workforce-quality workforce-process-grid">
            {quality.map(([item, Icon]) => <article><span key={item}><Icon />{item}</span></article>)}
          </div>
        </div>
      </div>
    </div>
    </section>

    <section className="workforce-cta"><div className="container"><div><p className="workforce-eyebrow">LET'S WORK TOGETHER</p><h2>Planning Your Workforce Requirements?</h2><p>Work with Amreen Consultancy for recruitment, candidate screening and coordinated workforce deployment support.</p></div><button className="btn btn-primary" onClick={() => navigate('contact')}>Request Manpower <ArrowRight /></button></div></section>
  </main>
}
