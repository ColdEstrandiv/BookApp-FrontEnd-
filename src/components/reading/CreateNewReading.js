import { useState } from "react"
import { API_URL } from "../../constants"
import { useParams } from "react-router-dom"

export const ReadingForm = () => {

    let {bookProgressId} = useParams()

    const [pageCount, setPageCount] = useState()
    const [readTime, setReadTime] = useState("")

    const updatePageCount = (event) => setPageCount(event.target.value)
    const updateReadTime = (event) => setReadTime(event.target.value)

    const submitRead = (event) => {
        event.preventDefault()
        console.log({pageCount, readTime})
        fetch("http://" + API_URL + `/bookProgress/${bookProgressId}/read`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                pageCount: pageCount,
                readTime: readTime
            })
        })
    }

    return(
        <form onSubmit={submitRead}>
            <input type="number" placeholder="pageCount" onChange={updatePageCount}></input>
            <input type="text" placeholder="readTime" onChange={updateReadTime}></input>
            <button> Submit </button>
        </form>
    )
}