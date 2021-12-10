import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar() {
  const valueProps = useTheme();

  return (
    <div className="navbar" style={{ background: valueProps.color }}>
      <nav>
        <Link className="brand" to="/">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
