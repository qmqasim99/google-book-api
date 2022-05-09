import { Link } from "react-router-dom";
import BookList from "./BookList";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Search Books</Link>

      <Link to="/about">About this App</Link>
      <a href="https://github.com/qmqasim99/google-book-api" target="_blank">
        Go to Github
      </a>
    </nav>
  );
};

export default Nav;
