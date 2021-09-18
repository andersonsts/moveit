// import styles from 'pages/Leaderboard.module.css'
import Head from 'next/head'

import { AuthWrapper } from "layouts/AuthWrapper";

export default function Leaderboard () {
  return (
    <AuthWrapper title="Leaderboard">
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <div>
        <h1>Leaderboard</h1>
      </div>
    </AuthWrapper>
  )
}