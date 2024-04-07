import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { ReviewBookRow } from './ReviewBookRow';
import { useParams } from 'react-router-dom';

export const ReviewBookTable = () => {
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

    let {userId} = useParams()
    let rows = books.map(b => <ReviewBookRow userId={userId} book={b} key={b.id}/>)

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>PageCount</th>
                </tr>
            </thead>
            <tbody>{ rows }</tbody>
        </table>
        </>
    )
}