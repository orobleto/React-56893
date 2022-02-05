import React, { Component } from "react";


const imagen = 'data:image/jpeg;base64,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';

const PerfilCSS = {
    position: "relative",
    margin: "2rem",
    textAlign: "center",
    width: "33%",
    maxWidth: "400px",
    float: "left",
    height: "5rem",
    perspective: "150rem"
}

const botonCSSVerde = {
    backgroundColor: "green", /* Green */
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer"
}

const botonCSSAzul = {
    backgroundColor: "blue", /* Green */
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer"
}
export default class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombrePerfil: this.props.nombrePerfil,
            cargo: this.props.cargo,
            titulo: this.props.titulo,
            parrafo: this.props.cargo,
            mostrarCargo: true
        }
    }

    CambiarEstado = () => {
        this.setState({
            mostrarCargo: !this.state.mostrarCargo,
            parrafo: this.state.mostrarCargo ? this.state.titulo : this.state.cargo,
        });
    }

    render() {
        return (
            <div style={PerfilCSS}>
                <img src={imagen} width="100" height="100"></img>
                <h1>{this.state.nombrePerfil}</h1>
                <p style={{ color: "grey", fontFamily: "arial", fontSize: "20px" }}>{this.state.parrafo}</p>
                <br />
                <button style={this.state.mostrarCargo ? botonCSSVerde : botonCSSAzul} onClick={this.CambiarEstado} >Mostrar {this.state.mostrarCargo ? "Titulo" : "Cargo"}</button>
            </div>
        );
    }
}