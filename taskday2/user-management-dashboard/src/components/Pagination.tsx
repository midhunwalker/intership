import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
 
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - 1, 1);
      let endPage = Math.min(currentPage + 1, totalPages);
      
      if (currentPage <= 2) {
        endPage = Math.min(maxPagesToShow, totalPages);
      } else if (currentPage >= totalPages - 1) {
        startPage = Math.max(totalPages - maxPagesToShow + 1, 1);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      if (startPage > 1) {
        pages.unshift(-1); 
        pages.unshift(1);  
      }
      
      if (endPage < totalPages) {
        pages.push(-2); 
        pages.push(totalPages); 
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex items-center justify-center py-4" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`mx-1 flex items-center justify-center px-3 py-2 rounded-md text-sm
                   ${currentPage === 1 
                     ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                     : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      {pageNumbers.map((page, index) => (
        <React.Fragment key={index}>
          {page === -1 || page === -2 ? (
            <span className="mx-1 px-3 py-2 text-gray-500 dark:text-gray-400">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page)}
              className={`mx-1 px-3 py-2 rounded-md text-sm font-medium 
                         ${currentPage === page
                           ? 'bg-blue-600 text-white dark:bg-blue-700'
                           : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              aria-current={currentPage === page ? "page" : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`mx-1 flex items-center justify-center px-3 py-2 rounded-md text-sm
                   ${currentPage === totalPages 
                     ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                     : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  );
};

export default Pagination;