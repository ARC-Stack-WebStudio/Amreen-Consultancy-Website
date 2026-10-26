import { ArrowRight, MapPin } from "lucide-react";
import CountryCard from "./CountryCard";

import worldmap from "../assets/Imgs/world-map.jpeg"

const countries = [
  {
    code: "UAE",
    name: "United Arab Emirates",
    focus: "Construction & Logistics",
    featured: true,
  },
  {
    code: "OM",
    name: "Oman",
    focus: "Industrial & Oil & Gas",
    featured: false,
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    focus: "Construction & Oil & Gas",
    featured: false,
  },
  { code: "QA", name: "Qatar", focus: "Infrastructure & FM", featured: false },
  {
    code: "KW",
    name: "Kuwait",
    focus: "Construction & Manufacturing",
    featured: false,
  },
  {
    code: "MU",
    name: "Mauritius",
    focus: "Skilled Workforce",
    featured: false,
  },
  {
    code: "PL",
    name: "Poland",
    focus: "Technical Specialists",
    featured: false,
  },
  
  
  {
    code: "RU",
    name: "Russia",
    focus: "Primary Focus Market",
    featured: false,
  },
];

function WorldMap() {
  return (
    <div
      className="world-map-panel"
      role="img"
      aria-label="Stylised world map showing Amreen Consultancy's featured international markets"
    >
      <div className="map-grid" />

      <img className="world-map"
      src={worldmap} 
      alt="A luminous blue globe connected by global network lights, with an aircraft flying above a modern city" />

      {/* <svg viewBox="0 0 700 370" className="world-map" aria-hidden="true">
        <path
          className="map-land"
          d="M45 110l30-36 65 7 21 29-21 21-40-8-22 29-38-8zm120-5 32-28 37 8 24 34-20 26-38-8-16 35-34-5-11-32zm69 99 36 6 22 46-13 64-27-2-13-43 7-38zm118-112 46-25 42 10 21 27-35 19-23 31-46-4-25-27zm115 7 37-18 54 7 38 29-14 25-52-3-25 29-41-14zm99 90 37 12 25 47-16 48-30-18-18-46zm-122 50 43 8 17 31-28 21-48-13-9-28z"
        />
        <path
          className="map-land"
          d="M409 214l21 8 5 26-17 14-19-15zm-59-31 26 7 3 18-26 10-15-17z"
        />
        <path
          className="map-route"
          d="M370 111C422 97 466 107 508 138M370 111C321 128 287 159 263 216M370 111C401 153 430 203 421 235M370 111C315 93 243 97 202 120"
        />
        <g className="map-markers">
          <circle cx="370" cy="111" r="6" />
          <circle cx="348" cy="119" r="4" />
          <circle cx="405" cy="130" r="4" />
          <circle cx="424" cy="138" r="4" />
          <circle cx="400" cy="151" r="4" />
          <circle cx="415" cy="157" r="4" />
          <circle cx="421" cy="235" r="4" />
          <circle cx="321" cy="111" r="4" />
        </g>
      </svg> */}
      <div className="map-key">
        <MapPin aria-hidden="true" />
        <span>Featured markets</span>
      </div>
    </div>
  );
}

export default function GlobalReach({ navigate }) {
  return (
    <section className="global-reach" aria-labelledby="global-reach-heading">
      <div className="container position-relative">
        <header className="global-reach-heading">
          <p className="section-eyebrow">Global Reach</p>
          <h2 id="global-reach-heading">
            Countries We <span className="brand-text">Serve</span>
          </h2>
          <p>
            Helping skilled professionals explore job opportunities in international markets across different countries.
          </p>
        </header>
        <div className="row align-items-center g-4 g-l">
          <div className="col-12 col-lg-6">
            <WorldMap />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row g-3 country-grid-list">
              {countries.map((country) => (
                <div className="col-12 col-sm-6" key={country.code}>
                  <CountryCard {...country} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="global-reach-cta">
          <p>Looking for your next international opportunity?</p>
          <div className="global-reach-cta-btn-actions">
            <button
              className="btn btn-primary"
              onClick={() => navigate("jobs")}
            >
              Explore Opportunities <ArrowRight />
            </button>
            <button
              className="btn btn-outline-light"
              onClick={() => navigate("contact")}
            >
              Contact Amreen Consultancy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
