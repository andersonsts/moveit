/* eslint-disable */
import { useState } from 'react'

import styles from 'styles/components/LoginInput.module.css'

interface LoginInput {
  onClick: () => void;
}

export function LoginInput ({ onclick }) {
  const [value, setValue] = useState('')

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        value={value}
        placeholder="Digite seu username"
        onChange={({ target }) => setValue(target.value)} 
      />
      <button 
        type="button" 
        onClick={onclick} 
        className={!!value ? styles.filledButton : styles.normalButton}
      >
        <img src="icons/arrow.svg" alt="Arrow icon" />
      </button>
    </div>
  )
}