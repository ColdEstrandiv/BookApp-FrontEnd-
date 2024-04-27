import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import { Table } from '@mantine/core';

export const UserBookProgressRow = ({ bookProgress, reFetchBookProgress, userId }) => {

    const deleteBookProgressById = async(bookProgressId) => {
        await fetch("http://" + API_URL + `/bookProgress/${bookProgressId}`, {
            method: "DELETE"
        })
        reFetchBookProgress(userId)
    }

    return(
        <Table.Tr>
            <Table.Td><Link to={`/bookProgress/${bookProgress.id}`}>{bookProgress.id}</Link></Table.Td>
            <Table.Td>{bookProgress.book}</Table.Td>
            <Table.Td>{bookProgress.status}</Table.Td>
            <Table.Td>{bookProgress.reads}</Table.Td>
            <Table.Td>
                <button onClick={() => deleteBookProgressById(bookProgress.id)}>DELETE</button>
            </Table.Td>
        </Table.Tr>
    )
}