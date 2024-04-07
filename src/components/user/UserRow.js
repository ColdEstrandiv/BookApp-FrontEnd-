import { Link } from 'react-router-dom'
import { API_URL } from "../../constants"

export const UserRow = ({ user, reFetchUsers }) => {

    const deleteUserById = async(userId) => {
        await fetch("http://" + API_URL + `/user/${userId}`, {
            method: "DELETE"
        })
        reFetchUsers()
    }

    const toggleUserById = async(userId) => {
        await fetch("http://" + API_URL + `/user/${userId}`, {
            method: "PUT"
        })
        reFetchUsers()
    }

    return (
        <tr>
            <td><Link to={`/user/${user.id}`}>{user.username}</Link></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.admin ? "True" : "False"}</td>
            <td>{user.id}</td>
            <td>
                <button onClick={() => deleteUserById(user.id)}>DELETE</button>
                <button onClick={() => toggleUserById(user.id)}>ToggleAdmin</button>
            </td>
        </tr>
    )
}