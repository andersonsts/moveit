import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout
const INITIAL_TIME = 0.1 * 60 // 25 minutes

export function Countdown () {
  const { startNewChallenge } = useContext(ChallengesContext)
  
  const [time, setTime] =  useState(INITIAL_TIME)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60); // round down...
  const seconds = time % 60; // rest of division...

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') // padStart: 0 => 00...
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(prevState => prevState - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, time])

  function startCountdown () {
    setIsActive(true)
  }

  function resetCountdown () {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(INITIAL_TIME)
  }

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