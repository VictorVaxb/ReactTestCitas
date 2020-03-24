import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ addCita }) => {

    const [cita, setCita] = useState({
        nombre: '',
        dueno: '',
        fecha: '',
        hora:'',
        sintomas: ''
    })

    const [error, setError] = useState({
        hasError: false,
        errorMsg: ''
    })

    const handleChange = e => {
        //console.log(`${e.target.name} : ${e.target.value}`);
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const submitCita = (e) => {
        e.preventDefault();
        console.log(cita);
        if(nombre.trim() === '' || dueno.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            console.log("Faltan campos obligatorios");
            setError({
                hasError: true,
                errorMsg: 'Falta informar campos obligatorios'
            })
            return;
        }
        setError({
            hasError: false,
            errorMsg: ""
        })
        cita.id = uuid();
        //console.log(cita);
        addCita(cita)
        setCita({
            nombre: '',
            dueno: '',
            fecha: '',
            hora:'',
            sintomas: ''
        })
    }

    const { nombre ,dueno, fecha, hora, sintomas } = cita;

    return (
        <div>
            <h2>Crear Cita</h2>

            { error.hasError ? <p className="alerta-error">{ error.errorMsg }</p> : null }

            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={handleChange}
                    value={nombre}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="dueno"
                    className="u-full-width"
                    placeholder="Nombre dueño"
                    onChange={handleChange}
                    value={dueno}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </div>
    );
};

Form.propTypes = {
    addCita: PropTypes.func.isRequired
}

export default Form