import '../css/styles.css';
import { Link } from 'react-router-dom';

export default function Book({data}) {
  const WEBSITE = process.env.REACT_APP_WEBSITE_LINK;

  return (
    <figure className="figure">
      <Link to={`/book/${data.id}`}>
      <img
        src={WEBSITE + data.image}
        className="figure-img img-fluid rounded p-4 max-settings"
        alt="A generic square placeholder image with rounded corners in a figure."
      />
      </Link>
      <figcaption className="figure-caption text-center fs-6 fw-bold"> {data.title} </figcaption>
    </figure>
  );
}
