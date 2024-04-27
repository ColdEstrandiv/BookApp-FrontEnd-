import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import { Table } from '@mantine/core';

export const UserReviewRow = ({ review, reFetchReviews, userId }) => {

    const deleteReviewById = async(reviewId) => {
        await fetch("http://" + API_URL +`/review/${reviewId}`, {
            method: "DELETE"
        })
        reFetchReviews(userId)
    }

    return(
        <Table.Tr>
            <Table.Td><Link to={`/review/${review.id}`}>{review.id}</Link></Table.Td>
            <Table.Td>{review.book}</Table.Td>
            <Table.Td>
                <button onClick={() => deleteReviewById(review.id)}>DELETE</button>
            </Table.Td>
        </Table.Tr>
    )
}