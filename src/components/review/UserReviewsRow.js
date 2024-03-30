import { Link } from 'react-router-dom'

export const UserReviewRow = ({ review }) =>{
    return(
        <tr>
            <td><Link to={`/review/${review.id}`}>{review.id}</Link></td>
            <td>{review.book}</td>
        </tr>
    )
}