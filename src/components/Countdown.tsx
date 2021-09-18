/* eslint-disable */

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
          className={`${styles.countdownButton} ${styles.countdownButtonFinished}`}
        >
          Ciclo encerrado
          <img src="/icons/check_circle.svg" alt="Check circle" />
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
          <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
          </svg>
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
        <img src="/icons/play.svg" alt="Play" style={{ marginLeft: '16px' }} />
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