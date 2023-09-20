import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useInView } from 'react-intersection-observer';

import styles from './styles/home.module.css';
import MyCarousel from './Carousel';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	const [ref, inView] = useInView({
		triggerOnce: true, // Only trigger once when the section comes into view
		threshold: 0.1, // You can adjust the threshold as needed
	});

	const fadeInRef = useRef(null);

	useEffect(() => {
		if (inView) {
			// When the section comes into view, add the fadeIn class to trigger the animation
			fadeInRef.current.classList.add(styles.fadeIn);
		}
	}, [inView]);
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
					<p ref={fadeInRef}>
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
						<h2>We Find & Fund</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna
							aliqua ut enim ad minim veniam, quis nostrud.
						</p>
					</div>
					<div>
						{' '}
						<h2>We Build Networks</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna
							aliqua ut enim ad minim veniam, quis nostrud.
						</p>
					</div>
					<div>
						{' '}
						<h2> We Strengthen</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna
							aliqua ut enim ad minim veniam, quis nostrud.
						</p>
					</div>
					<div>
						{' '}
						<h2>We Educate​</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna
							aliqua ut enim ad minim veniam, quis nostrud.
						</p>
					</div>
					<div>
						{' '}
						<h2>We Provide Care​</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna
							aliqua ut enim ad minim veniam, quis nostrud.
						</p>
					</div>
					<div>
						{' '}
						<h2>We Consult​</h2>{' '}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna
							aliqua ut enim ad minim veniam, quis nostrud.
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
							<h1>🍃</h1>
							Jane’s Been A Migrant Worker Since She Was 12
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco nisi reprehenderit in voluptate.
						</p>
					</div>
					<div>
						<h3>
							<h1>🍃</h1>A Brighter Future — For Cambodia’s Children​
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
