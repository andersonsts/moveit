/* eslint-disable */
import styles from 'styles/components/LeaderboardList.module.css'

import { LeaderboardItem } from './LeaderboardItem'

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

export function LeaderboardList ({ data }: DataProps) {
  return (
    <div className={styles.list}>
      {data.map(item => <LeaderboardItem key={item.id} {...item} />)}
    </div>
  )
}