import { BadgeCheck, Clock3, FileText, HeartHandshake, MonitorCheck, ShieldCheck, UsersRound, Wrench } from 'lucide-react';
import EmployerCapabilityCard from './EmployerCapabilityCard';

const employerCapabilities = [
  { title: 'Large Workforce Database', description: 'Connect with a wide pool of pre-screened candidates across diverse industries, trades, and skill levels.', icon: UsersRound, featured: true },
  { title: 'Thorough Candidate Checks', description: 'Candidates go through detailed verification, skill assessment, background checks, and reference screening.', icon: BadgeCheck },
  { title: 'Practical Skill Assessment', description: 'Hands-on testing helps evaluate technical abilities in welding, electrical, mechanical, fitting, and other trades.', icon: Wrench },
  { title: 'Fast Mobilisation', description: 'Efficient recruitment and processing help businesses mobilise the required workforce within a shorter timeframe.', icon: Clock3 },
  { title: 'Documentation Help', description: 'We assist with visas, work permits, attestations, and other essential employment documentation.', icon: FileText },
  { title: 'International Compliance', description: 'Our process follows relevant labour regulations, migration requirements, and industry standards across different markets.', icon: ShieldCheck },
  { title: 'Workforce Continuity', description: 'Ongoing support and worker care help employers maintain a stable and dependable workforce.', icon: HeartHandshake },
  { title: 'End-to-End Management', description: 'From finding suitable candidates to deployment and post-placement assistance, we manage the complete recruitment journey.', icon: MonitorCheck },
];

export default function WhyEmployersChooseAmreen() {
  return (
    <section className="employer-capabilities" id="why-amreen" aria-labelledby="why-amreen-heading">
      <div className="container">
        <header className="employer-capabilities-heading text-center mx-auto">
          <p className="section-eyebrow">Why Employers Choose Amreen Consultancy</p>
          <span className="brand-divider mx-auto" aria-hidden="true" />
          <h2 id="why-amreen-heading">Building Workforce Connections Worldwide</h2>
          <p>We connect businesses with the right workforce and provide end-to-end management to support a smooth and reliable recruitment process.</p>
        </header>
        <div className="row g-4">
          {employerCapabilities.map(({ icon: Icon, ...capability }) => (
            <div className="col-12 col-md-6 col-lg-3" key={capability.title}>
              <EmployerCapabilityCard {...capability} Icon={Icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
