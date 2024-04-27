import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { BookRow } from './BookRow';
import { Link } from 'react-router-dom';
import { Card, Table } from '@mantine/core';

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
        <Card>
        <Link to="/book/create">Create a new book</Link>
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>id</Table.Th>
                    <Table.Th>Title</Table.Th>
                    <Table.Th>Author</Table.Th>
                    <Table.Th>PageCount</Table.Th>
                    <Table.Th>Actions</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{ rows }</Table.Tbody>
        </Table>
        </Card>
    )
}