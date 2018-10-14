import React from 'react';
import './Nosotros.css';

class Nosotros extends React.Component {
	render () {
		return (
			<div className='contenedor-nosotros'>
					<div className='imagen'>
						<img src='/img/camisa_1.png' alt='nosotros' />
					</div>

					<div className='contenido'>
						<h2>Sobre Nosotros</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique elit id nunc interdum, sit amet ullamcorper nisi ultricies. Sed cursus ante vel nibh bibendum placerat. Suspendisse accumsan efficitur lectus, vel mattis erat faucibus in. Aenean lacus mi, porta vitae rutrum et, tempor nec arcu. Integer massa justo, faucibus eget ipsum eget, laoreet congue leo. Pellentesque ac feugiat tortor. Aenean dolor libero, ornare in ultricies ut, efficitur nec massa. Mauris venenatis turpis et nisi gravida pharetra. Phasellus ultricies est vel leo tristique, eu rhoncus arcu rutrum.
						</p>
					</div>
			</div>
		)
	}
}

export default Nosotros;
