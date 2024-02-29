import { Outlet, Link, useNavigate } from "react-router-dom";
import './Layout.css'
import NavBar from "../NavBar/Navbar";

const Layout = () => {

  const navigate = useNavigate();

  return (
    <div className="layout">
      <div className="header">
        <div className="title_container">
          <img src='./src/Images/frog.png'></img>
          <Link to='/'><h2 className="title">UNDERCOOKED</h2></Link>
        </div>
        <div className="header_button_container">
          <button className="layout_button" onClick={() => navigate("/register")}>Sign up</button>
          <button className="layout_button" onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout;

