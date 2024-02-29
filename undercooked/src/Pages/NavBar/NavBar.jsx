import { useNavigate } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

    const navigate = useNavigate();

    return(
        <>
            <div className="navBar">
                <div className="navButtons">
                    <button className="navButton"onClick={() => navigate('/myPantry')}>Pantry</button>
                    <button className="navButton" onClick={() => navigate('/recipes')}>Recipes</button>
                    <button className="navButton">Favourite Recipes</button>
                    <button className="navButton">Shopping List</button>
                </div>
            </div>
        </>
    )
}

export default NavBar
