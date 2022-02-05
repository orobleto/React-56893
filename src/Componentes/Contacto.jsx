import ImgPerfil from '../recursos/imagenes/Perfil 3.jpeg';
import  '../recursos/css/contacto.css';

function Contacto(props) { // parametro en una funcion
    return(
        <div className="contacto">
            <img src={ImgPerfil} width="100" height="100"></img>
            {props.nombreContacto}
        </div>
    );
}

export default Contacto;