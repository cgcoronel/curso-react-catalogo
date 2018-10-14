import React from 'react';
import Producto from '../Producto/Producto';
import Buscador from '../Buscador/Buscador';
import './Productos.css';

import axios from 'axios';

class Productos extends React.Component {

	state = {
		productos: [],
		terminoBusqueda: ''
	}

	componentWillMount(){

		const { isAuthenticated } = this.props.auth;

		if (isAuthenticated) {
				this.queryAPI();
		}
	}

	queryAPI = () => {
		const { getAccessToken } = this.props.auth;
		const headers = { 'Authorization': `Bearer ${getAccessToken() }`};
		const url = 'http://localhost:5000/productos';

		return axios.get(url, { headers })
			.then(respuesta => this.setState(
				{ productos: respuesta.data }
			));

	}

	login = () => {
		this.props.auth.login();
	}

	busquedaProducto = (busqueda) => {
		if(busqueda.length > 3) {
				let productos = [...this.state.productos];
				let resultado;

				resultado = productos.filter(producto => (
					producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase() ) !== -1
				));

				this.setState({
						terminoBusqueda: busqueda,
						productos: resultado
					});
		} else {
			this.setState({
					terminoBusqueda: ''
				},
				() => {
						this.queryAPI();
				}
			);
		}
	}

	render () {

		const { isAuthenticated } = this.props.auth;

		const productos = this.state.productos;
		return (
			<div className='productos'>

					{ isAuthenticated() && (
						<React.Fragment>
							<h2>Nuestros Productos</h2>
							<Buscador
									 busqueda={this.busquedaProducto}
								/>
								<ul className='lista-productos'>
									{
										Object.keys(productos).map(
											producto => (
												<Producto
														key={producto}
														producto={productos[producto]}
													/>
											)
										)
									}
								</ul>
						</React.Fragment>

						)
					}

					{
						!isAuthenticated() && (
							<div className='contenedor-boton'>
								<p>Para ver el contenido debes estar Logueado:</p>
								<a className='boton' onClick={ this.login }>
									Iniciar Sesión
								</a>
							</div>
						)
					}
			</div>
		)
	}
}

export default Productos;
