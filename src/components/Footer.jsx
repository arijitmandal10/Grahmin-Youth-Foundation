import React from 'react';
import styles from './footer.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import insta from '../assets/insta.png';
import linkdin from '../assets/linkdin.png';
import youtube from '../assets/youtube.png';
import BusinessIcon from '@mui/icons-material/Business';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import logo from '../assets/logo.png';
const Footer = () => {
	const isSmallScreen = useMediaQuery('(max-width: 768px)');
	return (
		<div className={styles.container}>
			{' '}
			<div className={styles.footer}>
				<div id='donate-section'>
					<h2>
						<VolunteerActivismIcon style={{ fontSize: '40px', marginBottom: '-3px' }} />
						&nbsp;Support Us
					</h2>
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
					<div>
						{' '}
						<img src={logo} className={styles.logo} alt='' />
						<form action={import.meta.env.VITE_API_URL} method='post'>
							<input type='text' name='Name' placeholder='Enter your name' required />
							<input type='email' name='Email' placeholder='Enter your email' required />
							<textarea name='Message' id='' cols='30' rows='5' placeholder='feedback'></textarea>
							<button>Send Message</button>
						</form>
					</div>

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
							<h2 style={{ textAlign: 'center' }}>
								{' '}
								<BusinessIcon /> Contact Us
							</h2>
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
							<h2 style={{ textAlign: 'center' }}>
								<BookmarkIcon /> Follow Us
							</h2>
							<div className={styles.social}>
								<a href='https://twitter.com/graminyouth_ngo' target='_blank'>
									<img
										src='https://about.twitter.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png'
										alt='X'
									/>
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
							</div>{' '}
							<br />
							<br />
							<div className={isSmallScreen ? 'visible-on-small' : 'hidden-on-small'}>
								<h2 style={{ width: '100%', textAlign: 'center', borderTop: '3px solid' }}>✒️ Write to us</h2>
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
