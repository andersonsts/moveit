import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/Countdown.module.css'

export function Countdown () {
  const { 
    minutes,
    seconds,
    startCountdown,
    resetCountdown,
    isActive,
    hasFinished 
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') // padStart: 0 => 00...
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const ComponentByStatus = () => {
    if (hasFinished) {
      return (
        <button 
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
        </button>
      )
    }
    if (isActive) {
      return (
        <button 
          type="button" 
          onClick={resetCountdown} 
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
        >
          Abandonar ciclo
        </button>
      )
    }
    return (
      <button 
        type="button" 
        onClick={startCountdown} 
        className={styles.countdownButton}
      >
        Inicar um ciclo
      </button>
    )
  }
 
  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <ComponentByStatus />
    </div>
  )
}