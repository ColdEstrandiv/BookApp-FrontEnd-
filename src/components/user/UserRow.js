import { Link } from 'react-router-dom'
import { API_URL } from "../../constants"
import { Table } from '@mantine/core';

export const UserRow = ({ user, reFetchUsers }) => {

    const deleteUserById = async(userId) => {
        await fetch("http://" + API_URL + `/user/${userId}`, {
            method: "DELETE"
        })
        reFetchUsers()
    }

    const toggleUserById = async(userId) => {
        await fetch("http://" + API_URL + `/user/${userId}`, {
            method: "PUT"
        })
        reFetchUsers()
    }

    return (
        <Table.Tr>
            <Table.Td><Link to={`/user/${user.id}`}>{user.username}</Link></Table.Td>
            <Table.Td>{user.firstName}</Table.Td>
            <Table.Td>{user.lastName}</Table.Td>
            <Table.Td>{user.email}</Table.Td>
            <Table.Td>{user.admin ? "True" : "False"}</Table.Td>
            <Table.Td>{user.id}</Table.Td>
            <Table.Td>
                <button onClick={() => deleteUserById(user.id)}>DELETE</button>
                <button onClick={() => toggleUserById(user.id)}>ToggleAdmin</button>
            </Table.Td>
        </Table.Tr>
    )
}