import SectionTitle from './SectionTitle';

export default function CountrySectors({ country }) {
  return (
    <section className="section surface country-sectors">
      <div className="container">
        <SectionTitle
          eyebrow="Industry sectors"
          title={`Sectors We Serve in ${country.label}`}
          text="We support employers across these sectors with recruitment aligned to operational demands and workforce requirements."
        />
        <div className="row g-3 country-sector-grid">
          {country.sectors.map((sector) => (
            <div className="col-12 col-sm-6 col-lg-4" key={sector}>
              <div className="country-sector-card">
                <span>{sector}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
