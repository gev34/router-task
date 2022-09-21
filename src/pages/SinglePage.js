import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const SinglePage = () => {
    const {id} = useParams();

    const [data , setData] = useState();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((res) => setData(res))
    } ,[])

    return (
        <div>
            { data && (
            <>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </>
            )}
        </div>
    )
}
export {SinglePage}