import React from 'react';
import styles from './nav.module.css';
import logo from '../assets/logo.png';

const Nav = () => {
	return (
		<div className={styles.nav}>
			<div>
				<img src={logo} alt='' className={styles.logo} />
			</div>
			<div className={styles.navitems}>
				<p>Home</p>
				<p>What We Do</p>
				<p>Our Partners</p>
				<p>Contact Us</p>
				<p className={styles.donate}>Donate</p>
			</div>
		</div>
	);
};

export default Nav;
