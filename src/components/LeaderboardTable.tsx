/* eslint-disable */
import { LeaderboardList } from './LeaderboardList'

import styles from 'styles/components/LeaderboardTable.module.css'

interface DataItem {
  id: number
  name: string
  level: number
  photo: string
  completed: number
  xp: number
}

interface DataProps {
  data: Array<DataItem>
}

export function LeaderboardTable ({ data }: DataProps) {
  return (
    <>
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
      <LeaderboardList data={data} />
    </>
  )
}