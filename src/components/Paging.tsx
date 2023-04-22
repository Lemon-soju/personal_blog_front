import React from "react";
import Pagination from "react-js-pagination";

interface PagingProps {
  page: number;
  count: number;
  setPage: (pageNumber: number) => void;
}

const Paging: React.FC<PagingProps> = ({ page, count, setPage }) => {
  return (
    <div style={{ height: "10%" }}>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={setPage}
      />
    </div>
  );
};

export default Paging;
