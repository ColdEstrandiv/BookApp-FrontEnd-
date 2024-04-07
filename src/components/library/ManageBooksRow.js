import { API_URL } from "../../constants"

export const ManageBooksRow = ({ book, reFetchBooks, libraryId }) => {

    const removeBook = async(bookId) => {
        await fetch(`http://${API_URL}/library/${libraryId}/book/${bookId}`, {
            method: "PUT"
        })
        reFetchBooks(libraryId)
    }

    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.pageCount}</td>
            <td>
                <button onClick={() => removeBook(book.id)}>Remove</button>
            </td>
        </tr>
    )
}