function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({
  totalpages,
  currentPage,
  handlePagechange
}) {
  let pages = createArrayOfSize(totalpages).map((a,i) => {
    <button data-testid="page-btn" disabled={currentPage===i+1} onClick={()=>handlePagechange(i=1)}>{i+1}</button>;
  });
  return <div>{pages}</div>;
}

export default Pagination;
