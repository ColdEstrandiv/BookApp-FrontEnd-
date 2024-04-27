import { Link } from 'react-router-dom';
import { API_URL } from "../../constants";
import { Table } from '@mantine/core';

export const UserLibraryRow = ({ library, reFetchLibraries, userId }) => {

    const deleteLibraryById = async(libraryId) => {
        await fetch("http://" + API_URL + `/library/${libraryId}`, {
            method: "DELETE"
        })
        reFetchLibraries(userId)
    }

    return(
        <Table.Tr>
            <Table.Td><Link to={`/library/${library.id}`}>{library.id}</Link></Table.Td>
            <Table.Td>{library.name}</Table.Td>
            <Table.Td>{library.books}</Table.Td>
            <Table.Td>
                <button onClick={() => deleteLibraryById(library.id)}>DELETE</button>
            </Table.Td>
        </Table.Tr>
    )
}