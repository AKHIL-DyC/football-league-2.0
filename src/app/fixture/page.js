import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import img1 from '/public/1.jpg'
import img2 from '/public/2.jpg'
import img3 from '/public/3.jpg'
import img4 from '/public/4.jpg'
import img5 from '/public/6.jpg'
const page = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>FIXTURE</h1>
      </div>
      <div className={styles.imgContainer}>
        <Image src={img1}className={styles.img}></Image>
        <Image src={img2}className={styles.img}></Image>
        <Image src={img3}className={styles.img}></Image>
        <Image src={img4}className={styles.img}></Image>
        <Image src={img5}className={styles.img}></Image>
      </div>
    </div>
  )
}

export default page
