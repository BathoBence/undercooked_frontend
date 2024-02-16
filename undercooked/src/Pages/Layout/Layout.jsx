import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import NavBar from "../NavBar/Navbar";

export default function Layout() {
  return (
    <div className="Layout">
      <nav>
        <img src="./src/Images/frog.png"></img>
        <Link to="/">UnderCooked</Link>
      </nav>
      <NavBar />
      <Outlet />
    </div>
  );
}
