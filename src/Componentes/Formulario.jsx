import React, { Component } from "react";


export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: ""
        }
    }
    

    render() {
        return (<div>
            <form>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    value={this.state.nombre}
                    onChange={(evento) => this.setState({ nombre: evento.target.value })}
                />
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="correo"
                    value={this.state.correo}
                    onChange={(evento) => this.setState({ correo: evento.target.value })}
                />

                <button>Enviar Formulario</button>
                <button>Limpiar Formulario</button>

            </form>
        </div>);
    }
}