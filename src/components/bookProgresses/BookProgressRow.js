import { Link } from 'react-router-dom'

export const UserBookProgressRow = ({ bookProgress }) => {
    return(
        <tr>
            <td><Link to={`/bookProgress/${bookProgress.id}`}>{bookProgress.id}</Link></td>
            <td>{bookProgress.book}</td>
            <td>{bookProgress.status}</td>
            <td>{bookProgress.reads}</td>
        </tr>
    )
}