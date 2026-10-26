import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { INDUSTRY_OPTIONS } from '../data/industries';

export default function IndustryDropdown({ page, navigate, mobile = false }) {
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

  const handleSelect = (industry) => {
    setOpen(false);
    navigate(industry.pageId || 'jobs');
  };

  return (
    <div
      ref={wrapperRef}
      className={`country-nav industry-nav ${mobile ? 'country-nav-mobile' : 'country-nav-desktop'}`}
      onMouseEnter={!mobile ? () => setOpen(true) : undefined}
      onMouseLeave={!mobile ? () => setOpen(false) : undefined}
    >
      <button
        type="button"
        className={`countries-trigger industries-trigger ${page === 'jobs' || page === 'industry-construction' ? 'active' : ''} ${open ? 'open' : ''}`}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        onFocus={() => setOpen(true)}
      >
        <span>INDUSTRIES</span>
        <ChevronDown aria-hidden="true" className="countries-trigger-icon" />
      </button>

      {open && (
        <div className="country-dropdown-panel industry-dropdown-panel" role="menu" aria-label="Industries dropdown">
          {INDUSTRY_OPTIONS.map((industry) => (
            <button
              key={industry.label}
              type="button"
              className="country-dropdown-item country-dropdown-item-enabled"
              role="menuitem"
              onClick={() => handleSelect(industry)}
            >
              {industry.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
