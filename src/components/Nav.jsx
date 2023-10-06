import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './nav.module.css';
import logo from '../assets/logo.png';
import insta from '../assets/insta.png';
import linkdin from '../assets/linkdin.png';
import youtube from '../assets/youtube.png';
import X from '../assets/X.png';
import MyDrawer from './MyDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';

const Nav = () => {
	const navItems = [
		{ text: 'Home', target: '/' },
		{ text: 'About Us', target: 'about-us' },
		{ text: 'Our Team', target: '/team' },
		{ text: 'Projects', target: '/projects' },
		{
			text: 'Join Us',
			target: 'https://docs.google.com/forms/d/e/1FAIpQLScWm4TeqOOx31VfIUUcC6-2yRZibfH-Mm6SncgnMZ5hijq29w/viewform?vc=0&c=0&w=1&flr=0',
			isExternal: true,
		},
		{ text: 'Gallery', target: 'gallery' },
		{ text: 'Contact us', target: 'contact-section' },
	];

	const socialMediaLinks = [
		{
			text: 'Twitter',
			url: 'https://twitter.com/graminyouth_ngo',
			icon: X,
		},
		{
			text: 'Instagram',
			url: 'https://www.instagram.com/graminyouth_ngo/',
			icon: insta,
		},
		{
			text: 'LinkedIn',
			url: 'https://www.linkedin.com/in/gramin-youth-foundation-267453262/',
			icon: linkdin,
		},
		{
			text: 'YouTube',
			url: 'https://www.youtube.com/@graminyouthtv',
			icon: youtube,
		},
	];

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const isSmallScreen = useMediaQuery('(max-width:765px)');
	const location = useLocation();
	const isTeamPage = location.pathname === '/team';

	return (
		<div className={styles.nav} id='nav'>
			<div style={{ alignSelf: 'center' }}>
				{isSmallScreen && <MyDrawer navItems={navItems} scrollToSection={scrollToSection} socialMediaLinks={socialMediaLinks} />}
			</div>
			<div>
				<Link to='/'>
					<img src={logo} alt='' className={styles.logo} />
				</Link>
			</div>
			<div className={styles.pages}>
				{!isTeamPage && <p onClick={() => scrollToSection('about-us')}>About Us</p>}
				{!isTeamPage && (
					<p>
						<Link to='/team'>Our Team</Link>
					</p>
				)}
				{!isTeamPage && <p>Projects</p>}
				{!isTeamPage && <p onClick={() => scrollToSection('gallery')}>Gallery</p>}
				<p>
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
				{socialMediaLinks.map((link, index) => (
					<a key={index} href={link.url} target='_blank'>
						<img src={link.icon} alt={link.text} />
					</a>
				))}
			</div>
			<p className={styles.donate} onClick={() => scrollToSection('donate-section')}>
				Support Us
			</p>
		</div>
	);
};

export default Nav;
