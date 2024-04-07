import { useState } from "react"
import { API_URL } from "../../constants"
import { useParams } from "react-router-dom"

export const LibraryForm = () => { 
    
    let {userId} = useParams()
    const [name, setName] = useState("")

    const updateName = (event) => setName(event.target.value)

    const submitLibrary = (event) => {
        event.preventDefault()
        console.log({name})
        fetch("http://" + API_URL + `/user/${userId}/library`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name
            })
        })
    }

    return(
        <form onSubmit={submitLibrary}>
            <input type="text" placeholder="Library Name" onChange={updateName}></input>
            <button> Submit </button>
        </form> 
    )
}