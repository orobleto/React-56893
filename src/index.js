import React from "react";
import ReactDOM from "react-dom";
import Clase from "./Clase";
import Funciones from "./Funciones";
import HolaMundo from "./HolaMundo";

/*
const elemento = document.createElement("h1");
elemento.innerText="Hola Mundo desde JS Basico"
const contenedor = document.getElementById("root");
contenedor.appendChild(elemento);
*/

// (que , donde )
ReactDOM.render(
  <p>
    <HolaMundo />
    <Funciones />
    <Clase/>
  </p>,
  document.getElementById("root")
);
