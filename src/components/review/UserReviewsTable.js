import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { UserReviewRow } from './UserReviewsRow'
import { Card, Table } from '@mantine/core';

export const UserReviews = () => {
    let {userId} = useParams()
    const [userReviews, setUserReviews] = useState([])

    const getUserReviews = async (userId) => {
        let res = await fetch('http://'+ API_URL + `/user/${userId}/reviews`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setUserReviews(json)
        }
    }

    useEffect(() => {
        getUserReviews(userId)
    }, [])

    const UserReviewTable = () =>{
        let rows = userReviews.map(r => <UserReviewRow reFetchReviews={getUserReviews} userId={userId} review={r} key={r.id}/>)

        return(
            <Card>
            <Link to={`/user/${userId}/books/review`}>Create Review</Link>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>id</Table.Th>
                        <Table.Th>Book</Table.Th>
                        <Table.Th>Actions</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{ rows }</Table.Tbody>
            </Table>
            </Card>
        )
    }

    return(<>
        { userReviews && <UserReviewTable/>}
        <Link to={`/user/${userId}`}>Back to user</Link>
    </>)

}

