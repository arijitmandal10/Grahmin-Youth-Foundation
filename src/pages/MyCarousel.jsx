import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

import splide1 from './assets/splide1.jpg';
import splide2 from './assets/splide2.jpg';
import splide3 from './assets/splide3.jpg';
import splide4 from './assets/splide4.jpg';
import splide5 from './assets/splide5.jpg';

// Define an array of images
const images = [splide1, splide2, splide3, splide4, splide5];

const MyCarousel = () => {
	return (
		<Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={2000} showThumbs={false}>
			{images.map((image, index) => (
				<div key={index}>
					<img style={{ height: '40em', width: '80%' }} src={image} alt={`Image ${index + 1}`} />
				</div>
			))}
		</Carousel>
	);
};

export default MyCarousel;
