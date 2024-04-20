import React, { useState } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <li key={i} className={currentPage === i ? 'active' : ''} onClick={() => handleClick(i)}>
          {i}
        </li>
      );
    }
    return paginationItems;
  };

  return (
    <div>
      <ul className="pagination">
        {renderPaginationItems()}
      </ul>
    </div>
  );
};

export default Pagination;
