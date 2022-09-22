import { useState , useEffect } from "react"
import { Link , useSearchParams } from "react-router-dom"
import { AboutFilter } from "./AboutFilter";
import './AboutPage.css'
const AboutPage = () => {
    const [data , setData] = useState();
    const [searchParams , setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

  
    const startsFrom = latest ? 80 : 1;


    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((res) => setData(res))
    } ,[])

    // console.log(data)
    return (
        <div>
        <h3>News</h3>
       <AboutFilter postQuery = {postQuery} latest = {latest}  setSearchParams = {setSearchParams}/>
        {
          data && 
          data.filter((post) =>post.title.includes(postQuery) && post.id >= startsFrom)
            .map((post) => {
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