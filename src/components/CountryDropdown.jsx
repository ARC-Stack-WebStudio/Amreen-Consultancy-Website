import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COUNTRY_OPTIONS } from '../data/countries';

export default function CountryDropdown({ page, navigate, mobile = false }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const handleSelect = (country) => {
    setOpen(false);
    if (country.pageId) {
      navigate(country.pageId);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`country-nav ${mobile ? 'country-nav-mobile' : 'country-nav-desktop'}`}
      onMouseEnter={!mobile ? () => setOpen(true) : undefined}
      onMouseLeave={!mobile ? () => setOpen(false) : undefined}
    >
      <button
        type="button"
        className={`countries-trigger ${page && page.startsWith('country-') ? 'active' : ''} ${open ? 'open' : ''}`}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        onFocus={() => setOpen(true)}
      >
        <span>COUNTRIES</span>
        <ChevronDown aria-hidden="true" className="countries-trigger-icon" />
      </button>

      {open && (
        <div className="country-dropdown-panel" role="menu" aria-label="Countries dropdown">
          {COUNTRY_OPTIONS.map((country) => (
            <button
              key={country.key}
              type="button"
              className={`country-dropdown-item ${country.pageId ? 'country-dropdown-item-enabled' : 'country-dropdown-item-placeholder'}`}
              role="menuitem"
              aria-current={page === country.pageId ? 'page' : undefined}
              onClick={() => handleSelect(country)}
            >
              {country.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
