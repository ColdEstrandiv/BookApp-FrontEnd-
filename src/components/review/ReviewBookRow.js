import { Link } from "react-router-dom"

export const ReviewBookRow = ({ book, userId}) => {

    return (
        <tr>
            <td><Link to={`/user/${userId}/book/${book.id}/review/create`}>{book.id}</Link></td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.pageCount}</td>
        </tr>
    )
}