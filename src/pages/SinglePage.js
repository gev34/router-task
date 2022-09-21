import { useParams , useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const SinglePage = () => {
    const {id} = useParams();
    console.log(useLocation())
    const [data , setData] = useState();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((res) => setData(res))
    } ,[])

    const navigate = useNavigate()

    const goBack = () => {
        return navigate(-1)
    }
    return (
        <div>
            { data && (
            <>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </>
            )}
                   <button onClick={goBack}>Go Back</button>
        </div>
    )
}
export {SinglePage}