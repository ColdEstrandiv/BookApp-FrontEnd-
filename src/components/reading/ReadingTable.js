import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { ReadingRow } from './ReadingRow';

export const BookProgressReadings = () => {
    let {bookProgressId} = useParams()
    const [bookProgressReadings, setBookProgressReadings] = useState([])

    const getBookProgressReadings = async (bookProgressId) => {
        let res = await fetch('http://'+ API_URL + `/bookProgress/${bookProgressId}/readings`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setBookProgressReadings(json)
        }
    }

    useEffect(() => {
        getBookProgressReadings(bookProgressId)
    }, [])

    const BookProgressReadingsTable = () => {
        let rows = bookProgressReadings.map(r => <ReadingRow reFetchReads={getBookProgressReadings} bookProgressId={bookProgressId} reading={r} key={r.id}/>)

        return(
            <>
            <Link to={`/bookProgress/${bookProgressId}/read/create`}>Create Reading Session</Link>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Page Count</th>
                        <th>Date Made</th>
                        <th>Read Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{ rows }</tbody>
            </table>
            </>
        )
    }

    return(<>
        {bookProgressReadings && <BookProgressReadingsTable/>}
        <Link to={`/bookProgress/${bookProgressId}`}>Back to Book Progress</Link>
    </>)
}