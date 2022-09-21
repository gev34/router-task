import { Outlet } from "react-router-dom"
import './Layout.css'
import { CustomLink } from "./CustomLink"

  
//const setActive = ({ isActive }) => isActive ? 'activeLink' : '' 

const Layout = () => {
    return (
        <>
        <header>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact Us</CustomLink>
        </header>
        <main>
            <Outlet/>        
        </main>
        
           <footer>Created By Gev</footer> 
        </>
    )
}
export {Layout}