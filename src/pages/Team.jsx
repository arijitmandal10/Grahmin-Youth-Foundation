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
import d6 from './assets/d6.jpg';
import d7 from './assets/d7.jpg';
import d8 from './assets/d8.jpg';
import d9 from './assets/d9.jpg';
import d10 from './assets/d10.jpg';
import v1 from './assets/v1.jpg';
import v2 from './assets/v2.jpg';
import v3 from './assets/v3.jpg';
import v4 from './assets/v4.jpg';
import v6 from './assets/v6.jpg';
import v5 from './assets/v5.jpg';
import v7 from './assets/v7.jpg';
import v8 from './assets/v8.jpg';
import v9 from './assets/v9.jpg';
import vs1 from './assets/vs1.jpg';
import vs3 from './assets/vs3.png';

const Team = () => {
	return (
		<div className={styles.team}>
			<div className={styles.box}>
				<h2>Board of Trustee</h2>
				<div className={styles.members}>
					<div>
						<img src={bt1} alt='' />
						<p>
							Nadeem Akhtar <br />
							<i>(Founder and Chairperson)</i>
						</p>
					</div>
					<div>
						<img src={bt2} alt='' />
						<p>
							Prapulla Kumar
							<br />
							<i>(Vice-Chairperson)</i>
						</p>
					</div>
					<div>
						<img src={bt3} alt='' />
						<p>
							Md Aquilur Rahman <br />
							<i>(Secretary)</i>
						</p>
					</div>
					<div>
						<img src={bt4} alt='' />
						<p>
							Rashi Pareek <br />
							<i>(Treasurer)</i>
						</p>
					</div>
				</div>
			</div>

			<div className={styles.box}>
				<h2>Board of Directors</h2>
				<div className={styles.members}>
					<div>
						<img src={d1} alt='' />
						<p>Shahrukh Khan </p>
					</div>
					<div>
						<img src={d6} alt='' />
						<p>Sandesh B </p>
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
					<div>
						<img src={d7} alt='' />
						<p>Rohit Reddy </p>
					</div>
					<div>
						<img src={d8} alt='' />
						<p>Udit Guleria</p>
					</div>
					<div>
						<img src={d9} alt='' />
						<p>Ankit Singh </p>
					</div>
					<div>
						<img src={d10} alt='' />
						<p>Nishant Kumar </p>
					</div>
				</div>
			</div>
			<div className={styles.box}>
				<h2>Volunteers</h2>
				<div className={styles.members}>
					<div>
						<img src={v1} alt='' />
						<p>Jyotirmoy Kalita</p>
					</div>
					<div>
						<img src={v2} alt='' />
						<p>Harprit Singh Chawla</p>
					</div>
					<div>
						<img src={v3} alt='' />
						<p>Sai Kumar</p>
					</div>
					<div>
						<img src={v4} alt='' />
						<p>Azharuddin</p>
					</div>{' '}
					<div>
						<img src={v5} alt='' />
						<p>Iqbal Hussain</p>
					</div>{' '}
					<div>
						<img src={v7} alt='' />
						<p>Lawrence Engti</p>
					</div>{' '}
					<div>
						<img src={v8} alt='' />
						<p>Saumya Desai</p>
					</div>{' '}
					<div>
						<img src={v6} alt='' />
						<p>Anurag Singh</p>
					</div>{' '}
					<div>
						<img src={vs1} alt='' />
						<p>Arijit Mandal</p>
					</div>{' '}
					<div>
						<img src={vs3} alt='' />
						<p>Deep Narayan Sharma</p>
					</div>
					<div>
						<img src={v9} alt='' />
						<p>Nisit Kumar</p>
					</div>
				</div>
			</div>
			<div className={styles.box}>
				{/* <h2>Volunteers</h2> */}
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
