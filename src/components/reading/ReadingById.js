import { useEffect, useState } from 'react';
import { API_URL } from "../../constants";
import { useParams } from "react-router-dom"

export const Reading = () =>{
    let {readingId} = useParams()
    const [reading, setReading] = useState([])

    const getRead = async(readingId) => {
        let res = await fetch('http://'+ API_URL + `/read/${readingId}`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setReading(json)
    }
}

useEffect(() => {
    getRead(readingId)
}, [])

return(
    <div>
        <h1>Reading id: {reading.id}</h1>
        <b>Book Progress id: {reading.bookProgressId}</b>
        <b><br/>Page Count: {reading.pageCount}</b>
        <b><br/>Date Made: {reading.dateMade}</b>
        <b><br/>Read Time: {reading.readTime}</b>
    </div>
)
}