import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
  
  
  //definir el state de cantidad
  const [ cantidad, guardarCantidad ] = useState(0);
  
  //state de error
  const [ error, guardarError ] = useState(false);

  //funcion que lee el presupuesto 
  const definirPresupuesto = e => {
    guardarCantidad( parseInt(e.target.value), 10 );
  }

  //funcion para guardar el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    //validar
    if(cantidad < 1 || isNaN( cantidad )){
      guardarError(true);
      return;
    }

    //si pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  }

  return ( 

    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      { error ? 
        <Error 
          mensaje='El presupuesto es incorrecto'
        /> 
      : null }

      <form
        onSubmit={agregarPresupuesto}
      >
        <input
          type='number'
          className='u-full-width'
          placeholder='Ingresa tu presupuesto semanal'
          onChange={definirPresupuesto}
        />

        <input
          type='submit'
          className='button-primary u-full-width'
          value='Define tu presupuesto'
        />
      </form>
    </Fragment>

   );
}

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;