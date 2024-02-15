import { Outlet, Link } from "react-router-dom";
import './Layout.css'

export default function Layout() {
  return (
    <div className="Layout">
      <nav>
        <img src='./src/Images/frog.png'></img>
        <Link to='/'>UnderCooked</Link>
      </nav>
      <Outlet />
    </div>
  )

}

