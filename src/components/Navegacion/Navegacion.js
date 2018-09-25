import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navegacion.css';

const Navegacion = (props) => {
	return (
		<nav className='navegacion'>
			<NavLink activeClassName='activo' to='/nosotros'>Nosotros</NavLink>
			<NavLink activeClassName='activo' to='/productos'>Productos</NavLink>
			<NavLink activeClassName='activo' to='/contacto'>Contacto</NavLink>
		</nav>
	)
}

export default Navegacion
