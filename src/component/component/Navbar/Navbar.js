import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Link href='/'>MFL</Link>
      </div>
      <div className={styles.links}>
    <Link href='/season1'>s1</Link>
    <Link href='/fixture'>fixture</Link>
    <Link href='/prize'>prize</Link>
      </div>
    </div>
  )
}

export default Navbar
