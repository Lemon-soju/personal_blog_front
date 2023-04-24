import React from "react";
import Pagination from "react-js-pagination";

interface PagingProps {
  page: number;
  count: number;
  setPage: (pageNumber: number) => void;
}

const Paging: React.FC<PagingProps> = ({ page, count, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setPage}
    />
  );
};

export default Paging;
