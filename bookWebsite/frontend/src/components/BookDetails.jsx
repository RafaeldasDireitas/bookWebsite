import "../css/styles.css";

export default function BookDetails({ bookData }) {
  const WEBSITE = process.env.REACT_APP_WEBSITE_LINK;
  //src={WEBSITE + bookData.image}

  return (
    <>
      <div className="d-flex p-2">
        <img
          src={WEBSITE + bookData.image}
          className="img-fluid bookDetails-max-settings m-5"
          alt="Responsive image"
        />
        <div className="flex-column">
          <h1 className="m-5 p-5">{bookData.title}</h1>
          <h3 className="text-center">{bookData.author}</h3>
          <h2 className="m-5 p-5">{bookData.description}</h2>
        </div>
      </div>
    </>
  );
}
