import React from 'react';
import Producto from '../Producto/Producto';
import Buscador from '../Buscador/Buscador';
import './Productos.css';

class Productos extends React.Component {
	render () {

		const productos = this.props.productos;
		return (
			<div className='productos'>
					<h2>Nuestros Productos</h2>
					<Buscador
							 busqueda={this.props.busquedaProducto}
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
			</div>
		)
	}
}

export default Productos;
