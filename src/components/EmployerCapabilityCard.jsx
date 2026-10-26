export default function EmployerCapabilityCard({ title, description, Icon, featured = false }) {
  return (
    <article className={`employer-capability-card ${featured ? 'employer-capability-featured' : ''}`}>
      <div className="employer-capability-icon">
        <Icon aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
