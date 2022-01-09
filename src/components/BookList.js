import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BookList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // effect ()=>{}  >> what do you want useEffect to do
  // dependencies list []
  // NO depedencies array = on each render
  // [] = on mount

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setBooks(data.items);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [searchTerm]);

  return (
    <section>
      {isError ? <p>Woops! there was an error </p> : null}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <p>{searchTerm} books</p>
          <ul>
            {books.map((book) => {
              return <BookCard book={book} />;
            })}
          </ul>
        </>
      )}
    </section>
  );
};

export default BookList;
