export default function Button({ classes, children, onClick }) {
  return (
    <button className={`btn ${classes}`} onClick={onClick}>
      {children}
    </button>
  );
}
