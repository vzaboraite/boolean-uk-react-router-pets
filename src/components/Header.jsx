import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
