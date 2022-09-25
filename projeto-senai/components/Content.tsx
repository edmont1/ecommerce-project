import { NextPage } from "next";
import styles from "../styles/Content.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import banner1 from "../pages/img/bf-banner.png";
import banner2 from "../pages/img/bannershoes.jpg";
import banner3 from "../pages/img/banner-loja-1.jpg";


const Content: NextPage = () => {
  let [request_response, setUrl] = useState([]);

  async function getApi() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products?");
      setUrl(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className={`${styles.contentbox} lg:container px-10`}>
      <ul className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 ">
        {request_response.slice(0, 8).map((value: any, index: any) => {
          return (
            <li key={index}>
              <div className={`card-compact w-9 shadow-xl ${styles.cardbox}`}>
                <figure>
                  <img src={value.image} alt="Shoes" />
                </figure>
                <div
                  className={`card-body text-white ${styles["cardbox-div"]}`}
                >
                  <div>
                    <h2 className="card-title">{value.title}</h2>
                  </div>
                  <p>R${value.price}</p>
                  <div
                    className={`card-actions justify-center ${styles["buttons-div"]}`}
                  >
                    <a
                      className={`btn btn-active btn-success ${styles.ssbutton}`}
                    >
                      Comprar
                    </a>
                    <Link
                      href={{
                        pathname: "/description",
                        query: { id: value.id },
                      }}
                    >
                      <a
                        className={`btn btn-active btn-info ${styles.smbutton}`}
                      >
                        Ver Mais
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={`grid grid-cols-2 md:grid-cols-2 gap-3 ${styles["banners-mid"]}`}>
        <div className={`${styles["banner1"]} col-span-2 md:col-span-1`}>
          <a href="#">
            <img src={banner1.src} alt="" />
          </a>
        </div>
        <div className={`${styles["banner2"]} col-span-2 md:col-span-1`}>
          <a href="#">
            <img src={banner2.src} alt="" />
          </a>
        </div>
        <div className={`${styles["banner3"]} col-span-2`}>
          <a href="">
            <img src={banner3.src} alt="" />
          </a>
        </div>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 ">
        {request_response.slice(8).map((value: any, index: any) => {
          return (
            <li key={index}>
              <div className={`card-compact w-9 shadow-xl ${styles.cardbox}`}>
                <figure>
                  <img src={value.image} alt="Shoes" />
                </figure>
                <div
                  className={`card-body text-white ${styles["cardbox-div"]}`}
                >
                  <div>
                    <h2 className="card-title">{value.title}</h2>
                  </div>
                  <p>R${value.price}</p>
                  <div
                    className={`card-actions justify-center ${styles["buttons-div"]}`}
                  >
                    <a
                      className={`btn btn-active btn-success ${styles.ssbutton}`}
                    >
                      Comprar
                    </a>
                    <Link
                      href={{
                        pathname: "/description",
                        query: { id: value.id },
                      }}
                    >
                      <a
                        className={`btn btn-active btn-info ${styles.smbutton}`}
                      >
                        Ver Mais
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Content;
