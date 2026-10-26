import { ArrowRight, BriefcaseBusiness, MapPin } from 'lucide-react'; import SectionTitle from '../components/SectionTitle';
const roles = [
    ['Construction', 'Roles for skilled site and technical talent.'],
    ['Manufacturing', 'Opportunities in production, quality and operations.'],
    ['Petrochemicals', 'Careers in chemicals, refining and process industries.'],
    ['Mining', 'Roles in exploration, extraction and support services.'],
    ['Oil & Gas', 'Global opportunities in upstream, midstream and downstream.'],
    ['Logistics', 'Opportunities in supply chain, transport and distribution.'],
    ['Marine', 'Roles in shipping, offshore and maritime operations.'],
    ['Infrastructure', 'Career opportunities in infrastructure development and maintenance.'],
    ['Warehousing', 'Inventory, storage and fulfilment positions.'],
    ['Shipbuilding', 'Opportunities in ship construction, repair and maintenance.'],
    ['Skilled Trades', 'Practical career pathways for experienced tradespeople.'],
    ['Engineering', 'Opportunities for specialist engineering talent.'],
    ['Information Technology', 'Growing roles for digital and technical professionals.'],
    ['Food Processing', 'Roles in production, packaging and quality control.'],
    ['Healthcare', 'International opportunities for qualified professionals.'],
    ['Hospitality', 'Service and guest-experience career pathways.']
]; export default function Jobs({ page, navigate }) {
    const candidate = page === 'candidates'; return <>
        <section className="page-hero">
            <div className="container">
                <p className="eyebrow light">{candidate ? 'For candidates' : 'Global opportunities'}</p>
                <h1>{candidate ? 'Take your experience further' : 'Explore your next\ncareer move.'}</h1>
                <p>{candidate ? 'Share your profile with us to discuss opportunities aligned with your experience and career goals.' : 'Explore the sectors we support. Current vacancies will be posted here when available.'}</p>
            </div>
        </section>
        <section className="section surface">
            <div className="container">
                <SectionTitle eyebrow="Career sectors" title="Explore international career pathways" text="There are no current vacancies listed. Please return for future updates or contact our team to discuss your experience." />
                <div className="row g-4">{roles.map(([t, x]) => <div className="col-12 col-md-6 col-lg-4" key={t}><article className="job-card">
                    <div><BriefcaseBusiness /><span>Sector</span></div>
                    <h3>{t}</h3>
                    <p>{x}</p>
                    <div className="job-meta"><MapPin /> International</div>
                    <button className="text-link" onClick={() => navigate('contact')}>Share your profile <ArrowRight /></button>
                </article></div>)}
                </div>
            </div>
        </section></>
}
