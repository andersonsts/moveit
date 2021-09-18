/* eslint-disable */
import styles from 'styles/pages/Leaderboard.module.css'

import { AuthWrapper } from "layouts/AuthWrapper";

const DATA = Array.from({ length: 5 }, (_, index) => index).map(item => ({
  id: item + 1,
  name: 'Diego Fernandes',
  level: item + 3,
  photo: 'https://github.com/diego3g.png',
  completed: 1231,
  xp: 12
}))

export default function Leaderboard () {
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
            {DATA.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
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
      </div>
    </AuthWrapper>
  )
}