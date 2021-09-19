/* eslint-disable */

import { useState } from 'react'

import styles from 'styles/components/Pagination.module.css'

const renderData = data => {
  return (
    <>
      
    </>
  )
} 

export function Pagination ({ 
  currentPageData = 1, 
  itemsPerPage = 5, 
  pageNumberLimit = 5, 
  maxPageNumberLimitData = 5,
  minPageNumberLimitData = 0,
  data = []
}) {
  const [currentPage, setCurrentPage] = useState(currentPageData)

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(maxPageNumberLimitData)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(minPageNumberLimitData)

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
  }

  const pages = []
  for (let i = 1; i <= Math.ceil(data.length/itemsPerPage); i++) {
    pages.push(i)
  }
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const renderPageNumbers = pages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <div 
          key={number} 
          id={number} 
          onClick={handleClick}
          className={currentPage == number ? `${styles.active}` : `${styles.normalItem}`}
        />
      )
    } 

    return null;
  })

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1)

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1)

    if ((currentPage - 1)%pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>
  }

  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>
  }

  return (
    <>
      {renderData(currentItems)}
      <div className={styles.container}>
        {/* <ul className={styles.pageNumbers}>
          <li>
            <button onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true : false}>Prev</button>  
          </li>   */}
          {/* {pageDecrementBtn} */}
          {renderPageNumbers}
          {/* {pageIncrementBtn} */}
          {/* <li>
            <button onClick={handleNextBtn}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
            >Next</button>  
          </li>
        </ul> */}
      </div>
    </>
  )
}