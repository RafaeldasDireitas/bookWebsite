import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

      console.log(isLoading);
    // axios
    //   .post("http://127.0.0.1:8000/api-auth", obj)
    //   .then((response) => {
    //     console.log("done");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [isLoading]);

  function GetBook(id) {
    setBookData(books.filter(book => book.id == id)[0]);
  }

  return (
    <BooksContext.Provider value={{ books, GetBook, bookData, setIsLoading}}>
      {children}
    </BooksContext.Provider>
  );

};
