import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { ManageBooksRow } from './ManageBooksRow';

export const ManageBooks = () => {
    let {libraryId} = useParams()
    const [libraryBooks, setLibraryBooks] = useState([])

    const getLibraryBooks = async(libraryId) => {
        let res = await fetch(`http://${API_URL}/library/${libraryId}/books`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setLibraryBooks(json)
        }
    }

    useEffect(() => {
        getLibraryBooks(libraryId)
    }, [])

    const ManageBooksTable = () => {
        let rows = libraryBooks.map(b => <ManageBooksRow reFetchBooks={getLibraryBooks} libraryId={libraryId} book={b} key={b.id}/>)

        return(
            <>
            <Link to={`/library/${libraryId}/addBooks`}>Add a Book</Link>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>PageCount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{ rows }</tbody>
            </table>
            </>
        )
    }
    return(<>
        {libraryBooks && <ManageBooksTable/>}
        <Link to={`/library/${libraryId}`}>Back to Library</Link>
    </>)
}