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
				<p>Home</p>
				<p onClick={() => scrollToSection('what-we-do-section')}>What We Do</p>
				<p>Team</p>
				<p>Projects</p>
				<p>Media</p>
				<p>
					{' '}
					<a href='https://docs.google.com/forms/d/e/1FAIpQLSfoC4CUchliaF8jNuEDxFhfSLdxofYEqqijrAVAqboBsSVasg/viewform?vc=0&c=0&w=1&flr=0'>
						Join Us
					</a>
				</p>
				<p>Contact Us</p>
			</div>

			<div className={styles.social}>
				<a href=''>
					<img src='https://about.twitter.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png' alt='X' />
				</a>
				<a href=''>
					<img src={insta} alt='Insta' />
				</a>
				<a href=''>
					<img src={linkdin} alt='' />
				</a>
				<a href=''>
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
