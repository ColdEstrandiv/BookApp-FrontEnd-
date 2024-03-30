import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { UserRow } from './UserRow';

export const UserTable = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        console.log(API_URL)
        let res = await fetch('http://'+ API_URL + '/users')
        if (res.ok) {
            let json = await res.json()
            console.log(json)
            setUsers(json)
        }
        
    }
    useEffect(() =>{
        getUsers()
    }, [])

    let rows = users.map(u => <UserRow user={u} key={u.username}/>)

    return(
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th>Id</th>
                </tr>
            </thead>

            <tbody>{ rows }</tbody>
            
        </table>
    )
}


