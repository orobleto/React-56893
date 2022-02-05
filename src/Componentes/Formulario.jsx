import React, { Component } from "react";


export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: ""
        }
    }

    AsignarValoresFormulario = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
                    onChange={this.AsignarValoresFormulario}
                />
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="correo"
                    value={this.state.correo}
                    onChange={this.AsignarValoresFormulario}
                />

                <button>Enviar Formulario</button>
                <button>Limpiar Formulario</button>

            </form>
        </div>);
    }
}