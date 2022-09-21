import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Content from '../components/Content'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
dynamic(import('tw-elements'),{ssr:false})

const Home: NextPage = () => {



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>

    </>
  )
}

export default Home
