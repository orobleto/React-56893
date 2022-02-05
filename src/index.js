import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import Formulario from "./Componentes/Formulario";

/*
const elemento = document.createElement("h1");
elemento.innerText="Hola Mundo desde JS Basico"
const contenedor = document.getElementById("root");
contenedor.appendChild(elemento);
*/

// (que , donde )
ReactDOM.render(
  <React.StrictMode>

  <Formulario></Formulario>
    
  </React.StrictMode>,
  document.getElementById("root")
);
