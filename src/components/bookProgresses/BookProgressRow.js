import { Link } from 'react-router-dom'
import { API_URL } from '../../constants'

export const UserBookProgressRow = ({ bookProgress, reFetchBookProgress, userId }) => {

    const deleteBookProgressById = async(bookProgressId) => {
        await fetch("http://" + API_URL + `/bookProgress/${bookProgressId}`, {
            method: "DELETE"
        })
        reFetchBookProgress(userId)
    }

    return(
        <tr>
            <td><Link to={`/bookProgress/${bookProgress.id}`}>{bookProgress.id}</Link></td>
            <td>{bookProgress.book}</td>
            <td>{bookProgress.status}</td>
            <td>{bookProgress.reads}</td>
            <td>
                <button onClick={() => deleteBookProgressById(bookProgress.id)}>DELETE</button>
            </td>
        </tr>
    )
}