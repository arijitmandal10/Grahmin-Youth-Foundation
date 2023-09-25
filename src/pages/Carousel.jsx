import React, { useEffect, useState } from 'react';
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
import splide9 from './assets/splide9.jpg';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

// Define an array of images
const images1 = [splide1, splide9, splide3, splide4, splide5, splide7, splide8];
const images = [
	[splide1, splide2],
	[splide3, splide4],
	[splide5, splide6],
	[splide7, splide8],
];
const MyCarousel = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 768);
		};

		handleResize(); // Set the initial screen size
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={styles.carouselContainer}>
			<div className={styles.team}>
				<div id='team' className='heading' style={{ marginBottom: '0px' }}>
					<Diversity2Icon style={{ fontSize: '40px' }} /> Team
				</div>
				<div className='hr' style={{ background: 'red' }}></div>
			</div>

			<div className={styles.carousel2} id='gallery'>
				<div className='heading'>
					<PhotoCameraIcon style={{ fontSize: '40px' }} /> Gallery
				</div>
				<div className='hr'></div>
				<Carousel
					className={styles.carouselmain}
					showArrows={false}
					infiniteLoop={true}
					autoPlay={true}
					interval={2000}
					showThumbs={false}
				>
					{images.map((pair, index) => (
						<div key={index} className={styles.imagePair}>
							{pair.map((image, subIndex) => (
								<div key={subIndex} className={styles.imageContainer}>
									<img
										style={{
											height: window.innerWidth <= 768 ? '20vh' : '80vh',
											width: window.innerWidth <= 768 ? '180px' : '800px',
											paddingBottom: '20px',
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

				{isSmallScreen && (
					<Carousel showArrows={false} infiniteLoop={true} autoPlay={true} interval={2000} showThumbs={false}>
						{images1.map((image, index) => (
							<div key={index} className={styles.imageContainer}>
								<img
									style={{
										borderRadius: '10px',
										height: '30vh', // Set a fixed height for small screens
										width: '100%`', // Set a fixed width for small screens
										marginBottom: '10px',
									}}
									src={image}
									alt={`Image ${index + 1}`}
								/>
							</div>
						))}
					</Carousel>
				)}
			</div>

			{/* Create a carousel mapping images1 for small screen devices */}
		</div>
	);
};

export default MyCarousel;
