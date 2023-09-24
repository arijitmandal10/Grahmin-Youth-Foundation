import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import styles from './styles/carousel.module.css';
import splide1 from './assets/splide1.jpg';
import splide2 from './assets/splide2.jpg';
import splide3 from './assets/splide3.jpg';
import splide6 from './assets/splide4.jpg';
import splide5 from './assets/splide5.jpg';
import splide4 from './assets/splide4.jpg';
import splide7 from './assets/splide7.jpg';
import splide8 from './assets/splide8.jpg';

// Define an array of images
const images1 = [splide1, splide2, splide3, splide4, splide5];
const images = [
	[splide1, splide2],
	[splide3, splide4],
	[splide5, splide6],
	[splide7, splide8],
];
const MyCarousel = () => {
	return (
		<div className={styles.carouselContainer}>
			<div className={styles.carousel}>
				{images1.map((image, index) => (
					<img key={index} src={image} alt={`Image ${index + 1}`} className={styles.carouselImage} />
				))}
			</div>

			<div className={styles.team}>
				<div id='team' className='heading' style={{ marginBottom: '0px' }}>
					Team
				</div>
				<div className='hr' style={{ background: 'red' }}></div>
				<div></div>
			</div>

			<div className={styles.carousel2} id='gallery'>
				<div className='heading'>Gallery</div>
				<div className='hr'></div>
				<Carousel showArrows={false} infiniteLoop={true} autoPlay={true} interval={2000} showThumbs={false}>
					{images.map((pair, index) => (
						<div key={index} className={styles.imagePair}>
							{pair.map((image, subIndex) => (
								<div key={subIndex} className={styles.imageContainer}>
									<img
										style={{
											borderRadius: '10px',
											height: window.innerWidth <= 768 ? '20vh' : '80vh', // Change height for small screens
											width: window.innerWidth <= 768 ? '180px' : '750px', // Change width for small screens
											marginBottom: '10px',
										}}
										src={image}
										alt={`Image ${index + 1}-${subIndex + 1}`}
									/>
								</div>
							))}
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default MyCarousel;
