import React from 'react';
import styles from './styles/team.module.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GavelIcon from '@mui/icons-material/Gavel';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

// Import images
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
import d11 from './assets/d11.jpg';
import d12 from './assets/d12.jpg';
import v1 from './assets/v1.jpg';
import v2 from './assets/v2.jpg';
import v3 from './assets/v3.jpg';
import v4 from './assets/v4.jpg';
import v5 from './assets/v5.jpg';
import v6 from './assets/v6.jpg';
import v7 from './assets/v7.jpg';
import v8 from './assets/v8.jpg';
import v9 from './assets/v9.jpg';
import v99 from './assets/v99.jpg';
import v11 from './assets/v11.jpg';
import v12 from './assets/v12.jpg';
import v13 from './assets/v13.jpg';
import v14 from './assets/v14.jpg';
import v15 from './assets/v15.jpg';
import vs1 from './assets/vs1.jpg';
import vs3 from './assets/vs3.png';

const teamMembers = {
	boardOfTrustee: [
		{ name: 'Nadeem Akhtar', role: 'Founder and Chairperson', image: bt1 },
		{ name: 'Prapulla Kumar', role: 'Vice-Chairperson', image: bt2 },
		{ name: 'Md Aquilur Rahman', role: 'Secretary', image: bt3 },
		{ name: 'Rashi Pareek', role: 'Treasurer', image: bt4 },
	],
	boardOfDirectors: [
		{ name: 'Udit Guleria', role: 'Program Manager', image: d8 },
		{ name: 'Shahrukh Khan', role: 'Partnerships and collaboration manager', image: d1 },
		{ name: 'Sandesh B', role: 'Career Guidance Counsellor', image: d6 },
		{ name: 'Medari Venkatesh', role: 'Data and Research Analyst', image: d2 },
		{ name: 'Nadir Khan', role: 'Fundraising and development officer', image: d3 },
		{ name: 'Vidhi Pareek', role: 'Social Media Head', image: d4 },
		{ name: 'Arijit Mandal', role: 'UI Developer', image: vs1 },
		{ name: 'Md Saquib Raza', role: 'Placement Coordinator', image: d11 },
		{ name: 'Safee Uzzama', role: 'Education and Training Coordinator', image: d5 },
		{ name: 'Rohit Reddy', role: 'Event and Workshop Coordinator', image: d7 },
		{ name: 'Nishant Kumar', role: 'Technology and Innovation Director', image: d10 },
		{ name: 'Bibhudutta Bhoi', role: 'Content Writer', image: d12 },
	],
	volunteers: [
		{ name: 'Jyotirmoy Kalita', image: v1 },
		{ name: 'Harprit Singh Chawla', image: v2 },
		{ name: 'Sai Kumar', image: v3 },
		{ name: 'Azharuddin', image: v4 },
		{ name: 'Ankit Singh', image: d9 },
		{ name: 'Iqbal Hussain', image: v5 },
		{ name: 'Lawrence Engti', image: v7 },
		{ name: 'Ankit Srivastava', image: v99 },
		{ name: 'Saumya Desai', image: v8 },
		{ name: 'Shailendra Singh', image: v11 },
		{ name: 'Junaid Ali', image: v12 },
		{ name: 'Anurag Singh', image: v6 },
		{ name: 'Manjit Yadav', image: v13 },
		{ name: 'Anupam Mishra', image: v14 },
		{ name: 'Rishabh', image: v15 },
		{ name: 'Deep Narayan Sharma', image: vs3 },
		{ name: 'Nisit Kumar', image: v9 },
	],
};

const Team = () => {
	return (
		<div className={styles.team}>
			<div className={styles.box}>
				<h2>
					<GavelIcon style={{ fontSize: 'xx-large', marginRight: '10px', marginBottom: '-2px' }} />
					&nbsp;Board of Trustee
				</h2>
				<div className={styles.members}>
					{teamMembers.boardOfTrustee.map((member, index) => (
						<div key={index}>
							<img src={member.image} alt='' />
							<p>
								{member.name}
								<br />
								<i>({member.role})</i>
							</p>
						</div>
					))}
				</div>
			</div>

			<div className={styles.box}>
				<h2>
					{' '}
					<BusinessCenterIcon style={{ fontSize: 'xx-large', marginRight: '10px', marginBottom: '-2px' }} />
					Board of Directors
				</h2>
				<div className={styles.members}>
					{teamMembers.boardOfDirectors.map((member, index) => (
						<div key={index}>
							<img src={member.image} alt='' />
							<p>
								{member.name}
								<br />
								<i>({member.role})</i>
							</p>
						</div>
					))}
				</div>
			</div>
			<div className={styles.box}>
				<h2>
					<VolunteerActivismIcon style={{ fontSize: 'xx-large', marginRight: '10px', marginBottom: '-2px' }} />
					&nbsp;Our Volunteers
				</h2>
				<div className={styles.members}>
					{teamMembers.volunteers.map((member, index) => (
						<div key={index}>
							<img src={member.image} alt='' />
							<p>{member.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;
