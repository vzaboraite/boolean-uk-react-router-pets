import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/pets">Pets</Link>
        </li>
      </ul>
    </main>
  );
}
