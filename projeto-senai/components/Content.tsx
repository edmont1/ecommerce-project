import { NextPage } from "next";
import styles from "../styles/Content.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const Content: NextPage = () => {
  let [urlLinks, setUrl] = useState([])

  async function getApi() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=12');
      setUrl(response.data)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className={`${styles.contentbox} lg:container px-10`}>
      <ul className="grid grid-cols-2 xl:grid-cols-4 gap-10 ">
        {urlLinks.map((value: any, index: any) => {
          return (
            <li key={index}>
              <div
                className={`card-compact w-9 shadow-xl ${styles.cardbox}`}
              >
                <figure>
                  <img src={value.image} alt="Shoes" />
                </figure>
                <div className={`card-body text-white`}>
                  <h2 className="card-title">{value.title}</h2>
                  <div className="card-actions justify-center">
                    <p>R${value.price}</p>
                    <a className={`btn btn-active btn-info ${styles.smbutton}`}>Ver Mais</a>
                    <Link href={{pathname:'/description', query:{id:value.id}}}>
                      <a className={`btn btn-active btn-success ${styles.ssbutton}`}>Comprar</a>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={`grid grid-cols-2 gap-3 ${styles['banner-mid']}`}>
        <div className={`${styles['banner1']}`}>
          teste
        </div>
        <div className={`${styles['banner2']}`}>
          teste
        </div>
        <div className={`${styles['banner3']} col-span-2`}>
          teste
        </div>
      </div>
    </div>
  );
};

export default Content;
