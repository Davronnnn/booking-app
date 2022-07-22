import React from 'react';
import logo from '../../assets/Booking_logo.png';
import Sidebar from './Sidebar';
import classes from './Layout.module.css';
const Layout = (props) => {
	return (
		<section className={classes.layout}>
			<header className={classes.header}>
				<img src={logo} alt='booking app' />
				<h1>Booking system</h1>
			</header>
			<Sidebar className={classes.sidebar} />
			<section className={classes.content}>{props.children}</section>
		</section>
	);
};

export default Layout;
