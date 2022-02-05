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

    EnviarFormulario = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.LimpiarValoresFormulario();
    }

    LimpiarValoresFormulario = () => {
        this.setState({
            nombre: "",
            correo: ""
        });
    }

    render() {
        return (<div>
            <form onSubmit={this.EnviarFormulario}>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    value={this.state.nombre}
                    onChange={this.AsignarValoresFormulario}
                    required={true}
                />
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="correo"
                    value={this.state.correo}
                    onChange={this.AsignarValoresFormulario}
                    required={true}
                />

                <button type="submit">Enviar Formulario</button>
                <button type="reset" onClick={this.LimpiarValoresFormulario}>Limpiar Formulario</button>

            </form>
        </div>);
    }
}