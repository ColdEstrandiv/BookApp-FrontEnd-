import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom"
import { Card, Group, Tabs } from "@mantine/core"
import { UserLibraries } from '../library/LibraryTable';
import { BookProgressBookTable } from '../bookProgresses/BookProgressBookTable';
import { UserBookProgresses } from '../bookProgresses/BookProgressTable';
import { UserReviews } from '../review/UserReviewsTable';

export const UserDetails = () => {
    let {userId} = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        getUser(userId)
    }, [])

    const getUser = async (userId) => {
        let res = await fetch(`http://${API_URL}/user/${userId}`)
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
        <Group justify='center' pt={50}> 
        <Card bg={'#f6f8fa'} w={600}>
            <Link to={"/users"}>Back to users</Link>
            <br/>
            <h3>{user.username}</h3>

            <Tabs defaultValue={"libraries"}>
                <Tabs.List>
                    <Tabs.Tab value='libraries'>
                        Libraries
                    </Tabs.Tab>
                    <Tabs.Tab value='bookProgresses'>
                        BookProgresses
                    </Tabs.Tab>
                    <Tabs.Tab value='reviews'>
                        Reviews
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value='libraries'>
                    <UserLibraries/>
                </Tabs.Panel>
                <Tabs.Panel value='bookProgresses'>
                    <UserBookProgresses/>
                </Tabs.Panel>
                <Tabs.Panel value='reviews'>
                    <UserReviews/>
                </Tabs.Panel>
            </Tabs>
                

        </Card>
        </Group>
    )

}