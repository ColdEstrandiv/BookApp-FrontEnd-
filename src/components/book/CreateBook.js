import { useState } from "react"
import { API_URL } from "../../constants"

export const BookForm = () => {

    // data we want to keep track of
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pageCount, setPageCount] = useState()

    //Takes event and updates the state value
    const updateTitle = (event) => setTitle(event.target.value)
    const updateAuthor = (event) => setAuthor(event.target.value)
    const updatePageCount = (event) => setPageCount(event.target.value)

    //Button to send form uses this handler
    const submitBook = (event) => {
        event.preventDefault()
        console.log({title, author, pageCount})
        fetch("http://" + API_URL + "/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                author: author,
                pageCount: pageCount
            })
        })
    }

    return (
        <form onSubmit={submitBook}>
            <input type="text" placeholder="Title" onChange={updateTitle}></input>
            <input type="text" placeholder="Author" onChange={updateAuthor}></input>
            <input type="number" placeholder="Page Count" onChange={updatePageCount}></input>
            <button> Submit </button>
        </form>
    )
}