
const Form = () => {
    return (
        <div>
            <form action="">
                <div>
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" />
                </div>
                <div>
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" />
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label for="telefono">Telefono</label>
                    <input type="text" id="telefono" name="telefono" />
                </div>
                <div>
                    <label for="fecha">Fecha</label>
                    <input type="date" id="fecha" name="fecha" />
                </div>
                </form>
        </div>
    )
}

export default Form
