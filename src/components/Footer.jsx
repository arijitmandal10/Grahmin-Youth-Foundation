import React from 'react';
import styles from './footer.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)');
	return (
		<div className={styles.container}>
			{' '}
			<div className={styles.footer}>
				<div id='donate-section'>
					<h2>Support Us</h2>
					<div className={styles.hr}></div>
					<h3>Support us in nurturing future leaders!</h3>
					<p>
						Your contribution is an investment in a brighter future, not only for the individuals we serve, but for our community
						and society as a whole.
					</p>
					<p className={styles.donate}> Contribute</p>
				</div>
			</div>
			<div id='contact-section' className={styles.contact}>
				{/* <div className='heading'>Contact Us</div> */}
				{/* <div className='hr' style={{ background: 'red', marginBottom: '10px' }}></div> */}
				<div className={styles.details}>
					<form action={import.meta.env.VITE_API_URL} method='post'>
						<input type='text' name='Name' placeholder='Enter your name' required />
						<input type='email' name='Email' placeholder='Enter your email' required />
						<textarea name='Message' id='' cols='30' rows='5' placeholder='feedback'></textarea>
						<button>Send Message</button>
					</form>

					<div className={styles.address}>
						<div>
							{/* <h4>🌐 Get In touch</h4> */}
							<p>
								Thank you for visiting our page! If you have any questions or would like to get in touch with us, please don’t
								hesitate to reach out. You can contact us by email at{' '}
								<a style={{ color: 'rgb(255 73 73)' }} href='mailto:graminyouth.org@gmail.com'>
									📧 graminyouth.org@gmail.com
								</a>{' '}
								&nbsp; , by phone, or by filling out the contact form. We look forward to hearing from you!
							</p>
							<h3>🏢 Contact Us</h3>
							<p>
								<b>Registered Office </b>: Sobhan, Shankarpur, Darbhanga, Bihar PIN- 846005 <br />
								<br />
								<b>Bangalore Office</b> : No. 10, MRJ Colony, Near Om Shakti Temple, Mathikere, Bangalore-560054
							</p>
							<p>☎️ 9632904382</p>
							<a style={{ color: 'rgb(255 73 73)', fontSize: 'smaller' }} href='mailto:graminyouth.org@gmail.com'>
								📧 graminyouth.org@gmail.com
							</a>{' '}
							<br />
							<br />
							<div className={isSmallScreen ? 'visible-on-small' : 'hidden-on-small'}>
								<h3>📝 Write to us</h3>
							</div>
						</div>
					</div>
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
