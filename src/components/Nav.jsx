import React from 'react';
import styles from './nav.module.css';
import logo from '../assets/logo.png';

const Nav = () => {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className={styles.nav}>
			<div>
				<img src={logo} alt='' className={styles.logo} />
			</div>
			<div className={styles.navitems}>
				<p onClick={() => scrollToSection('home-section')}>Home</p>
				<p onClick={() => scrollToSection('what-we-do-section')}>What We Do</p>
				<p onClick={() => scrollToSection('partners-section')}>Our Partners</p>
				<p onClick={() => scrollToSection('contact-section')}>Contact Us</p>
				<p className={styles.donate} onClick={() => scrollToSection('donate-section')}>
					Donate
				</p>
			</div>
		</div>
	);
};

export default Nav;
