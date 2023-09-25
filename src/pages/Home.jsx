import React from 'react';
import styles from './styles/home.module.css';
import MyCarousel from './Carousel';
import splide7 from './assets/splide7.jpg';
import vs3 from './assets/vs3.png';
import vs1 from './assets/vs1.jpg';
import HubIcon from '@mui/icons-material/Hub';
import SchoolIcon from '@mui/icons-material/School';
import Groups3Icon from '@mui/icons-material/Groups3';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HandymanIcon from '@mui/icons-material/Handyman';
import BadgeIcon from '@mui/icons-material/Badge';
const Home = () => {
	return (
		<div>
			{/* Top section */}
			<div id='home-section' className={styles.main}>
				<div>
					<h3>Empowering Youth And Spreading Hope</h3>
					<div className={styles.hr}></div>
					<h1>WHERE ALL YOUTH ARE SAFE, STRONG & VALUED</h1>
				</div>

				<img src={splide7} alt='' />
			</div>

			{/* MID SECTION */}
			<div className={styles.mid}>
				{' '}
				<h1 id='about-us'>About Us</h1>
				<div className={styles.hr} style={{ width: '10%', background: 'red' }}></div>
				<div>
					<p>
						Gramin youth foundation is a non-profit youth led organisation working for the upliftment of rural youth. We work
						towards empowering them with skills and knowledge so that they can lead a better life. <br /> <br />
						The organisation was started in 2020 with a small team of dedicated individuals who were passionate about making a
						difference in the lives of rural youth. We have since then grown by leaps and bounds, reaching out to more and more
						rural youth across India. We offer training and support in area such as leadership, entrepreneurship and life skills, so
						that they can confidently take on the challenges of the world and create a brighter future for all. <br />
						<br />
						We strongly believe that every individual has the potential to succeed if given the right opportunity and platform. Our
						goal is to provide rural youth with the necessary skills and education so that they can lead a better life.
					</p>
					<div className={styles.image}>
						{/* <img src={homeimg3} alt='' />
						<img src={homeimg4} alt='' /> */}
					</div>
				</div>
			</div>
			{/* WHAT WE DO */}
			<div id='what-we-do-section' className={styles.bottom}>
				<h1>WHAT WE DO</h1>
				<div className={styles.hr} style={{ background: 'red', width: '10%' }}></div>

				<div className={styles.bottomcontainer}>
					<div>
						{' '}
						<h2>
							<AutoStoriesIcon /> &nbsp; Education Access
						</h2>
						<p>
							We believe that education is the cornerstone of empowerment. Our initiatives focus on ensuring that every young
							person has access to quality education.
						</p>
					</div>
					<div>
						{' '}
						<h2>
							<HandymanIcon />
							&nbsp; Skills Development
						</h2>
						<p>
							We offer a range of skill-building workshops and training programs, equipping young individuals with the practical
							skills they need to excel in various fields.
						</p>
					</div>

					<div>
						{' '}
						<h2>
							<BadgeIcon /> &nbsp; Entrepreneurship Support
						</h2>
						<p>
							We foster an entrepreneurial spirit among the youth, providing mentorship, seed funding, and resources to help turn
							innovative ideas into successful ventures.
						</p>
					</div>
					<div>
						{' '}
						<h2>
							<SchoolIcon /> &nbsp;Career Counseling
						</h2>
						<p>
							We believe in providing comprehensive support to ensure your success in the job market and take the next step in
							your career journey.
						</p>
					</div>
					<div>
						{' '}
						<h2>
							{' '}
							<HubIcon /> &nbsp; Networking Opportunities​
						</h2>
						<p>
							Connect with industry professionals, potential employers, and fellow job seekers through our networking events and
							workshops.
						</p>
					</div>
					<div>
						{' '}
						<h2>
							<Groups3Icon /> &nbsp; Leadership Development​
						</h2>{' '}
						<p>
							Through leadership training, mentorship programs, and community involvement, we nurture the next generation of
							confident and capable leaders.
						</p>
					</div>
				</div>
			</div>

			{/* Splide Section */}
			<MyCarousel />

			{/* Impact Stories */}

			<div className={styles.stories}>
				<h1> Volunteer Speak</h1>
				<div className={styles.hr} style={{ background: 'red', width: '10%', marginBottom: '37px' }}></div>
				<div className={styles.storiesContent}>
					<div>
						<img src={vs1} alt='' />
						<p>
							Interning as a front-end developer at GYF was an incredible experience. I had the opportunity to work on projects
							that directly contributed to the Organization's mission. From redesigning the website for better user experience to
							implementing interactive features, every task felt purposeful. <br />
							<br /> This internship not only honed my technical skills but also taught me the power of technology in driving
							positive change.
						</p>
						<h5>
							Arjit Mandal <br />
							BCA batch- 2018-2021 <br />
							Ramaiah College of Arts, Science & Commerce{' '}
						</h5>
					</div>
					<div>
						<img src='' alt='image' />{' '}
						<p>
							Volunteering with GYF has been a life-changing experience. The sense of fulfillment I get from contributing to
							their initiatives is immeasurable. From participating in community outreach programs to assisting with fundraising
							events, every moment has been meaningful. <br />
							<br />
							The warmth and gratitude I receive from those we help is truly humbling. Gramin Youth Foundation is an organization
							that embodies compassion, and I am grateful to be a part of their mission.
						</p>
						<h5>
							Nochetlong Tzudir <br />
							M.A (History) Batch-2022-24 <br />
							Amity University, UP
						</h5>
					</div>
					<div>
						<img src={vs3} alt='' />

						<p>
							Being part of the cricket match organizing team at GYF was an exhilarating experience. From setting up the pitch to
							coordinating teams and ensuring a smooth event, every moment was filled with excitement. <br />
							<br /> GYF not only promotes the sport but also uses it as a platform for community engagement. I'm grateful for
							the opportunity to be a part of such an impactful initiative.
						</p>
						<h5>
							Deep Narayan Sharma <br />
							Software Engineer at Donyati
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
