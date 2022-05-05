import React from "react";
import {Link, Outlet} from "react-router-dom";

function Layouts(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       
        
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link " to='/'>Home </Link>
                    <Link className="nav-item nav-link " to='/addNewDeveloper'>AddDeveloper</Link>
                    <Link className="nav-item nav-link " to='/AllDevelopers'>AllDevelopers</Link>
                </div>
            </div>
          
        </nav>
       <Outlet/>
        </>
    )
}
export default Layouts