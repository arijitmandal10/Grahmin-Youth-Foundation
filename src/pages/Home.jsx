import React from 'react';
import homeimg3 from './assets/home-image-03.jpg';
import homeimg4 from './assets/home-image-04.jpg';
import styles from './styles/home.module.css';
import Carousel from './Carousel';
import MyCarousel from './MyCarousel';

const Home = () => {
	return (
		<div>
			{/* Top section */}
			<div className={styles.main}>
				<div>
					<h3>Because Only Together We Can</h3>
					<div className={styles.hr}></div>
					<h1>BUILD A WORLD WHERE ALL YOUTH ARE SAFE, STRONG & VALUED</h1>
				</div>
			</div>

			{/* MID SECTION */}
			<div className={styles.mid}>
				{' '}
				<h1>WHO WE ARE</h1>
				<div className={styles.hr} style={{ width: '10%', background: '60ff60' }}></div>
				<div>
					<p>
						Partnering to build a world where all children are lorem ipsum dolor sit amet, consectetur. <br />
						<br />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
						aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
						<br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
					</p>
					<div className={styles.image}>
						<img src={homeimg3} alt='' />
						<img src={homeimg4} alt='' />
					</div>
				</div>
			</div>

			{/* Splide Section */}
			<Carousel />
			<MyCarousel />
		</div>
	);
};

export default Home;
