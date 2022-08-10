import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DashboardLayout } from '../src/components/dashboard-layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <DashboardLayout/>
    </div>
  )
}

export default Home
