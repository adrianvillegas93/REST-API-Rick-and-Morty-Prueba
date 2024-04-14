function NavPage({ page, setPage }) {
    
  function beforePage() {
    if (page <= 1) {
      console.log(`No existe la pagina anterior a ${page}`);
    } else {
      setPage(page - 1);
    }
  }

  return (
    <header className="d-flex justify-content-between align-items-center py-4">
      <button className="btn btn-success btn-sm" onClick={beforePage}>
        Previous Page
      </button>

      <p>Actual Page: {page}</p>

      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)}
      >
        Next Page: {page + 1}
      </button>
    </header>
  );
}

export default NavPage;
