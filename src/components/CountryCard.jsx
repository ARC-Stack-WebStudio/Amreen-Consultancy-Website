export default function CountryCard({ code, name, focus, featured = false }) {
  return (
    <article
      className={`country-card ${featured ? "country-card-featured" : ""}`}
    >
      <span className="country-code" aria-hidden="true">
        {code}
      </span>
      <div className="country-card-copy">
        <h3>{name}</h3>
        <p>{focus}</p>
      </div>
    </article>
  );
}
