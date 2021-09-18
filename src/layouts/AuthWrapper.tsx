import { ReactNode } from 'react';
import Head from 'next/head'

import styles from 'styles/layouts/AuthWrapper.module.css' 

import { SideBar } from "components/Sidebar";

interface AuthWrapperProps {
  title: string;
  children: ReactNode
}

export function AuthWrapper ({ children, title }: AuthWrapperProps) {
  return (
    <div className={styles.home}>
      <Head>
        <title>{title} | move.it</title>
      </Head>
      <SideBar />
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}