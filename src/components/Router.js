import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import Productos from './Productos/Productos';
import Nosotros from './Nosotros/Nosotros';
import Contacto from './Contacto/Contacto';
import SingleProducto from './SingleProducto/SingleProducto';
import Error from './Error/Error';

import infoProductos from '../datos/datos.json';


class Router extends React.Component {

	state = {
		productos: [],
		terminoBusqueda: ''
	}

	componentWillMount(){
		this.setState({
			productos: infoProductos
		});
	}

	busquedaProducto = (busqueda) => {
		console.log('ddddd  ' + busqueda);
	  if(busqueda.length > 3) {
				this.setState({
						terminoBusqueda: busqueda
					});
		} else {
			this.setState({
					terminoBusqueda: ''
				});
		}
	}

	render() {

		let productos = [...this.state.productos];
		let busqueda = this.state.terminoBusqueda;
		let resultado;

		if (busqueda !== '') {
			resultado = productos.filter(producto => (
				producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase() ) !== -1
			));
		} else {
			resultado = productos;
		}

		return (
			<BrowserRouter>

				<div className='contenedor'>
					<Header />
					<Navegacion />
					<Switch>
						<Route exact path='/' render={
								() => (
										<Productos
												productos={resultado}
												busquedaProducto={this.busquedaProducto}
											/>
									)
							} 	/>
						<Route exact path='/nosotros' component={Nosotros} />
						<Route exact path='/productos' render={
								() => (
										<Productos
												productos={resultado}
												busquedaProducto={this.busquedaProducto}
											/>
									)
							} 	/>
						<Route exact path='/producto/:id' render={
								(props) => {
										let id = props.match.params.id;

										return (
											<SingleProducto
													producto={this.state.productos[id]}
												/>
										)
								}
							} 	/>
						<Route exact path='/contacto' component={Contacto} />
						<Route component={Error} />
					</Switch>
        </div>

			</BrowserRouter>
		)
	}
}

export default Router;
