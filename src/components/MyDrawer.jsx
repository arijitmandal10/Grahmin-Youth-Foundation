import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import the Link component

function MyDrawer({ navItems, scrollToSection, socialMediaLinks }) {
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	const iconStyle = {
		fontSize: '2.5rem', // Adjust the size as needed
	};

	function handleItemClick(item) {
		if (item.isExternal) {
			window.open(item.target, '_blank'); // Open external link in a new tab
		} else if (item.target === '/' || item.target === '/team') {
			toggleDrawer(); // Close the drawer when  or Team is clicked
		} else {
			toggleDrawer(); // Close the drawer when any other link is clicked
			scrollToSection(item.target);
		}
	}

	return (
		<div>
			<IconButton onClick={toggleDrawer}>
				<MenuIcon style={iconStyle} />
			</IconButton>
			<Drawer open={open} onClose={toggleDrawer} style={{ opacity: '0.8' }}>
				<div style={{ width: 150, background: 'black', color: 'white', height: 'inherit' }}>
					{' '}
					{/* Set the width as needed */}
					<List>
						{navItems.map((item) => (
							<ListItem button key={item.text} onClick={() => handleItemClick(item)}>
								{(item.target === '/' || item.target === '/team') && !item.isExternal ? (
									<Link to={item.target} style={{ textDecoration: 'none', color: 'inherit' }}>
										<ListItemText primary={item.text} />
									</Link>
								) : (
									<ListItemText primary={item.text} />
								)}
							</ListItem>
						))}
						{socialMediaLinks.map((item, index) => (
							<ListItem button component='a' href={item.url} target='_blank' key={index}>
								<ListItemIcon>
									<img src={item.icon} alt={item.text} style={{ width: '24px' }} />
								</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						))}
					</List>
				</div>
			</Drawer>
		</div>
	);
}

export default MyDrawer;
