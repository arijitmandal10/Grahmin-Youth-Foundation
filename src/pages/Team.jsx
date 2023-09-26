import React from 'react';
import styles from './styles/team.module.css';
import bt1 from './assets/bt1.jpg';
import bt2 from './assets/bt2.jpg';
import bt3 from './assets/bt3.jpg';
import bt4 from './assets/bt4.jpg';
import d1 from './assets/d1.jpg';
import d2 from './assets/d2.jpg';
import d3 from './assets/d3.jpg';
import d4 from './assets/d4.jpg';
import d5 from './assets/d5.jpg';

const Team = () => {
	return (
		<div className={styles.team}>
			<div className={styles.box}>
				<h2>Board of Trustees</h2>
				<div className={styles.members}>
					<div>
						<img src={bt1} alt='' />
						<p>Nadeem Akhter</p>
					</div>
					<div>
						<img src={bt2} alt='' />
						<p>Prapulla Kumar</p>
					</div>
					<div>
						<img src={bt3} alt='' />
						<p>Md Aquilur Rahman</p>
					</div>
					<div>
						<img src={bt4} alt='' />
						<p>Rashi Pareek</p>
					</div>
				</div>
			</div>

			<div className={styles.box}>
				<h2>Directors</h2>
				<div className={styles.members}>
					<div>
						<img src={d1} alt='' />
						<p>Shahrukh Khan </p>
					</div>
					<div>
						<img src={d2} alt='' />
						<p>Medari Venkatesh</p>
					</div>
					<div>
						<img src={d3} alt='' />
						<p>Nadir Khan</p>
					</div>
					<div>
						<img src={d4} alt='' />
						<p>Vidhi Pareek</p>
					</div>
					<div>
						<img src={d5} alt='' />
						<p>Safee Uzzama </p>
					</div>
				</div>
			</div>
			<div className={styles.box}>
				<h2>Advisory Board</h2>
				<div className={styles.members}>
					<div>
						<img src='' alt='' />
						<p></p>
					</div>
					<div>
						<img src='' alt='' />
						<p></p>
					</div>
					<div>
						<img src='' alt='' />
						<p></p>
					</div>
					<div>
						<img src='' alt='' />
						<p></p>
					</div>
				</div>
			</div>
			<div className={styles.box}>
				<h2>Volunteers</h2>
				<div className={styles.members}>
					<div>
						<img src='' alt='' />
						<p></p>
					</div>
					<div>
						<img src='' alt='' />
						<p></p>
					</div>
					<div>
						<img src='' alt='' />
						<p></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
