import React from 'react';
import styles from './nav.module.css';
import logo from '../assets/logo.png';
import insta from '../assets/insta.png';
import linkdin from '../assets/linkdin.png';
import youtube from '../assets/youtube.png';
import MyDrawer from './MyDrawer';
import useMediaQuery from '@mui/material/useMediaQuery'; // Import the useMediaQuery hook from Material-UI

const Nav = () => {
	const navItems = [
		{ text: 'Home', target: 'nav' },
		{ text: 'About Us', target: 'about-us' },
		{ text: 'Team', target: 'team' },
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
			icon: 'https://about.twitter.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png',
		},
		{
			text: 'Instagram',
			url: 'https://www.instagram.com/graminyouth_ngo/',
			icon: insta, // Assuming 'insta' is the import for the Instagram icon
		},
		{
			text: 'LinkedIn',
			url: 'https://www.linkedin.com/in/gramin-youth-foundation-267453262/',
			icon: linkdin, // Assuming 'linkdin' is the import for the LinkedIn icon
		},
		{
			text: 'YouTube',
			url: 'https://www.youtube.com/@graminyouthtv',
			icon: youtube, // Assuming 'youtube' is the import for the YouTube icon
		},
	];

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};
	const isSmallScreen = useMediaQuery('(max-width:765px)');

	return (
		<div className={styles.nav} id='nav'>
			<div style={{ alignSelf: 'center' }}>
				{isSmallScreen && <MyDrawer navItems={navItems} scrollToSection={scrollToSection} socialMediaLinks={socialMediaLinks} />}
			</div>
			<div>
				<img src={logo} alt='' className={styles.logo} />
			</div>
			<div className={styles.pages}>
				<p>
					{' '}
					<a href='/'>Home</a>
				</p>
				<p onClick={() => scrollToSection('about-us')}>About Us</p>
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
