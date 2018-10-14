import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navegacion.css';

class Navegacion extends React.Component {

	logout = () => {
		this.props.auth.logout();
	}

	login = () => {
		this.props.auth.login();
	}

	render(){

		const { isAuthenticated } = this.props.auth;

		let resultado;

		if ( isAuthenticated() ) {
			resultado = <a onClick={ this.logout }>Cerrar Sesión</a>
		} else {
			resultado = <a onClick={ this.login }>Iniciar Sesión</a>
		}
		return (
			<nav className='navegacion'>
				<NavLink activeClassName='activo' to='/nosotros'>Nosotros</NavLink>
				<NavLink activeClassName='activo' to='/productos'>Productos</NavLink>
				<NavLink activeClassName='activo' to='/contacto'>Contacto</NavLink>
				{resultado}
			</nav>
		)
	}
}

export default Navegacion
