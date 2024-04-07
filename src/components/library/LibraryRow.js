import { Link } from 'react-router-dom'
import { API_URL } from "../../constants"

export const UserLibraryRow = ({ library, reFetchLibraries }) => {

    const deleteLibraryById = async(libraryId) => {
        await fetch("http://" + API_URL + `/library/${libraryId}`, {
            method: "DELETE"
        })
        reFetchLibraries()
    }

    return(
        <tr>
            <td><Link to={`/library/${library.id}`}>{library.id}</Link></td>
            <td>{library.name}</td>
            <td>{library.books}</td>
            <td>
                <button onClick={() => deleteLibraryById(library.id)}>DELETE</button>
            </td>
        </tr>
    )
}