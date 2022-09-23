import { NextPage } from "next"
import styles from '../styles/Header.module.css'
import logo from '../pages/img/logo.png'
import Image from "next/image"
import searchicon from '../pages/img/search.png'
import { ReactElement } from "react"

interface Props{
  children:ReactElement
  marginprop: string
}

const Header: NextPage<Props> = ({children, marginprop}) => {
    return (
      <> 
        <nav
 className={`relative w-full flex flex-wrap items-center justify-between bg-gray-800 text-black focus:text-gray-700shadow-lgnavbar navbar-expand-lg navbar-light ${styles.headermain}`}>


  <div className={`w-full flex flex-wrap items-center justify-between ${styles.menuflex}`}>
    <button
      className="
navbar-toggler
text-gray-500
border-0
hover:shadow-none hover:no-underline
py-2
px-2.5
bg-transparent
focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        className="w-6"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        ></path>
      </svg>
    </button>
    <div
      className="collapse navbar-collapse items-center"
      id="navbarSupportedContent">
      <a
        className="
  flex
  items-center
  text-blue-400
  p-0
"
        href="#"
      >
        <Image
          src={logo.src}
          width={100}
          height={70}
          objectFit={'contain'}
          alt=""
          loading="lazy"
        />
        <h1 className={styles.logotext}>Market</h1>
      </a>
      {/* Left links */}
      <ul className={`navbar-nav flex flex-col pl-0 list-style-none mr-auto ${styles['c-mainmenu']}`}>
        <li className="nav-item">
          <a
            className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-5 hover:bg-blue-400 block transition duration-500 rounded"
            href="#"
          >
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-5 hover:bg-blue-400 block transition duration-500 rounded"
            href="#"
          >
            Team
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-5 hover:bg-blue-400 block transition duration-500 rounded"
            href="#"
          >
            Projects
          </a>
        </li>
      </ul>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
    {/* Right elements */}
    <div className={`flex items-center relative ${marginprop}`}>
      {/* Icon */}
      <div className={styles.search}>
        <label htmlFor="searchId">Buscar</label>
        <div>
          <input id="searchId" type="text" />
          <a href="">
          <img src={searchicon.src}/>
          </a>
        </div>
      </div>
      {children}
    </div>
    {/* Right elements */}
  </div>
  <nav className={styles.navmenu}>
    <ul className={styles.minimenu}>
      <li>
        <a className="rounded transition duration-500" href="">Celulares</a>
        <ul className={`${styles.submenu} bg-gray-800 `}>
        <li>
          <a className="rounded transition duration-500" href="">eduardo</a>
        </li>
        <li>
          <a  className="rounded transition duration-500" href="">eduardo</a>
        </li>
        <li>
          <a className="rounded transition duration-500" href="">eduardo</a>
        </li>
        <li>
          <a className="rounded transition duration-500" href="">eduardo</a>
        </li>
      </ul>
      </li>
      <li>
        <a className="rounded transition duration-500" href="">Eletrodomésticos</a>
      </li>
      <li>
        <a className="rounded transition duration-500" href="">Informática</a>
      </li>
      <li>
        <a className="rounded transition duration-500" href="">Livros</a>
      </li>
      <li>
        <a className="rounded transition duration-500" href="">Games</a>
      </li>
      <li>
        <a className="rounded transition duration-500" href="">Roupas</a>
      </li>
      <li>
        <a className="rounded transition duration-500" href="">Mercado</a>
      </li>
      <li>
        <a className="rounded transition duration-500" href="">Móveis</a>
      </li>
      <li>
        <a className="rounded transition duration-500" href="">Esporte e Lazer</a>
      </li>
    </ul>
  </nav>

</nav>
      </>
    )
  }
  
  export default Header
  