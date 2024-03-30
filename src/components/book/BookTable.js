import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { BookRow } from './BookRow';
import { Link } from 'react-router-dom';

export const BookTable = () => {
    const [books, setBooks] = useState([])

    const getBooks = async () => {
        console.log(API_URL)
        let res = await fetch('http://' + API_URL + '/books')
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setBooks(json)
        }
    }
    useEffect(() => {
        getBooks()
    }, [])

    let rows = books.map(b => <BookRow reFetchBooks={getBooks} book={b} key={b.id}/>)

    return(
        <>
        <Link to="/book/create">Create a new book</Link>
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