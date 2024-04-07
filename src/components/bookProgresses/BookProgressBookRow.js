import { API_URL } from "../../constants"

export const BookProgressBookRow = ({ book, userId}) => {

    const createBookProgress = async(bookId) => {
        await fetch("http://" + API_URL + `/user/${userId}/book/${bookId}/bookProgress`, {
            method: "POST"
        })
    }

    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.pageCount}</td>
            <td>
                <button onClick={() => createBookProgress(book.id)}>Create</button>
            </td>
        </tr>
    )
}
