import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, deleteCita }) => {
    return (
        <div className="cita">
            <p>Mascota: <span>{cita.nombre}</span></p>
            <p>Dueño: <span>{cita.dueno}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora alta: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button 
                className="button eliminar u-full-width"
                onClick={() => deleteCita(cita.id)}
            >Eliminar</button>
        </div>
    );
};

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    deleteCita: PropTypes.func.isRequired
}

export default Cita;