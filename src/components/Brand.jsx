// import headerLogo from '../assets/Logo/AMREEN Logo.png';
// import headerLogoFull from '../assets/Logo/AMREEN Logo.png';

// import headerIconFull from '../assets/Logo/Amreen Icon.png';
// import headerIcon from '../assets/Logo/Amreen Icon.png';

// export default function Brand({ light = false, full = false }) {
//   return (
//     <div className={`brand ${light ? 'brand-light' : ''}`}>
//       <img
//         src={full ? headerIconFull : headerIcon}
//         alt="Amreen Consultancy - Overseas Recruitment Icon"
//       />
//       <img
//         src={full ? headerLogoFull : headerLogo}
//         alt="Amreen Consultancy - Overseas Recruitment Logo"
//       />
//     </div>
//   );
// }



import headerLogo from '../assets/Logo/New Pro Logo.png';
import headerLogoWhite from '../assets/Logo/AMREEN Logo White.png';

import headerIcon from '../assets/Logo/Amreen Icon.png';
import headerIconWhite from '../assets/Logo/Amreen Icon White.png';

export default function Brand({ light = false }) {
  return (
    <div className={`brand ${light ? 'brand-light' : ''}`}>

      <img
        src={ headerLogo}
        alt="Amreen Consultancy - Overseas Recruitment Logo"
      />
    </div>
  );
}