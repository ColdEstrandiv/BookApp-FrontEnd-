import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { ManageBooksRow } from './ManageBooksRow';
import { Card, Table } from '@mantine/core';

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
            <Card>
            <Link to={`/library/${libraryId}/addBooks`}>Add a Book</Link>
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
        {libraryBooks && <ManageBooksTable/>}
        <Link to={`/library/${libraryId}`}>Back to Library</Link>
    </>)
}