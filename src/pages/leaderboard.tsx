/* eslint-disable */
import { useEffect, useState } from 'react';

import styles from 'styles/pages/Leaderboard.module.css'

import { AuthWrapper } from "layouts/AuthWrapper";
import { Pagination } from 'components/Pagination';

const REGISTER_PER_PAGE = 4
const DATA = [
  {
    id: 1,
    name: 'Diego',
    level: 4,
    photo: 'https://github.com/diego3g.png',
    completed: 1231,
    xp: 12
  },
  {
    id: 2,
    name: 'Diego',
    level: 4,
    photo: 'https://github.com/diego3g.png',
    completed: 1231,
    xp: 12
  },
  {
    id: 3,
    name: 'Diego',
    level: 4,
    photo: 'https://github.com/diego3g.png',
    completed: 1231,
    xp: 12
  },
  {
    id: 4,
    name: 'Diego',
    level: 4,
    photo: 'https://github.com/diego3g.png',
    completed: 1231,
    xp: 12
  },
  {
    id: 5,
    name: 'Diego',
    level: 4,
    photo: 'https://github.com/diego3g.png',
    completed: 1231,
    xp: 12
  },
  {
    id: 6,
    name: 'Diego',
    level: 4,
    photo: 'https://github.com/diego3g.png',
    completed: 1231,
    xp: 12
  },
  {
    id: 7,
    name: 'Diego',
    level: 4,
    photo: 'https://github.com/diego3g.png',
    completed: 1231,
    xp: 12
  },
  {
    id: 8,
    name: 'Diego',
    level: 4,
    photo: 'https://github.com/diego3g.png',
    completed: 1231,
    xp: 12
  }
]

export default function Leaderboard () {
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState(DATA) 

  useEffect(() => {
    const startIndx = (currentPage - 1) * REGISTER_PER_PAGE
    const endIndx =  REGISTER_PER_PAGE * currentPage
    const updatedData = DATA.slice(startIndx, endIndx)
    
    setData(updatedData)
  }, [currentPage])

  console.log('data', data)

  return (
    <AuthWrapper title="Leaderboard">
      <div className={styles.container}>
        <h1>Leaderboard</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Posição</th>
              <th>Usuário</th>
              <th>Desafios</th>
              <th>Experiência</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <div>
                    <img 
                      src={item.photo} 
                      alt={item.name} 
                    />
                    <div>
                      <span>{item.name}</span>
                      <p>
                        <img src="icons/up.svg" alt="Level" />
                        Level {item.level}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <b>{item.completed}</b> completados
                </td>
                <td>
                  <b>{item.xp}</b> xp
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination 
          totalCountOfRegisters={DATA.length}
          registersPerPage={REGISTER_PER_PAGE}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </AuthWrapper>
  )
}