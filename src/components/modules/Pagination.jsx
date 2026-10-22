
import styles from "./Pagination.module.css"

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return; // I assumed the whole data is 10 pages not more than that
    setPage((page) => page + 1);
  };

  return (
    <div>
      <button onClick={previousHandler}>previous</button>
      <p style={{ color: page === 1 ? "red" : "inherit" }}>1</p>
      <p style={{ color: page === 2 ? "red" : "inherit" }}>2</p>
      <span>...</span>
      {page > 2 && page < 9 && (
        <>
          <p>{page}</p>
          <span>...</span>
        </>
      )}
      <p>9</p>
      <p>10</p>
      <button onClick={nextHandler}>next</button>
    </div>
  );
}

export default Pagination;
