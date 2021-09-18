/* eslint-disable */
import styles from 'styles/components/LoginInput.module.css'

export function LoginInput () {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Digite seu username" />
      <button type="button" onClick={() => null}>
        <img src="icons/arrow.svg" alt="Arrow icon" />
      </button>
    </div>
  )
}