import { Link } from 'react-router-dom'

export const UserLibraryRow = ({ library }) =>{
    return(
        <tr>
            <td><Link to={`/library/${library.id}`}>{library.id}</Link></td>
            <td>{library.name}</td>
            <td>{library.books}</td>
        </tr>
    )
}