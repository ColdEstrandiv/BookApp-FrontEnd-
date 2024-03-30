import { API_URL } from "../../constants"

export const BookRow = ({ book, reFetchBooks }) => {

    const deleteBookById = async(bookId) => {
        await fetch("http://" + API_URL +`/book/${bookId}`, {
            method: "DELETE"
        })
        reFetchBooks()
    }

    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.pageCount}</td>
            <td>
                <button onClick={() => deleteBookById(book.id)}>DELETE</button>
            </td>
        </tr>
    )
}