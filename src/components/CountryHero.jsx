import omanHeroImage from '../assets/Imgs/Oman-Hero.png';
import saudiHeroImage from '../assets/Imgs/Saudi Arabia Hero.png';
import uaeHeroImage from '../assets/Imgs/UAE Hero.png';
import qatarHeroImage from '../assets/Imgs/Qatar Hero.png';
import polandHeroImage from '../assets/Imgs/Poland Hero.png';
import KuwaitHeroImage from '../assets/Imgs/Kuwait Hero.png';
import MAURITIUSHeroImage from '../assets/Imgs/MAURITIUS Hero.png';
import RussiaHeroImage from '../assets/Imgs/Russia Hero.png';

export default function CountryHero({ country }) {
  const isOman = country.key === 'oman';
  const isSaudiArabia = country.key === 'saudi-arabia';
  const isUnitedArabEmirates = country.key === 'uae';
  const isQatar = country.key === 'qatar';
  const isPoland = country.key === 'poland';
  const isKuwait = country.key === 'kuwait';
  const isMAURITIUS = country.key === 'mauritius';
  const isRussia = country.key === 'russia';
      
  return (
    <section
      className={`page-hero country-hero${isOman ? ' country-hero--oman' : ''}${
        isSaudiArabia ? ' country-hero--saudi' : ''
      }${
        isUnitedArabEmirates ? ' country-hero--uae' : ''
      }${
        isQatar ? ' country-hero--qatar' : ''
      }${
        isPoland ? ' country-hero--poland' : ''
      }${
        isKuwait ? ' country-hero--kuwait' : ''
      }${
        isMAURITIUS ? ' country-hero--mauritius' : ''
      }${
        isRussia ? ' country-hero--russia' : ''
      }`}
    >
      <div className="container">
        <p className="eyebrow light">{country.heroEyebrow}</p>
        <h1>{country.heading}</h1>
        <p>{country.heroIntro}</p>
      </div>

      {isOman && (
        <div className="oman-hero-visual" aria-hidden="true">
          <img src={omanHeroImage} alt="" />
        </div>
      )}

      {isSaudiArabia && (
        <div className="saudi-hero-visual" aria-hidden="true">
          <img src={saudiHeroImage} alt="" />
        </div>
      )}

      {isUnitedArabEmirates && (
        <div className="uae-hero-visual" aria-hidden="true">
          <img src={uaeHeroImage} alt="" />
        </div>
      )}

      {isQatar && (
        <div className="qatar-hero-visual" aria-hidden="true">
          <img src={qatarHeroImage} alt="" />
        </div>
      )}

       {isPoland && (
        <div className="qatar-hero-visual" aria-hidden="true">
          <img src={polandHeroImage} alt="" />
        </div>
      )}

      {isKuwait && (
        <div className="qatar-hero-visual" aria-hidden="true">
          <img src={KuwaitHeroImage} alt="" />
        </div>
      )}

      {isMAURITIUS && (
        <div className="qatar-hero-visual" aria-hidden="true">
          <img src={MAURITIUSHeroImage} alt="" />
        </div>
      )}

      {isRussia && (
        <div className="qatar-hero-visual" aria-hidden="true">
          <img src={RussiaHeroImage} alt="" />
        </div>
      )}


    </section>
  );
}
