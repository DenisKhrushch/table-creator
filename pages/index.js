import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeka Krasachik</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Krasavchik <a href="https://www.instagram.com/nikulnikov_">Jeka</a>
        </h1>
      </main>
    </div>
  )
}
