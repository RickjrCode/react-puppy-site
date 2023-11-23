import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="nav-container">
      <h1>Puppy Bowl</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Add A Puppy</Link>
        </li>
      </ul>
    </div>
  );
}
