
const handleSelect = () => {
    console.log("Seleccionado");
}

const Artista = (props) => {
    console.log(props);
    return (


        <div>
                <img src={props.imagen} alt={props.nombre} className="img-fluid rounded-circle"></img>
                <p>{props.nombre}</p>
                <p>{props.precio}</p>
                <input type="checkbox" name="artista" id="artista" onSelect={props.onSelect} />
        </div>
    )
}

export default Artista
