import { GetServerSideProps } from 'next'

import { CompletedChallenges } from 'components/CompletedChallenges'
import { Countdown } from "components/Countdown";
import { ExperienceBar } from "components/ExperienceBar";
import { Profile } from 'components/Profile';
import { ChallengeBox } from "components/ChallengeBox";
import { AuthWrapper } from 'layouts/AuthWrapper';
import { CountdownProvider } from 'contexts/CountdownContext';

import { ChallengesProvider } from 'contexts/ChallengesContext'

import styles from 'styles/pages/Home.module.css'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider {...props}>
      <AuthWrapper title="Home">
        <ExperienceBar />

        <CountdownProvider>
          <section className={styles.content}>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </AuthWrapper>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies
  
  return {
    props: { 
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted), 
    }
  }
}