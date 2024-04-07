import { Link } from "react-router-dom";

export const MainPage = () => {
    return(
        <div>
            <Link to={'/users'}>Users</Link>
            <br/>
            <Link to={'/books'}>Books</Link>
        </div>
    )
}