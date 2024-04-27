import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import { Table } from '@mantine/core';

export const ReadingRow = ({ reading, reFetchReads, bookProgressId }) => {

    const deleteReadById = async(readId) => {
        await fetch("http://" + API_URL + `/read/${readId}`, {
            method: "DELETE"
        })
        reFetchReads(bookProgressId)
    }
    return(
        <Table.Tr>
            <Table.Td><Link to={`/reading/${reading.id}`}>{reading.id}</Link></Table.Td>
            <Table.Td>{reading.pageCount}</Table.Td>
            <Table.Td>{reading.dateMade}</Table.Td>
            <Table.Td>{reading.readTime}</Table.Td>
            <Table.Td>
                <button onClick={() => deleteReadById(reading.id)}>DELETE</button>
            </Table.Td>

        </Table.Tr>
    )
}