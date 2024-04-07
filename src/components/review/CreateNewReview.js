import { useState } from "react"
import { API_URL } from "../../constants"
import { useParams } from "react-router-dom"

export const ReviewForm = () => {
    let {userId} = useParams()
    let {bookId} = useParams()

    const [content, setContent] = useState("")

    const updateContent = (event) => setContent(event.target.value)

    const submitReview= (event) => {
        event.preventDefault()
        console.log({content})
        fetch("http://" + API_URL + `/user/${userId}/book/${bookId}/review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content
            })
        })
    }

    return(
        <>
        <h1>Write your Review</h1>
        <form onSubmit={submitReview}>
            <input type="text" placeholder="content" onChange={updateContent}></input>
            <button> Submit </button>
        </form>
        </>
    )
}