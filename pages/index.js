import Head from "next/head"
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <Head>
        <title>learnodin</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Navbar isAbs = {true} />
      <main className={styles.main_container}>
        <div className={styles.centered_wrapper}>
          <div className={styles.centered}>
            <h2 className={styles.main_header}>Learn Odin the Easy Way.</h2>
            <div className={styles.main_button_container}>
              <Link href="/tutorials/1.0"><a  className={`${styles.main_button} ${styles.main_button_tutorials}`}>Tutorials</a></Link>
              <Link href="/tutorials/0.0"><a className={`${styles.main_button} ${styles.main_button_installation}`}>Installation</a></Link>
            </div>
          </div>
        </div>
        <div className={styles.centered_wrapper}>
          f
        </div>
      </main>

    </>
  )
}


