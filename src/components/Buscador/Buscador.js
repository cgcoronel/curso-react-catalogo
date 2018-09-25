import React from 'react';
import './Buscador.css';

class Buscador extends React.Component {

  leerDatos = (e) => {
    const termino = e.target.value;

    this.props.busqueda(termino);
  }

  render () {
    return (
        <form className='buscador'>
          <input type='text' placeholder='Búsqueda' onChange={this.leerDatos} />
        </form>
    )
  }
}

export default Buscador;
