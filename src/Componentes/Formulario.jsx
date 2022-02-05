import React, { Component } from "react";


export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: ""
        }
    }

    AsignarValores1 = (propiedad, valor) => {
        let estado = {};
        estado[propiedad] = valor;
        this.setState(estado);
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
                    onChange={(evento) => this.AsignarValores1("nombre",evento.target.value)}
                />
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="correo"
                    value={this.state.correo}
                    onChange={(evento) => this.AsignarValores1("correo",evento.target.value)}
                />

                <button>Enviar Formulario</button>
                <button>Limpiar Formulario</button>

            </form>
        </div>);
    }
}