import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { AddBookRow } from './AddBookRow';

export const AddBook = () => {
    let {libraryId} = useParams()
    const [books, setBooks] = useState([])

    const getBooks = async(libraryId) => {
        let res = await fetch(`http://${API_URL}/library/${libraryId}/otherBooks`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setBooks(json)
        }
    }

    useEffect(() => {
        getBooks(libraryId)
    }, [])

    const AddBookTable = () => {
        let rows = books.map(b => <AddBookRow reFetchBooks={getBooks} libraryId={libraryId} book={b} key={b.id}/>)
        return(
            <>
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
        {books && <AddBookTable/>}
        <Link to={`/library/${libraryId}/manageBooks`}>Back to Book Management</Link>
    </>)
}