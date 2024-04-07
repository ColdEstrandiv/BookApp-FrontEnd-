import { Link } from 'react-router-dom'
import { API_URL } from '../../constants'


export const ReadingRow = ({ reading, reFetchReads, bookProgressId }) => {

    const deleteReadById = async(readId) => {
        await fetch("http://" + API_URL + `/read/${readId}`, {
            method: "DELETE"
        })
        reFetchReads(bookProgressId)
    }
    return(
        <tr>
            <td><Link to={`/reading/${reading.id}`}>{reading.id}</Link></td>
            <td>{reading.pageCount}</td>
            <td>{reading.dateMade}</td>
            <td>{reading.readTime}</td>
            <td>
                <button onClick={() => deleteReadById(reading.id)}>DELETE</button>
            </td>

        </tr>
    )
}