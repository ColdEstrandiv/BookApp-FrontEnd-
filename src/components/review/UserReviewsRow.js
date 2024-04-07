import { Link } from 'react-router-dom'
import { API_URL } from '../../constants'

export const UserReviewRow = ({ review, reFetchReviews, userId }) => {

    const deleteReviewById = async(reviewId) => {
        await fetch("http://" + API_URL +`/review/${reviewId}`, {
            method: "DELETE"
        })
        reFetchReviews(userId)
    }

    return(
        <tr>
            <td><Link to={`/review/${review.id}`}>{review.id}</Link></td>
            <td>{review.book}</td>
            <td>
                <button onClick={() => deleteReviewById(review.id)}>DELETE</button>
            </td>
        </tr>
    )
}