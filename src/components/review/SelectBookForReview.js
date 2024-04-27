import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { ReviewBookRow } from './ReviewBookRow';
import { useParams } from 'react-router-dom';
import { Card, Group, Table, TableCaption } from '@mantine/core';

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
        <Group pt={10}>
        <Table captionSide='top'>
            <TableCaption ta={'left'} c={'black'} pl={30}>Select a Book</TableCaption>
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
        </Group>
    )
}