import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'

import { LevelUpModal } from 'components/LevelUpModal'

import challenges from 'data/challenges.json'

interface Challenge {
  type: 'body' | 'eye',
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number; 
  activeChallenge: Challenge
  levelUp: () => void;
  resetChallenge: () => void;
  startNewChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider ({ 
  children, 
  ...rest 
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
  const [activeChallenge, setActiveChallenge] = useState({
    "type": "body",
    "description": "Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima",
    "amount": 140
  })
  const [isLevelUpModalOpen, setIsLevelModalOpen] = useState(false)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  const experienceToNextLevel = Math.pow((level + 1) * 8, 2)

  const levelUp = () => {
    setLevel(prev => prev + 1)
    setIsLevelModalOpen(true)
  }

  function startNewChallenge () {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
  
    setActiveChallenge(challenge)

    /** You need insert 'notification.mp3' file on public folder */
    // new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio!', { 
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge () {
    setActiveChallenge(null)
  }

  function completeChallenge () {
    if (!activeChallenge) return;

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(prev => prev + 1)
  }

  function closeLevelUpModal () {
    setIsLevelModalOpen(false)
  }

  return (
    <ChallengesContext.Provider 
      value={{ 
        level, 
        currentExperience, 
        challengesCompleted, 
        levelUp,
        resetChallenge,
        startNewChallenge,
        closeLevelUpModal,
        experienceToNextLevel,
        activeChallenge,
        completeChallenge
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}
