/* eslint-disable */
import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'

import styles from 'styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close modal" />
        </button>

        <button type="button" style={{ 
          width: '100%',
          right: '0px',
          bottom: '0px',
          top: '308px',
          color: '#2AA9E0',
          fontSize: '20px', 
          height: '80px',
          fontWeight: 600,
          lineHeight: '24px',
          borderRadius: '0px 0px 5px 5px',
          background: '#F5FCFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Compartilhar no Twitter
          <img src="icons/twitter.svg" alt="Twitter" style={{ marginLeft: '16px' }} />
        </button>
      </div>
    </div>
  )
}