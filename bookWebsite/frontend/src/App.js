import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import BookPage from "./views/bookpage";
import { BooksProvider } from "./data/context/BooksContext";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
