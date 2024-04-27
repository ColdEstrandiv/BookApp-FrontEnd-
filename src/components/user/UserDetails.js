import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom"
import { Card, Group } from "@mantine/core"

export const UserDetails = () => {
    let {userId} = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        getUser(userId)
    }, [])

    const getUser = async (userId) => {
        let res = await fetch('http://'+ API_URL + `/user/${userId}`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setUser(json)
        }
    }

    return(<>
        { user && <User user={user}/>}
    </>)
}

const User = ({user}) => {
    let {userId} = useParams()

    return(
        <Group justify='center' > 
        <Card>        
            <h1>{user.username}</h1>
                <Link to={`/user/${userId}/reviews`}>Reviews</Link>
                <br/><Link to={`/user/${userId}/libraries`}>Libraries</Link>
                <br/><Link to={`/user/${userId}/bookProgresses`}>BookProgresses</Link>
                <br/><Link to={"/users"}>Back to users</Link>
        </Card>
        </Group>
    )

}