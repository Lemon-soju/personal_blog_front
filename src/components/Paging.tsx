import React from "react";
import Pagination from "react-js-pagination";

interface PagingProps {
  page: number;
  count: number;
  setPage: (pageNumber: number) => void;
  unit: number;
}

const Paging: React.FC<PagingProps> = ({ page, count, setPage, unit }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={unit}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setPage}
    />
  );
};

export default Paging;
