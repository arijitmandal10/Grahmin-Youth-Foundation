import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			{' '}
			<div className={styles.footer}>
				<div>
					<h2>Support Us</h2>
					<div className={styles.hr}></div>
					<h3>Support Us and Change the Course of a Child’s Life Today!</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
						leo.
					</p>
					<p className={styles.donate}>Donate</p>
				</div>
			</div>
			<div className={styles.cr}>
				{' '}
				<p>Copyright © 2023 graminyouth.org.in</p> <p>Powered by graminyouth.org.in</p>
			</div>
		</div>
	);
};

export default Footer;
