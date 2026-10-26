import { useState } from 'react';
import { COUNTRY_OPTIONS } from '../data/countries';
import '../styles/contact-form.css';

const initial = { name: '', email: '', phone: '', role: '', message: '' };
const enquiryInitial = {
  companyName: '', country: '', industry: '', workers: '', positions: '',
  contactPerson: '', email: '', telephone: '', requirements: '',
};
const industries = [
  'Construction', 'Manufacturing', 'Oil & Gas', 'Petrochemicals', 'Mining',
  'Logistics', 'Marine', 'Infrastructure', 'Healthcare', 'Other',
];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ variant }) {
  return variant === 'recruitment' ? <RecruitmentForm /> : <ExistingContactForm />;
}

function ExistingContactForm() {
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const update = (event) => setData({ ...data, [event.target.name]: event.target.value });
  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (!data.name.trim()) next.name = 'Please enter your full name.';
    if (!emailPattern.test(data.email)) next.email = 'Enter a valid email address.';
    if (!data.role) next.role = 'Please select the option that best describes your enquiry.';
    if (!data.message.trim()) next.message = 'Please provide details about your enquiry.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); setData(initial); }, 600);
  };
  return <form className="contact-form" noValidate onSubmit={submit}>
    {sent && <div className="form-success" role="status">Thank you. Our team will be in touch shortly.</div>}
    <div className="row g-4">
      <Field label="Full name" name="name" value={data.name} onChange={update} error={errors.name} />
      <Field label="Email address" name="email" type="email" value={data.email} onChange={update} error={errors.email} />
      <Field label="Phone number" name="phone" value={data.phone} onChange={update} />
      <div className="col-12 col-md-6">
        <label htmlFor="role">I am contacting you as a...</label>
        <select id="role" name="role" value={data.role} onChange={update} aria-invalid={!!errors.role} aria-describedby={errors.role ? 'role-error' : undefined}>
          <option value="">Choose an option</option><option>Candidate</option><option>Employer</option><option>Partner</option><option>Other</option>
        </select>
        {errors.role && <small id="role-error">{errors.role}</small>}
      </div>
      <div className="col-12">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={data.message} onChange={update} placeholder="Please share your recruitment, career or partnership enquiry." aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <small id="message-error">{errors.message}</small>}
      </div>
      <div className="col-12">
        <button className="btn btn-primary" disabled={loading}>{loading ? 'Sending…' : 'Send enquiry'}<span>→</span></button>
        <p className="form-privacy-note">Your trust matters to us. We handle your personal information with confidentiality and care.</p>
      </div>
    </div>
  </form>;
}

