import { useContext } from 'react';

import { ChallengesContext } from 'contexts/ChallengesContext';

import styles from 'styles/components/CompletedChallenges.module.css';

export function CompletedChallenges () {
  const { challengesCompleted } = useContext(ChallengesContext)
  
  const formattedChallengesCompleted = String(challengesCompleted).padStart(2, '0').split('')

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{formattedChallengesCompleted}</span>
    </div>
  )
}