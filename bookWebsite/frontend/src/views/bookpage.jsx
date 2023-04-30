import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../data/context/BooksContext";
import Navbar from "../components/Navbar";
import BookDetails from "../components/BookDetails";
import "../css/styles.css";

export default function BookPage() {
  const API = process.env.REACT_APP_API_URL;
  const WEBSITE = process.env.REACT_APP_WEBSITE_LINK;

  const { id } = useParams();

  const {GetBook, bookData, setIsLoading} = useContext(BooksContext);

  useEffect(() => {
      GetBook(id);

  }, [id]);

  return (
    <>
    <Navbar/>
      <BookDetails bookData={bookData}>test</BookDetails>
    </>
  );
}