function RecruitmentForm() {
  const [data, setData] = useState(enquiryInitial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setStatus('');
  };

  const submit = async (event) => {
    event.preventDefault();
    if (loading) return;
    const next = {};
    const required = [
      ['companyName', 'Please enter your company name.'],
      ['country', 'Please select a country.'],
      ['industry', 'Please select an industry.'],
      ['workers', 'Please enter the number of workers required.'],
      ['positions', 'Please list the positions required.'],
      ['contactPerson', 'Please enter the contact person’s name.'],
      ['email', 'Please enter a valid email address.'],
      ['telephone', 'Please enter a telephone number.'],
    ];
    required.forEach(([field, message]) => {
      if (!String(data[field]).trim()) next[field] = message;
    });
    if (data.email.trim() && !emailPattern.test(data.email.trim())) {
      next.email = 'Enter a valid email address, such as name@example.com.';
    }
    if (data.workers && (!Number.isFinite(Number(data.workers)) || Number(data.workers) < 1)) {
      next.workers = 'Enter a number of workers greater than zero.';
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    const { REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_PUBLIC_KEY } = process.env;
    if (!REACT_APP_EMAILJS_SERVICE_ID || !REACT_APP_EMAILJS_TEMPLATE_ID || !REACT_APP_EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      return;
    }

    setLoading(true);
    setStatus('');
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: REACT_APP_EMAILJS_SERVICE_ID,
          template_id: REACT_APP_EMAILJS_TEMPLATE_ID,
          user_id: REACT_APP_EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: 'tyesionkhan2001@gmail.com',
            reply_to: data.email.trim(),
            subject: `New Recruitment Enquiry — Amreen Consultancy — ${data.companyName.trim()}`,
            company_name: data.companyName.trim(),
            country: data.country,
            industry: data.industry,
            number_of_workers: data.workers.trim(),
            positions_required: data.positions.trim(),
            contact_person: data.contactPerson.trim(),
            email: data.email.trim(),
            telephone: data.telephone.trim(),
            additional_requirements: data.requirements.trim() || 'None provided.',
            submitted_via: 'Amreen Consultancy Website',
            contact_page: window.location.href,
          },
        }),
      });
      if (!response.ok) throw new Error('Email service rejected the enquiry.');
      setData(enquiryInitial);
      setErrors({});
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return <form className="recruitment-enquiry-form" noValidate onSubmit={submit}>
    {status === 'success' && <div className="recruitment-form-success" role="status">Thank you. Your enquiry has been submitted successfully. Our team will contact you shortly.</div>}
    {status === 'error' && <div className="recruitment-form-error" role="alert">Unable to submit your enquiry right now. Please try again or contact us directly.</div>}
    <div className="row g-4">
      <EnquiryField label="Company Name" name="companyName" placeholder="Your company name" value={data.companyName} onChange={update} error={errors.companyName} />
      <div className="col-12 col-md-6">
        <label htmlFor="enquiry-country">Country <Required /></label>
        <select id="enquiry-country" name="country" value={data.country} onChange={update} aria-invalid={!!errors.country} aria-describedby={errors.country ? 'enquiry-country-error' : undefined}>
          <option value="">Select country</option>
          {COUNTRY_OPTIONS.map((country) => <option key={country.key} value={country.label}>{country.label}</option>)}
        </select>
        <ErrorMessage id="enquiry-country-error" message={errors.country} />
      </div>
      <div className="col-12 col-md-6">
        <label htmlFor="enquiry-industry">Industry <Required /></label>
        <select id="enquiry-industry" name="industry" value={data.industry} onChange={update} aria-invalid={!!errors.industry} aria-describedby={errors.industry ? 'enquiry-industry-error' : undefined}>
          <option value="">Select industry</option>
          {industries.map((industry) => <option key={industry}>{industry}</option>)}
        </select>
        <ErrorMessage id="enquiry-industry-error" message={errors.industry} />
      </div>
      <EnquiryField label="Number of Workers" name="workers" type="number" min="1" placeholder="e.g. 500" value={data.workers} onChange={update} error={errors.workers} />
      <EnquiryField className="col-12" label="Positions Required" name="positions" placeholder="e.g. Welders, Electricians, Fitters" value={data.positions} onChange={update} error={errors.positions} />
      <EnquiryField label="Contact Person" name="contactPerson" placeholder="Full name" value={data.contactPerson} onChange={update} error={errors.contactPerson} />
      <EnquiryField label="Email" name="email" type="email" placeholder="email@company.com" value={data.email} onChange={update} error={errors.email} />
      <EnquiryField label="Telephone" name="telephone" type="tel" placeholder="+7 / +966 / +971 ..." value={data.telephone} onChange={update} error={errors.telephone} />
      <div className="col-12">
        <label htmlFor="enquiry-requirements">Additional Requirements</label>
        <textarea id="enquiry-requirements" name="requirements" rows="5" value={data.requirements} onChange={update} placeholder="Tell us more about your project timeline, specific skills needed, or any other details..." />
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Sending…' : 'Submit Enquiry'}</button>
        <p className="form-privacy-note">Your trust matters to us. We handle your personal information with confidentiality and care.</p>
      </div>
    </div>
  </form>;
}

function Required() { return <span aria-hidden="true"> *</span>; }
function ErrorMessage({ id, message }) { return message ? <small id={id}>{message}</small> : null; }
function EnquiryField({ label, name, type = 'text', placeholder, value, onChange, error, className = 'col-12 col-md-6', min }) {
  const id = `enquiry-${name}`;
  const errorId = `${id}-error`;
  return <div className={className}>
    <label htmlFor={id}>{label} <Required /></label>
    <input id={id} name={name} type={type} min={min} placeholder={placeholder} value={value} onChange={onChange} aria-invalid={!!error} aria-describedby={error ? errorId : undefined} />
    <ErrorMessage id={errorId} message={error} />
  </div>;
}

function Field({ label, name, type = 'text', value, onChange, error }) {
  return <div className="col-12 col-md-6">
    <label htmlFor={name}>{label}</label>
    <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={label} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} />
    {error && <small id={`${name}-error`}>{error}</small>}
  </div>;
}