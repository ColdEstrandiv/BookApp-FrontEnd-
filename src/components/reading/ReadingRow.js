import { Link } from 'react-router-dom'

export const ReadingRow = ({ reading }) => {
    return(
        <tr>
            <td><Link to={`/reading/${reading.id}`}>{reading.id}</Link></td>
            <td>{reading.pageCount}</td>
            <td>{reading.dateMade}</td>
            <td>{reading.readTime}</td>

        </tr>
    )
}