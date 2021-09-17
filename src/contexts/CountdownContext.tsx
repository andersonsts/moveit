import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

const INITIAL_TIME = 0.1 * 60 // 25 minutes
let countdownTimeout: NodeJS.Timeout

export function CountdownProvider(props: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext)
  
  const [time, setTime] =  useState(INITIAL_TIME)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60); // round down...
  const seconds = time % 60; // rest of division...

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
    setHasFinished(false)
  }

  return (
    <CountdownContext.Provider value={{ 
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }} {...props} />
  )
}