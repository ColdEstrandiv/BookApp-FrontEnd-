export const BookRow = ({ book }) => {
    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.pageCount}</td>
        </tr>
    )
}