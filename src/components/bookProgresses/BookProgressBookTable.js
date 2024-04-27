import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { useParams } from 'react-router-dom';
import { BookProgressBookRow } from './BookProgressBookRow';
import { Card, Table } from '@mantine/core';

export const BookProgressBookTable = () => {
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
    let rows = books.map(b => <BookProgressBookRow userId={userId} book={b} key={b.id}/>)

    return(
        <Card>
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>id</Table.Th>
                    <Table.Th>Title</Table.Th>
                    <Table.Th>Author</Table.Th>
                    <Table.Th>PageCount</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{ rows }</Table.Tbody>
        </Table>
        </Card>
    )
}