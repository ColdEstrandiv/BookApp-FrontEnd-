import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { useParams } from "react-router-dom"

export const Library = () => {
    let {libraryId} = useParams()
    const [library, setlibrary] = useState([])

    useEffect(() => {
        getlibrary(libraryId)
    }, [])

    const getlibrary = async(libraryId) => {
        let res = await fetch('http://'+ API_URL + `/library/${libraryId}`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setlibrary(json)
        }
    }
    return(
        <div>
            <h1>{library.name}</h1>
            <b>id: {library.id}</b>
            <b><br/>{library.user}</b>
            <b><br/>Books: {library.books}</b>
        </div>
    )
}