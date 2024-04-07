import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom"

export const Library = () => {
    let {libraryId} = useParams()
    const [library, setLibrary] = useState([])

    useEffect(() => {
        getlibrary(libraryId)
    }, [])

    const getlibrary = async(libraryId) => {
        let res = await fetch('http://'+ API_URL + `/library/${libraryId}`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setLibrary(json)
        }
    }

    return(
        <div>
            <h1>{library.name}</h1>
            <Link to={`/user/${library.userId}/libraries`}>Back to User Libraries</Link>
            <b><br/>id: {library.id}</b>
            <b><br/>User: {library.user}</b>
            <br/><Link to={`/library/${libraryId}/manageBooks`}>Manage Books</Link>
            <b><br/>Books:<br/>{library.books}</b>
        </div>
    )
}