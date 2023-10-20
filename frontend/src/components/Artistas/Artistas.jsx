import { useEffect, useState } from "react";

const Artistas = () => {
    const [artistas, setArtistas] = useState([]);

//example artistas from json file
// {
//     "id": "1",
//     "banda": "Bby Lean",
//     "genero": "Trap",
//     "logo": "./Bandas/1.png"
// },



    const getArtistas = async () => {
        //fetch data.json from public folder
        const response = await fetch("./data.json");
        const data = await response.json();
        console.log(data);
        setArtistas(data);
    };



    useEffect(() => {
        getArtistas();
    }, [])

    return (
        <div>
            <h1>Artistas</h1>
            <div className="row">
                {artistas.map((artista) => (
                    <div className="col-md-2" key={artista.id}>
                        <div className="card bg-dark text-white border-0 p-2">
                            <img src={artista.logo} alt={artista.banda} className="card-img-top" />
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title">{artista.banda}</h5>
                                <p className="card-text">{artista.genero}</p>
                                <input type="checkbox" name="artista" id={artista.id} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Artistas