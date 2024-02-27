import { Outlet, Link } from "react-router-dom";
import './Home.css'

export default function Home () {
return (
  <div className="home">
    <Link to={`/recipes`}><button className="ing">I'm hungry</button></Link>
    <Outlet />
  </div>
)
  
}