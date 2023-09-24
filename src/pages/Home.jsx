import React from 'react';
import styles from './styles/home.module.css';
import MyCarousel from './Carousel';

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
			</div>

			{/* MID SECTION */}
			<div className={styles.mid}>
				{' '}
				<h1>About Us</h1>
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

			{/* Splide Section */}
			<MyCarousel />

			{/* WHAT WE DO */}
			<div id='what-we-do-section' className={styles.bottom}>
				<h1>WHAT WE DO</h1>
				<div className={styles.hr} style={{ background: 'red', width: '10%' }}></div>

				<div className={styles.bottomcontainer}>
					<div>
						{' '}
						<h2>📖 Education Access</h2>
						<p>
							We believe that education is the cornerstone of empowerment. Our initiatives focus on ensuring that every young
							person has access to quality education.
						</p>
					</div>
					<div>
						{' '}
						<h2>🥇 Skills Development</h2>
						<p>
							We offer a range of skill-building workshops and training programs, equipping young individuals with the practical
							skills they need to excel in various fields.
						</p>
					</div>

					<div>
						{' '}
						<h2>🫴 Entrepreneurship Support</h2>
						<p>
							We foster an entrepreneurial spirit among the youth, providing mentorship, seed funding, and resources to help turn
							innovative ideas into successful ventures.
						</p>
					</div>
					<div>
						{' '}
						<h2>🏃‍♂️ Career Counseling</h2>
						<p>
							We believe in providing comprehensive support to ensure your success in the job market and take the next step in
							your career journey.
						</p>
					</div>
					<div>
						{' '}
						<h2>🌐 Networking Opportunities​</h2>
						<p>
							Connect with industry professionals, potential employers, and fellow job seekers through our networking events and
							workshops.
						</p>
					</div>
					<div>
						{' '}
						<h2>📌 Leadership Development​</h2>{' '}
						<p>
							Through leadership training, mentorship programs, and community involvement, we nurture the next generation of
							confident and capable leaders.
						</p>
					</div>
				</div>
			</div>

			{/* Impact Stories */}

			<div className={styles.stories}>
				<h1> Volunteer Speak</h1>
				<div className={styles.hr} style={{ background: 'red', width: '10%', marginBottom: '10px' }}></div>
				<div className={styles.storiesContent}>
					<div>
						<h3>
							<p>🍃</p>
							Jane’s Been A Migrant Worker Since She Was 12
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco nisi reprehenderit in voluptate.
						</p>
					</div>
					<div>
						<h3>
							<p>🍃</p>A Brighter Future — For Cambodia’s Children​
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco nisi reprehenderit in voluptate.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
