import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom"
import { Card, Group, Box } from '@mantine/core';

export const Review = () => {
    let {reviewId} = useParams()
    const [review, setReview] = useState([])


    const getReview = async(reviewId) => {
        let res = await fetch('http://'+ API_URL + `/review/${reviewId}`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setReview(json)
        }
    }
    
    useEffect(() => {
        getReview(reviewId)
    }, [])

    return(
        <Box pl={50}>
            <Group justify='left'>
                <Card>
                    <Link to={`/user/${review.userId}/reviews`}>Back to User Reviews</Link>
                    <h1>{review.book}</h1>
                    <b>review by {review.user}</b>
                    <b>id: {review.id}</b>
                </Card>
            </Group>
        <b1>{review.content}</b1>
        </Box>
    )
}

