import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../utils/api";

const BookView = () => {
  const { book_id } = useParams();
  //const book_id = "ppjUtAEACAAJ";

  const [book, setBook] = useState({});
  // let book = {};

  useEffect(() => {
    getBook(book_id).then((singleBook) => {
      console.log("single book volumeInfo", singleBook.volumeInfo);

      setBook(singleBook.volumeInfo);
    });
  }, []);

  console.log("book ", book);

  return (
    <main>
      <h1>Book View</h1>
      <h2>{book.title}</h2> <h2>{book.authors}</h2>{" "}
    </main>
  );
};

export default BookView;
