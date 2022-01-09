const BookCard = ({ book }) => {
  return (
    <li className="book-card">
      <p>{book.volumeInfo.title}</p>
      <p>{book.volumeInfo.publishedDate}</p>
      {book.volumeInfo &&
      book.volumeInfo.imageLinks &&
      book.volumeInfo.imageLinks.thumbnail ? (
        <img
          src={book.volumeInfo.imageLinks.smallThumbnail}
          alt={book.volumeInfo.title}
        />
      ) : (
        <img
          src="https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg="
          alt=""
        />
      )}
    </li>
  );
};

export default BookCard;
