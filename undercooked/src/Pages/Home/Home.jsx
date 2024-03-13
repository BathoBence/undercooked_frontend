import { Outlet, Link } from "react-router-dom";
import './Home.css'

const Home = () => {
return (
  <div className="home">
    <Link to={`/im_hungry`}><button className="ing">I'm hungry</button></Link>
    <Outlet />
  </div>
)
}

export default Home;