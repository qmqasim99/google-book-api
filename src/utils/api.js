import axios from "axios";

const googleBooksApi = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export const getBooks = (searchTerm) => {
  console.log("search term", searchTerm);
  return googleBooksApi.get(`/?q=${searchTerm}`).then((res) => {
    return res.data;
  });
};

export const getBook = (searchTerm) => {
  console.log("search term", searchTerm);
  return googleBooksApi.get(`/${searchTerm}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
};

export const patchUser = (username, inc_stars) => {
  return googleBooksApi
    .patch(`/users/${"Brian Cox"}`, { inc_stars })

    .then((res) => {
      return res.data.user;
    });
};
