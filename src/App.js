import React, { useState } from 'react';
import './App.scss';
import useFetch from "./hooks/useFetch";
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const datos = useFetch("https://us-central1-personal-751c8.cloudfunctions.net/api", null);
  const [mostrar,setMostrar] = useState('biografia');
  const activo = (nombre) => {
    setMostrar(nombre);
  }

  return (
    <div className="App">
      <Header activo={activo}/>
      <Body datos={datos} mostrar={mostrar}/>
    </div>
  );
}

export default App;
