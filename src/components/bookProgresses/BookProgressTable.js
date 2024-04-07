import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { UserBookProgressRow } from './BookProgressRow';

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
            <>
            <Link to={`/user/${userId}/books/bookProgress`}>Create Book Progress</Link>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Book</th>
                        <th>Status</th>
                        <th>Amount of Reads</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{ rows }</tbody>
            </table>
            </>
        )
    }

    return(<>
        {userBookProgresses && <UserBookProgressTable/>}
        <Link to={`/user/${userId}`}>Back to user</Link>
    </>)
}