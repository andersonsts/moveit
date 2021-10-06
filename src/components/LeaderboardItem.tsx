/* eslint-disable */
import styles from 'styles/components/LeaderboardItem.module.css'

interface DataItem {
  id: number
  name: string
  level: number
  photo: string
  completed: number
  xp: number
}

export function LeaderboardItem ({ id, name, level, photo, completed, xp }: DataItem) {
  return (
    <div className={styles.card}>
      <img src={photo} alt={name} />
      <div className={styles.information}>
        <span>{id}</span>
      </div>
      <div className={styles.informationItem}>
        <span className={styles.userName}>
          {name}
        </span>
        <p>
          <img src="icons/up.svg" alt="Level" />
          Level {level}
        </p>
      </div>
      <div className={styles.informationItem}>
        <p><b>{xp}</b>XP</p>
        <p><b>{completed}</b>completados</p>
      </div>
    </div>
  )
}