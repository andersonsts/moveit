import { ReactNode } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from 'styles/components/CustomLink.module.css'

interface CustomLink {
  children: ReactNode,
  url: string
}

export function CustomLink ({ children, url }) {
  const { pathname } = useRouter()

  const currentLink = url === pathname 

  const btnClass = currentLink ? styles.currentLink : styles.normalLink

  return (
    <Link href={url}>
      <a className={`${styles.item} ${btnClass}`}>
        {currentLink && <div className={styles.itemBar} />}
        {children}
      </a>
    </Link>
  )
}