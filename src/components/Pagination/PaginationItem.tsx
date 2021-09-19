import React from 'react'

import styles from 'styles/components/Pagination.module.css'

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem ({ 
  isCurrent = false, 
  number,
  onPageChange
}: PaginationItemProps) {
  return isCurrent 
    ? <button className={`${styles.button} ${styles.currentButton}`}>
        {number}
      </button> 
    : <button className={`${styles.button} ${styles.normalButton}`} onClick={() => onPageChange(number)}>
        {number}
      </button>
}