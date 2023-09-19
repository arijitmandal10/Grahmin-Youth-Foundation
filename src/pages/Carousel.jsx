import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import styles from './styles/carousel.module.css';
import splide1 from './assets/splide1.jpg';
import splide2 from './assets/splide2.jpg';
import splide3 from './assets/splide3.jpg';
import splide4 from './assets/splide4.jpg';
import splide5 from './assets/splide5.jpg';

// Define an array of images
const images1 = [splide1, splide2, splide3, splide4, splide5];
const images2 = [splide1, splide2, splide3, splide4, splide5];
const MyCarousel = () => {
	return (
		<div className={styles.carouselContainer}>
			<div className={styles.carousel}>
				{images1.map((image, index) => (
					<img key={index} src={image} alt={`Image ${index + 1}`} className={styles.carouselImage} />
				))}
			</div>

			<div className={styles.carousel2}>
				{' '}
				<Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={2000} showThumbs={false}>
					{images2.map((image, index) => (
						<div key={index}>
							<img
								style={{
									height: '40em',
									width: '80%',
									borderRadius: '40px',
									boxShadow: 'black 2px 4px 10px 1px',
									marginBottom: '10px',
								}}
								src={image}
								alt={`Image ${index + 1}`}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default MyCarousel;
