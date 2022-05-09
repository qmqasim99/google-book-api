import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { getBooks } from "../utils/api";
import BookCard from "./BookCard";

const BookList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [rating, setRating] = useState([["Title", "Rating"]]);

  // effect ()=>{}  >> what do you want useEffect to do
  // dependencies list []
  // NO depedencies array = on each render
  // [] = on mount

  // useEffect(() => {
  //   setIsLoading(true);
  //   setIsError(false);
  //   fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setIsLoading(false);
  //       setBooks(data.items);
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       setIsError(true);
  //     });
  // }, [searchTerm]);

  const data1 = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];

  const data = [
    ["Title", "Rating"],
    ["React", 4],
    ["React 2", 5],
  ];

  const options = {
    chart: {
      title: "Books Ratings",
      subtitle: "",
    },
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getBooks(searchTerm)
      .then((bookResult) => {
        console.log("single book volumeInfo", bookResult);
        setIsLoading(false);
        setBooks(bookResult.items);
        const ratingArray = [["Title", "Rating"]];
        bookResult.items.map((book) => {
          return book.volumeInfo.averageRating
            ? ratingArray.push([
                book.volumeInfo.title,
                book.volumeInfo.averageRating,
              ])
            : null;
        });

        setRating(ratingArray);
        console.log("books ", books);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [searchTerm]);

  return (
    <>
      {isError ? <p>Woops! there was an error </p> : null}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <p>{searchTerm} books</p>
          <ul>
            {books.map((book) => {
              return <BookCard book={book} key={book.id} />;
            })}
          </ul>
        </>
      )}
      <section>
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={rating}
          options={options}
        />
      </section>
    </>
  );
};

export default BookList;
