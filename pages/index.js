import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Link from 'next/link'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
      <main className={styles.main}>
        <p className={styles.label}>
          <Link className="" href="#Home">Explore Restaurant</Link>
        </p>
        <div className={styles.row}>
          <div className={styles.col} >
            <Card/>
          </div>
          <div className={styles.col}>
            <Card/>
          </div>
          <div className={styles.col}>
            <Card/>
          </div>
        </div>
      </main>
      <Footer/>   
    </div>
  )
}
