import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Brand from './Brand';
import CountryDropdown from './CountryDropdown';
import IndustryDropdown from './IndustryDropdown';

const links = [
	['home', 'HOME'],
	['about', 'ABOUT'],
	['workforce', 'WORKFORCE'],
	['process', 'PROCESS'],
	// ['jobs', 'Jobs'],
	// ['services', 'Services'],
	// ['employers', 'For Employers'],
	// ['candidates', 'For Candidates'],
	// ['jobs', 'JOBS'],
];

export default function Header({ page, navigate }) {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		addEventListener('scroll', onScroll);
		return () => removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const key = (e) => e.key === 'Escape' && setOpen(false);
		addEventListener('keydown', key);
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			removeEventListener('keydown', key);
			document.body.style.overflow = '';
		};
	}, [open]);

	const go = (id) => {
		navigate(id);
		setOpen(false);
	};

	return (
		// <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
		<header className={`site-header ${scrolled}`}>
			<div className="container">
				<div className="header-inner">
					<button className="brand-button" onClick={() => go('home')}>
						<Brand light={scrolled} />
					</button>

					<nav className="desktop-nav" aria-label="Main navigation">
						{links.slice(0, 2).map(([id, label]) => (
							<button
								key={id}
								onClick={() => go(id)}
								className={page === id ? 'active' : ''}
							>
								{label}
							</button>
						))}

						<CountryDropdown page={page} navigate={navigate} />
						<IndustryDropdown page={page} navigate={navigate} />

						{links.slice(2).map(([id, label]) => (
							<button
								key={id}
								onClick={() => go(id)}
								className={page === id ? 'active' : ''}
							>
								{label}
							</button>
						))}
					</nav>

					<button
						className="btn btn-primary header-cta"
						onClick={() => go('contact')}
					>
						Find Your Opportunity
					</button>

					<button
						className="menu-toggle"
						aria-label={open ? 'Close menu' : 'Open menu'}
						aria-expanded={open}
						onClick={() => setOpen(!open)}
					>
						{open ? <X /> : <Menu />}
					</button>
				</div>
			</div>

			<div className={`mobile-menu ${open ? 'open' : ''}`}>
				{links.slice(0, 2).map(([id, label]) => (
					<button key={id} onClick={() => go(id)}>
						{label}
					</button>
				))}

				<CountryDropdown page={page} navigate={navigate} mobile />
				<IndustryDropdown page={page} navigate={navigate} mobile />

				{links.slice(2).map(([id, label]) => (
					<button key={id} onClick={() => go(id)}>
						{label}
					</button>
				))}

				<button className="btn btn-primary" onClick={() => go('contact')}>
					Find Your Opportunity
				</button>
			</div>
		</header>
	);
}
