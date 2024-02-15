import { useEffect, useState } from "react";
import './NavBar.css'

function NavBar(){
    return(
        <>
            <div className="navBar">
                <div className="navButtons">
                    <button className="navButton">Pantry</button>
                    <button className="navButton">Recipes</button>
                    <button className="navButton">Favourite Recipes</button>
                    <button className="navButton">Shopping List</button>
                </div>
            </div>
        </>
    )
}

export default NavBar
