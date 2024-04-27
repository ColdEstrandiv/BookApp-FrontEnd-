import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { AddBookRow } from './AddBookRow';
import { Card, Table } from '@mantine/core';

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
            <Card>
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
    return(<>
        {books && <AddBookTable/>}
        <Link to={`/library/${libraryId}/manageBooks`}>Back to Book Management</Link>
    </>)
}