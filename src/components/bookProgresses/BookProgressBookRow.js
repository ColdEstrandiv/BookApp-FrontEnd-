import { Link } from "react-router-dom";
import { API_URL } from "../../constants";
import { Table } from '@mantine/core';

export const BookProgressBookRow = ({ book, userId}) => {

    const createBookProgress = async(bookId) => {
        await fetch("http://" + API_URL + `/user/${userId}/book/${bookId}/bookProgress`, {
            method: "POST"
        })
    }

    return (
        <Table.Tr>
            <Table.Td>{book.id}</Table.Td>
            <Table.Td>{book.title}</Table.Td>
            <Table.Td>{book.author}</Table.Td>
            <Table.Td>{book.pageCount}</Table.Td>
            <Table.Td>
                <Link to={`/user/${userId}/bookprogresses`}>
                    <button onClick={() => createBookProgress(book.id)}>Create</button>
                </Link>
            </Table.Td>
        </Table.Tr>
    )
}
