import clsx from 'clsx';
import React from 'react';
import { useWindowWidth } from './useWindowWidth';

import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const width = useWindowWidth();
  const isMobile = width < 768;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 1) return [1];

    if (isMobile) {
      if (currentPage > 2) pages.push(1, '...');
      if (currentPage > 1) pages.push(currentPage - 1);
      pages.push(currentPage);
      if (currentPage < totalPages) pages.push(currentPage + 1);
      if (currentPage < totalPages - 1) pages.push('...', totalPages);
    } else {
      if (currentPage > 2) pages.push(1, '...');
      if (currentPage > 1) pages.push(currentPage - 1);
      pages.push(currentPage);
      if (currentPage < totalPages) pages.push(currentPage + 1);
      if (currentPage < totalPages - 1) pages.push('...', totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={styles.arrow}
      >
        &laquo;
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.arrow}
      >
        &lsaquo;
      </button>

      {pageNumbers.map((page, idx) =>
        typeof page === 'number' ? (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            className={clsx(styles.pageButton, {
              [styles.active]: page === currentPage,
            })}
          >
            {page}
          </button>
        ) : (
          <span key={idx} className={styles.dots}>
            ...
          </span>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.arrow}
      >
        &rsaquo;
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={styles.arrow}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
