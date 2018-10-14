import React from 'react';
import './Contacto.css';

class Contacto extends React.Component {
	render(){

		const {isAuthenticated} = this.props.auth;

		return (
			<React.Fragment>
				{ isAuthenticated() && (
					<form>
						<legend>Formulario de contacto</legend>

					<div className='input-field'>
							<label>Nombre: </label>
							<input type='text' placeholder='Tu nombre'/>
					</div>

					<div className='input-field'>
							<label>email: </label>
							<input type='email' placeholder='Tu email'/>
					</div>

					<div className='input-field'>
							<label>Mensaje: </label>
							<textarea></textarea>
					</div>


					<div className='input-field'>
						<input type='submit' value='Enviar'/>
					</div>

					</form>
					)
				}

				{
					!isAuthenticated() && (
						<div className='contenedor-boton'>
							<p>Para enviar un mensaje debes estar Logueado:</p>
							<a className='boton' onClick={ this.props.auth.login }>
								Iniciar Sesión
							</a>
						</div>
					)
				}
			</React.Fragment>
		)
	}
}

export default Contacto
