import React from 'react';
import styles from './styles/carousel.module.css';
import splide1 from './assets/splide1.jpg';
import splide2 from './assets/splide2.jpg';
import splide3 from './assets/splide3.jpg';
import splide4 from './assets/splide4.jpg';

// Define an array of images
const images = [splide1, splide2, splide3, splide4, splide1, splide3];

const Carousel = () => {
	return (
		<div className={styles.carouselContainer}>
			<div className={styles.carousel}>
				{images.map((image, index) => (
					<img key={index} src={image} alt={`Image ${index + 1}`} className={styles.carouselImage} />
				))}
			</div>
		</div>
	);
};

export default Carousel;
