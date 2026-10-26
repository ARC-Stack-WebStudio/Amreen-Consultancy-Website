import SectionTitle from '../components/SectionTitle'; import ContactForm from '../components/ContactForm';

export default function Contact() {
    return <>
        <section className="page-hero contact-hero-section">
            <div className="container">
                <p className="eyebrow light">Contact Amreen Consultancy</p>
                <h1>Discuss<br /><em>your next steps.</em></h1>
                <p>Contact us about your recruitment requirements, career plans or potential partnership. Our team is ready to understand how we can assist.</p>
            </div>
        </section>
        <section className="section">
            <div className="container narrow">
                <SectionTitle eyebrow="Contact our team" title="Tell us how we can support you" />
                <ContactForm variant="recruitment" />
            </div>
        </section></>
}
