import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import pic from '/public/m2.jpg'
const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.txt}>
        <h1>SEASON 1 CHAMPIONS</h1>
      </div>
      <div className={styles.imgContainer}>
       <Image src={pic}className={styles.img}></Image> 
      </div>
      
    </div>
  )
}

export default page
