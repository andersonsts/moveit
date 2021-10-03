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
      <div className={styles.informations}>
        <span>{id}</span>
      </div>
    </div>
  )
}