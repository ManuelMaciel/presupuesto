import React, {Fragment} from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => ( 
  <Fragment>
    <div className='gastos-realizados'>
      <h2>Gastos Realizados</h2>
      {gastos.map( gasto =>(
        <Gasto 
          key={gasto.id}
          gasto={gasto}
        />
      ))}
    </div>
  </Fragment>
);

Listado.propTypes = {
  gastos: PropTypes.array.isRequired
}
 
export default Listado;