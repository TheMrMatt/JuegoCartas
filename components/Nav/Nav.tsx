import type { NextPage } from 'next'
import styles from '../../styles/Nav.module.css'
import { IoSkull } from "react-icons/io5";

const Nav: NextPage = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <IoSkull className={styles.logo} />
      </div>
    </nav>
  )
}

export default Nav
