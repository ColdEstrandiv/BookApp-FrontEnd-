import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { useParams } from "react-router-dom"

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
        <div>
            <h1>{review.book}</h1>
            <b>id: {review.id}</b>
            <b><br/>{review.pageCount} pages</b>
            <b><br/>review by {review.user}</b>
            <b1><br/>{review.content}</b1>
        </div>
    )
}

