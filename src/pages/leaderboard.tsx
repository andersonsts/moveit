/* eslint-disable */
import styles from 'styles/pages/Leaderboard.module.css'

import { AuthWrapper } from "layouts/AuthWrapper";

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

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
            {data.map(item => (
              <tr key={item}>
                <td>1</td>
                <td>
                  <div>
                    <img 
                      src="https://github.com/diego3g.png" 
                      alt="Diego Fernandes" 
                    />
                    <div>
                      <span>Diego Fernandes</span>
                      <p>
                        <img src="icons/up.svg" alt="Level" />
                        Level 1
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <b>187</b> completados
                </td>
                <td>
                  <b>12312</b> xp
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AuthWrapper>
  )
}