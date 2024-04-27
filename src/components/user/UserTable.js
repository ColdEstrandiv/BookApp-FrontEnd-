import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { UserRow } from './UserRow';
import { Link } from 'react-router-dom';
import { Card, Table } from '@mantine/core';

export const UserTable = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        console.log(API_URL)
        let res = await fetch('http://'+ API_URL + '/users')
        if (res.ok) {
            let json = await res.json()
            console.log(json)
            setUsers(json)
        }
        
    }
    useEffect(() =>{
        getUsers()
    }, [])

    let rows = users.map(u => <UserRow reFetchUsers={getUsers} user={u} key={u.username}/>)

    return(
        <Card
        ta={"center"}
        shadow="sm"
        radius={"sm"}
        padding={"md"} 
        withBorder
        color='myColor'>
            <Link to="/user/create">Create a new user</Link>
            <Table horizontalSpacing={"sm"} verticalSpacing={"lg"} ta={'left'}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Username</Table.Th>
                        <Table.Th>FirstName</Table.Th>
                        <Table.Th>LastName</Table.Th>
                        <Table.Th>Email</Table.Th>
                        <Table.Th>Admin</Table.Th>
                        <Table.Th>Id</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{ rows }</Table.Tbody>
        </Table>
        </Card>
    )
}


