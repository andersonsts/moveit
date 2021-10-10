/* eslint-disable */
import { useEffect, useState } from 'react';

import styles from 'styles/pages/Leaderboard.module.css'

import { Page } from 'components/Page';
import { AuthWrapper } from 'layouts/AuthWrapper';

import DATA from 'data/users.json'
import { LeaderboardTable } from 'components/LeaderboardTable';

const REGISTER_PER_PAGE = 4

export default function Leaderboard () {
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState(DATA) 

  useEffect(() => {
    const startIndx = (currentPage - 1) * REGISTER_PER_PAGE
    const endIndx =  REGISTER_PER_PAGE * currentPage
    const updatedData = DATA.slice(startIndx, endIndx)
    
    setData(updatedData)
  }, [currentPage])

  return (
    <AuthWrapper title="Leaderboard">
      <div className={styles.container}>
        <h1>Leaderboard</h1>
        <LeaderboardTable data={data} />
        <Page 
          totalRegisters={DATA.length}
          perPage={REGISTER_PER_PAGE}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </AuthWrapper>
  )
}