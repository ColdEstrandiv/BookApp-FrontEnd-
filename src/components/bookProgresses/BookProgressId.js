import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom"

export const BookProgress = () => {
    let {bookProgressId} = useParams()
    const [bookProgress, setBookProgress] = useState([])

    useEffect(() => {
        getBookProgress(bookProgressId)
    }, [])

    const getBookProgress = async(bookProgressId) => {
        let res = await fetch('http://'+ API_URL + `/bookProgress/${bookProgressId}`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setBookProgress(json)
        }
    }

    return(
        <div>
            <h1>BookProgress</h1>
            <Link to={`/user/${bookProgress.userId}`}>Back to User</Link>
            <b><br/>id: {bookProgress.id}</b>
            <b><br/>User: {bookProgress.user}</b>
            <b><br/>Book: {bookProgress.book}</b>
            <b><br/>Status: {bookProgress.status}</b>
            
            <b><br/><Link to={`/bookProgress/${bookProgressId}/readings`}>ReadingSessions</Link>:{bookProgress.readingSessions}</b>
        </div>
    )
}