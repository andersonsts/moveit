import styles from 'styles/layouts/AuthWrapper.module.css' 

import { SideBar } from "components/Sidebar";

export function AuthWrapper ({ children }) {
  return (
    <div className={styles.home}>
      <SideBar />
      {children}
    </div>
  )
}