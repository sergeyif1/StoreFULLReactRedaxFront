import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';

export const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <div>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(e) => onPageChange(e.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={4}
        forcePage={pageCount - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
export default Pagination;
