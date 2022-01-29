import React from "react";
import ReactDOM from "react-dom";
import Contacto from "./Componentes/Contacto";
import Perfil from "./Componentes/Perfil";

/*
const elemento = document.createElement("h1");
elemento.innerText="Hola Mundo desde JS Basico"
const contenedor = document.getElementById("root");
contenedor.appendChild(elemento);
*/

// (que , donde )
ReactDOM.render(
  <React.StrictMode>
    <Contacto nombreContacto="Octavio Robleto" />
    <Contacto nombreContacto="Mariano Guerrero" />
    <Contacto nombreContacto="Miriam Figueroa" />

    <Perfil nombrePerfil="Octavio Robleto" cargo="Docente" titulo="Ingeniero" />
    <Perfil
      nombrePerfil="Carla Perez"
      cargo="Moderadora"
      titulo="Administrativo"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
