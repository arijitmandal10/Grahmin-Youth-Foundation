import React from 'react';
import styles from './nav.module.css';
import logo from '../assets/logo.png';
import insta from '../assets/insta.png';
import linkdin from '../assets/linkdin.png';
import youtube from '../assets/youtube.png';

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

			<div className={styles.pages}>
				<p>
					{' '}
					<a href='/'>Home</a>
				</p>
				<p onClick={() => scrollToSection('what-we-do-section')}>What We Do</p>
				<p onClick={() => scrollToSection('team')}>Team</p>
				<p>Projects</p>
				<p onClick={() => scrollToSection('gallery')}>Gallery</p>
				<p>
					{' '}
					<a
						href='https://docs.google.com/forms/d/e/1FAIpQLScWm4TeqOOx31VfIUUcC6-2yRZibfH-Mm6SncgnMZ5hijq29w/viewform?vc=0&c=0&w=1&flr=0'
						target='_blank'
					>
						Join Us
					</a>
				</p>
				<p onClick={() => scrollToSection('contact-section')}>Contact Us</p>
			</div>

			<div className={styles.social}>
				<a href='https://twitter.com/graminyouth_ngo' target='_blank'>
					<img src='https://about.twitter.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png' alt='X' />
				</a>
				<a href='https://www.instagram.com/graminyouth_ngo/' target='_blank'>
					<img src={insta} alt='Insta' />
				</a>
				<a href='https://www.linkedin.com/in/gramin-youth-foundation-267453262/' target='_blank'>
					<img src={linkdin} alt='' />
				</a>
				<a href='https://www.youtube.com/@graminyouthtv' target='_blank'>
					<img style={{ height: '35px' }} src={youtube} alt='' />
				</a>
			</div>

			<p className={styles.donate} onClick={() => scrollToSection('donate-section')}>
				Support Us
			</p>
		</div>
	);
};

export default Nav;
