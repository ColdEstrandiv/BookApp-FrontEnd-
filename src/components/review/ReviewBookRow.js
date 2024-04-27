import { Link } from "react-router-dom"
import { Table } from '@mantine/core';

export const ReviewBookRow = ({ book, userId}) => {

    return (
        <Table.Tr>
            <Table.Td><Link to={`/user/${userId}/book/${book.id}/review/create`}>{book.id}</Link></Table.Td>
            <Table.Td>{book.title}</Table.Td>
            <Table.Td>{book.author}</Table.Td>
            <Table.Td>{book.pageCount}</Table.Td>
        </Table.Tr>
    )
}