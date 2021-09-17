import { useState, useEffect } from 'react'

import styles from '../styles/components/Countdown.module.css'

export function Countdown () {
  const [time, setTime] =  useState(25 * 60)
  const [isActive, setIsActive] = useState(false)

  const minutes = Math.floor(time / 60); // round down...
  const seconds = time % 60; // rest of division...

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') // padStart: 0 => 00...
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(prevState => prevState - 1)
      }, 1000)
    }
  }, [isActive, time])

  function startCountdown () {
    setIsActive(true)
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

      <button type="button" onClick={startCountdown} className={styles.countdownButton}>
        Iniciar um ciclo
      </button>
    </div>
  )
}