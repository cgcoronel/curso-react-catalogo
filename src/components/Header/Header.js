import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<header>
			<Link to={'/'}>
				<img src='/img/logo.png' alt='logo'/>
			</Link>
		</header>
	)
}

export default Header
