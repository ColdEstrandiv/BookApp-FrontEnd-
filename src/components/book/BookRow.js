import { API_URL } from "../../constants";
import { Table } from '@mantine/core';

export const BookRow = ({ book, reFetchBooks }) => {

    const deleteBookById = async(bookId) => {
        await fetch("http://" + API_URL + `/book/${bookId}`, {
            method: "DELETE"
        })
        reFetchBooks()
    }

    return (
        <Table.Tr>
            <Table.Td>{book.id}</Table.Td>
            <Table.Td>{book.title}</Table.Td>
            <Table.Td>{book.author}</Table.Td>
            <Table.Td>{book.pageCount}</Table.Td>
            <Table.Td>
                <button onClick={() => deleteBookById(book.id)}>DELETE</button>
            </Table.Td>
        </Table.Tr>
    )
}