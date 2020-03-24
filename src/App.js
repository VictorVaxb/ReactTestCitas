import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Cita from './components/Cita';

function App() {

  let citasIni = [];
  if(localStorage.getItem("citas")){
    citasIni = JSON.parse(localStorage.getItem("citas"));
  }

  const [citas, setCitas] = useState(citasIni);

  useEffect(() => {
    if(citasIni){
      localStorage.setItem("citas", JSON.stringify(citas));
    }else{
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIni])

  const addCita = cita => {
    console.log("agregando cita");
    setCitas([
      ...citas,
      cita
    ])
  }

  const deleteCita = id => {
    console.log(`Eliminando cita cita con Id: ${id}`);
    let newCitas = citas.filter(cita => cita.id !== id)
    setCitas(newCitas);
  }

  return (
    <div>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              addCita={addCita}
            />
          </div>
          <div className="one-half column">            
            <h2>Lista de citas</h2>
            {
              citas.length > 0 ? null : 
              <h3>Agrega citas 
                <span role="img" aria-label="dog">🐶</span>
                <span role="img" aria-label="cat">🐱</span>
              </h3>
            }
            { citas.map(cita => (
              <Cita 
                key={cita.id} 
                cita={cita} 
                deleteCita={deleteCita}
              />)) 
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
