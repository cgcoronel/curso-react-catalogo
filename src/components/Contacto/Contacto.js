import React from 'react';
import './Contacto.css';

const Contacto = (props) => {
	return (
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

export default Contacto
