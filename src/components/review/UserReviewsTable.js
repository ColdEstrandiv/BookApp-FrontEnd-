import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { UserReviewRow } from './UserReviewsRow'

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
        let rows = userReviews.map(r => <UserReviewRow review={r} key={r.id}/>)

        return(
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Book</th>
                    </tr>
                </thead>
                <tbody>{ rows }</tbody>
            </table>
        )
    }

    return(<>
        { userReviews && <UserReviewTable/>}
        <Link to={`/user/${userId}`}>Back to user</Link>
    </>)

}

