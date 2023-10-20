import { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [artistas, setArtistas] = useState([])
    const [selectedArtistas, setSelectedArtistas] = useState([])
    const [total, setTotal] = useState(0)

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

    useEffect(() => {
        const total = selectedArtistas.reduce((acc, curr) => {
            return acc + curr.precio
        }, 0)

        setTotal(total)
    }, [selectedArtistas])

    const values = {
        artistas,
        selectedArtistas,
        setSelectedArtistas,
        total
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
