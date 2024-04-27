import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { ReadingRow } from './ReadingRow';
import { Card, Table } from '@mantine/core';

export const BookProgressReadings = () => {
    let {bookProgressId} = useParams()
    const [bookProgressReadings, setBookProgressReadings] = useState([])

    const getBookProgressReadings = async (bookProgressId) => {
        let res = await fetch('http://'+ API_URL + `/bookProgress/${bookProgressId}/readings`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setBookProgressReadings(json)
        }
    }

    useEffect(() => {
        getBookProgressReadings(bookProgressId)
    }, [])

    const BookProgressReadingsTable = () => {
        let rows = bookProgressReadings.map(r => <ReadingRow reFetchReads={getBookProgressReadings} bookProgressId={bookProgressId} reading={r} key={r.id}/>)

        return(
            <Card>
            <Link to={`/bookProgress/${bookProgressId}/read/create`}>Create Reading Session</Link>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>id</Table.Th>
                        <Table.Th>Page Count</Table.Th>
                        <Table.Th>Date Made</Table.Th>
                        <Table.Th>Read Time</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{ rows }</Table.Tbody>
            </Table>
            </Card>
        )
    }

    return(<>
        {bookProgressReadings && <BookProgressReadingsTable/>}
        <Link to={`/bookProgress/${bookProgressId}`}>Back to Book Progress</Link>
    </>)
}