import React from "react";
import Perfil from "./Componentes/Perfil";

import perfilesJSON from './recursos/archivos/perfiles.json';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            perfiles: perfilesJSON
        }
    }


    // Formularios

    // antes de cargar 
    // JS -> Programacion Funcional filter, map y reduce
    // despues de cargar
    render() {
        return (
            <div>
                {   // 1 , 2 , 3
                    this.state.perfiles.map(   (e)=> 
                        <Perfil key={e.id}  nombrePerfil={e.nombrePerfil} cargo={e.cargo} titulo={e.titulo}   />
                    )
                }
            </div>

        );
    }
}