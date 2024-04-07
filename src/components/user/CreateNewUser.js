import { useState } from "react"
import { API_URL } from "../../constants"

export const UserForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const updateFirstName = (event) => setFirstName(event.target.value)
    const updateLastName = (event) => setLastName(event.target.value)
    const updateUsername = (event) => setUserName(event.target.value)
    const updateEmail = (event) => setEmail(event.target.value)
    const updatePassword = (event) => setPassword(event.target.value)

    const submitUser = (event) => {
        event.preventDefault()
        console.log({firstName, lastName, username, email, password})
        fetch("http://" + API_URL + "/user", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password
            })
        })
    }

    return(
        <form onSubmit={submitUser}>
            <input type="text" placeholder="First Name" onChange={updateFirstName}></input>
            <input type="text" placeholder="Last Name" onChange={updateLastName}></input>
            <input type="text" placeholder="Username" onChange={updateUsername}></input>
            <input type="text" placeholder="Email" onChange={updateEmail}></input>
            <input type="text" placeholder="Password" onChange={updatePassword}></input>
            <button> Submit </button>
        </form>
    )
}