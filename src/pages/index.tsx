/* eslint-disable */
import Head from 'next/head'

import { AuthWrapper } from 'layouts/AuthWrapper'
import { LoginInput } from 'components/LoginInput'

import styles from 'styles/pages/Login.module.css'

export default function Login() {
  return (
    <AuthWrapper>
      <div className={styles.container}>
        <Head>
          <title>Login | move.it</title>
        </Head>

        <img src="icons/background.svg" alt="App background" />
        <form className={styles.formContainer}>
          <img src="icons/logo.svg" alt="Logo" />
          <h1>Bem-vindo</h1>
          <div className={styles.githubContainer}>
            <img src="icons/github.svg" alt="Github" />
            <p>Faça login com seu Github para começar</p>
          </div>
          <LoginInput />
        </form>
      </div>
    </AuthWrapper>
  )
}