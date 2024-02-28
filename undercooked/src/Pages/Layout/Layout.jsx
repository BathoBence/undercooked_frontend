import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import NavBar from "../NavBar/Navbar";

export default function Layout() {
  return (
    <div className="Layout">
      <nav>
        <img src='./src/Images/frog.png'></img>
        <Link to='/'>UnderCooked</Link>
        <Link to={`/register`}><button className="layoutbutton">Sing-in</button></Link>
        <Link to={`/login`}><button className="layoutbutton">Login</button></Link>
      </nav>
      <NavBar />
      <Outlet />
    </div>
  )

}

