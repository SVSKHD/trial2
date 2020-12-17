import React from "react"
import Footer from "./Footer"
import NavBar from "./Navbar"

const Layout = (props) =>{
    return(
        <div>
       <NavBar/>
       {props.children}
       <Footer/>
       </div>
    )
}
export default Layout