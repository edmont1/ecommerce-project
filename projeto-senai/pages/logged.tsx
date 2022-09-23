import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Banner from '../components/Banner'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Logged from '../components/Logged'
dynamic(import('tw-elements'),{ssr:false})


const loggedHome: NextPage = () => {



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header marginprop='m-5'>
        <Logged/>
      </Header>
      <Banner/>
      <Content/>
      <Footer/>
    </>
  )
}

export default loggedHome