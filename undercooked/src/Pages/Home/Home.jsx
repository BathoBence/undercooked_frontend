import { Outlet, Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Link to={`/ingredients`}>
        <button className="ing">Ingredients</button>
      </Link>
      <Outlet />
    </div>
  );
}
