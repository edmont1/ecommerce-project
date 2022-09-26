import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Notlogged from "../components/Notlogged";
import Logged from "../components/Logged";
dynamic(import("tw-elements"), { ssr: false });
import verifyLogin from "../components/verifyLogin";
import Register from "../components/Register";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

const LoginPage: NextPage = () => {

  const cookies = parseCookies()

  let [cookiestate, setcookiestate] = useState('')

  useEffect(()=>{
    setcookiestate(cookies.islogged)
  },[cookiestate])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {cookiestate == 'true '? (
        <Header marginprop="m-5">
          <Logged />
        </Header>
      ) : (
        <Header marginprop="ml-5">
          <Notlogged />
        </Header>
      )}
      <Register/>
      <Footer/>
    </>
  );
};

export default LoginPage;