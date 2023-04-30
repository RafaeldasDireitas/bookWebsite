import Navbar from "../components/Navbar";
import Book from "../components/Book";
import { useContext } from "react";
import "../css/styles.css";
import { BooksContext } from "../data/context/BooksContext";

export default function Home() {
  const {books} = useContext(BooksContext);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="container container-bg mt-5 pt-3 col-xs-6">
        {books.map((book) => {
          return <Book data={book} key={book.id}/>;
        })}
      </div>
    </>
  );
}
