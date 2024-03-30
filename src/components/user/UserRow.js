import { Link } from 'react-router-dom'

export const UserRow = ({ user }) => {
    return (
        <tr>
            <td><Link to={`/user/${user.id}`}>{user.username}</Link></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.admin ? "True" : "False"}</td>
            <td>{user.id}</td>
        </tr>
    )
}