import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileCheck,
  FileText,
  Globe2,
  Headphones,
  HeartPulse,
  Plane,
  Search,
  UsersRound,
  Wrench,
} from "lucide-react";
import workforceImage from "../assets/Imgs/Workforce Hero Img.webp";

const steps = [
  ["Requirement", FileText],
  ["Sourcing", UsersRound],
  ["Screening", Search],
  ["Testing", Wrench],
  ["Medical", HeartPulse],
  ["Documentation", FileCheck],
  ["Visa", Globe2],
  ["Travel", Plane],
  ["Deployment", UsersRound],
  ["Support", Headphones],
];
const assurances = [
  ["Verified", "People", BadgeCheck],
  ["Skilled", "Workforce", Wrench],
  ["Compliant", "Process", ClipboardCheck],
  ["Reliable", "Deployment", Plane],
  ["Long-Term", "Support", Headphones],
];
export default function Process({ navigate }) {
  return (
    <main className="process-page">
      <section className="process-hero">
        <div className="process-hero-image" aria-hidden="true">
          <img src={workforceImage} alt="" />
        </div>
        <div className="container">
          <div className="process-hero-copy">
            <p className="process-eyebrow">OUR RECRUITMENT PROCESS</p>
            <h1>
              A Clear Path
              <br />
              <em>from Sourcing to Deployment</em>
            </h1>
            <p>
              A coordinated recruitment process connecting suitable candidates
              with international opportunities.
            </p>
          </div>
          {/* <p className="process-script">
            People
            <br />
            Build
            <br />
            Better
            <br />
            Tomorrows
          </p> */}
        </div>
      </section>
      <section className="process-steps section">
        <div className="container text-center">
          <p className="process-eyebrow">OUR PROCESS</p>
          <h2>A Structured Recruitment Journey</h2>
          <div className="process-steps-copy">
            <p>Amreen Consultancy provides a simple and reliable recruitment process to help employers 
              find the right people for their workforce. We carefully review candidates’ skills, experience,
               and job requirements before selection. From the initial hiring process to documentation and
                deployment, our team offers support at every step to make recruitment smooth, clear, and 
                hassle-free for both employers and candidates.</p>
          </div>
          <div className="process-step-grid">
            {steps.map(([name, Icon], i) => (
              <article key={name}>
                {/* number count */}
                {/* <span>0{i + 1}</span> */}
                <Icon />
                <b>{name}</b>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="process-assurance section surface">
        <div className="container text-center">
          <p className="process-eyebrow">QUALITY ASSURANCE</p>
          <h2>Coordinated at Every Stage</h2>
          <div className="process-assurance-grid">
            {assurances.map(([one, two, Icon]) => (
              <article key={one}>
                <Icon />
                <h3>
                  {one}
                  <br />
                  {two}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="process-cta">
        <div className="process-cta-image" aria-hidden="true">
          <img src={workforceImage} alt="" />
        </div>
        <div className="container">
          <div className="process-section-cta">
            <p className="process-eyebrow">LET'S WORK TOGETHER</p>
            <h2>
              Need a Skilled
              <br />
              Workforce?
            </h2>
            <button
              // className="btn btn-primary"
              className="about-button about-button--primary"
              onClick={() => navigate("contact")}
            >
              Discuss Your Requirements <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
