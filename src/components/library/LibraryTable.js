import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { UserLibraryRow } from './LibraryRow';
import { Card, Table } from '@mantine/core';

export const UserLibraries = () => {
    let {userId} = useParams()
    const [userLibraries, setUserLibraries] = useState([])

    const getUserLibraries = async(userId) => {
        let res = await fetch(`http://${API_URL}/user/${userId}/libraries`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setUserLibraries(json)
        }
    }

    useEffect(() => {
        getUserLibraries(userId)
    }, [])

    const UserLibraryTable = () => {
        let rows = userLibraries.map(l => <UserLibraryRow reFetchLibraries={getUserLibraries} userId={userId} library={l} key={l.id}/>)

        return(
            <Card>
                <Link to={`/user/${userId}/library/create`}>Create Library</Link>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>id</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Amount of Books</Table.Th>
                            <Table.Th>Actions</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{ rows }</Table.Tbody>
                </Table>
            </Card>
        )
    }

    return(<>
        {userLibraries && <UserLibraryTable/>}
        <Link to={`/user/${userId}`}>Back to user</Link>
    </>)

}