import clsx from 'clsx';
import { FC } from 'react';
import { useWindowWidth } from './useWindowWidth';

import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const width = useWindowWidth();
  const isMobile = width < 768;

  const getPageNumbers = (): number[] => {
    if (isMobile) {
      return currentPage === totalPages
        ? [totalPages - 1, totalPages]
        : [currentPage, currentPage + 1];
    }

    return currentPage >= totalPages - 1
      ? [totalPages - 1, totalPages]
      : [currentPage, currentPage + 1, currentPage + 2];
  };

  type shouldShowDotsType = (
    totalPages: number,
    currentPage: number
  ) => boolean;

  const shouldShowDots: shouldShowDotsType = (totalPages, currentPage) => {
    return (
      totalPages > 2 &&
      currentPage !== totalPages &&
      currentPage !== totalPages - 1
    );
  };

  const pageNumbers: number[] = getPageNumbers();

  return (
    <div className={styles.pagination}>
      <div className={styles.arrowsWrap}>
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
      </div>
      <div className={styles.pageButtonsWrap}>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={clsx(styles.pageButton, {
              [styles.active]: page === currentPage,
            })}
          >
            {page}
          </button>
        ))}
        {shouldShowDots(totalPages, currentPage) && (
          <span className={styles.dots}>...</span>
        )}
      </div>
      <div className={styles.arrowsWrap}>
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
    </div>
  );
};

export default Pagination;
