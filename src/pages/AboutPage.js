import { useState , useEffect } from "react"
import { Link } from "react-router-dom"
import './AboutPage.css'
const AboutPage = () => {
    const [data , setData] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((res) => setData(res))
    } ,[])

    // console.log(data)
    return (
        <div>
        <h3>News</h3>
        {
          data && data.map((post) => {
                return(
                <Link key={post.id} to = {`/about/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
                )
            })
        }

        </div>
    )
}
export {AboutPage } 