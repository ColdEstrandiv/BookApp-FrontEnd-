import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { UserLibraryRow } from './LibraryRow';

export const UserLibraries = () => {
    let {userId} = useParams()
    const [userLibraries, setUserLibraries] = useState([])

    const getUserLibraries = async (userId) => {
        let res = await fetch('http://'+ API_URL + `/user/${userId}/libraries`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setUserLibraries(json)
        }
    }

    useEffect(() => {
        getUserLibraries(userId)
    }, [])

    const UserLibraryTable = () =>{
        let rows = userLibraries.map(l => <UserLibraryRow library={l} key={l.id}/>)

        return(
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Amount of Books</th>
                    </tr>
                </thead>
                <tbody>{ rows }</tbody>
            </table>
        )
    }

    return(<>
        { userLibraries && <UserLibraryTable/>}
        <Link to={`/user/${userId}`}>Back to user</Link>
    </>)

}