import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { UserBookProgressRow } from './BookProgressRow';
import { Card, Table } from '@mantine/core';

export const UserBookProgresses = () => {
    let {userId} = useParams()
    const [userBookProgresses, setUserBookProgresses] = useState([])

    const getUserBookProgresses = async(userId) => {
        let res = await fetch('http://'+ API_URL + `/user/${userId}/bookProgresses`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setUserBookProgresses(json)
        }
    }

    useEffect(() => {
        getUserBookProgresses(userId)
    }, [])

    const UserBookProgressTable = () => {
        let rows = userBookProgresses.map(bp => <UserBookProgressRow reFetchBookProgress={getUserBookProgresses} userId={userId} bookProgress={bp} key={bp.id}/>)

        return(
            <Card>
                <Link to={`/user/${userId}/books/bookProgress`}>Create Book Progress</Link>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>id</Table.Th>
                            <Table.Th>Book</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Amount of Reads</Table.Th>
                            <Table.Th>Actions</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{ rows }</Table.Tbody>
                </Table>
            </Card>
        )
    }

    return(<>
        {userBookProgresses && <UserBookProgressTable/>}
    </>)
}