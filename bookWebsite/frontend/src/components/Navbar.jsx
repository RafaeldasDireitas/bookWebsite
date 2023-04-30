import { navbarLinks } from "../data/navbar_links.js";
import "../css/styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md container-bg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Bookwser
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navbarLinks.map((link) => {
              return (
                <li className="nav-item" key={link.text}>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
