import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { BookRow } from './BookRow';

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

    let rows = books.map(b => <BookRow book={b} key={b.title}/>)

    return(
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>PageCount</th>
                </tr>
            </thead>
            <tbody>{ rows }</tbody>
        </table>
    )
}