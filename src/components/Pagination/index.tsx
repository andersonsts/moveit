import { PaginationItem } from './PaginationItem'

import styles from 'styles/components/Pagination.module.css' 

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]  
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0)
}

const Pagination = ({ 
  totalCountOfRegisters,
  registersPerPage = 4,
  currentPage = 1,
  onPageChange 
}: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage); // rounded to up

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)  
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))  
    : []   

  return (
    <div className={styles.container}>
      <div id="box">
        <strong>{(currentPage - 1) * registersPerPage}</strong> - <strong>{Math.min(currentPage * registersPerPage, totalCountOfRegisters)}</strong> de <strong>{totalCountOfRegisters}</strong>
      </div>
      <div id="row-inside">
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />
            {currentPage > (2 + siblingsCount) && (
              <span style={{ margin: '0px 8px' }}>...</span>
            )}
          </>
        )}
        
        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
        })}
        
        <PaginationItem number={currentPage} isCurrent onPageChange={onPageChange} />
        
        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <span>...</span>
            )}
            <PaginationItem number={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </div>
    </div>
  )
}

export { Pagination }