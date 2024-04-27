import { API_URL } from "../../constants";
import { Table } from '@mantine/core';

export const AddBookRow = ({ book, reFetchBooks, libraryId }) => {

    const addBook = async(bookId) => {
        await fetch(`http://${API_URL}/library/${libraryId}/book/${bookId}`, {
            method: "PUT"
        })
        reFetchBooks(libraryId)
    }

    return (
        <Table.Tr>
            <Table.Td>{book.id}</Table.Td>
            <Table.Td>{book.title}</Table.Td>
            <Table.Td>{book.author}</Table.Td>
            <Table.Td>{book.pageCount}</Table.Td>
            <Table.Td>
                <button onClick={() => addBook(book.id)}>Add</button>
            </Table.Td>
        </Table.Tr>
    )
}