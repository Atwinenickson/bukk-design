import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DashboardNavbar } from '../src/components/dashboard-navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <DashboardNavbar/>
    </div>
  )
}

export default Home
