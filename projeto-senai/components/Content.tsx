import { NextPage } from "next";
import styles from "../styles/Content.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Content: NextPage = () => {
  let [urlLinks, setUrl] = useState([])

  async function getApi() {
    try {
      const response = await axios.get("https://api.thedogapi.com/v1/images/search?limit=10&page=10&order=Desc");
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
      <ul className="grid grid-cols-2 xl:grid-cols-5 gap-10 ">
        {urlLinks.map((value: any, index: any) => {
          return (
            <li key={index}>
              <div
                className={`card-compact w-9 shadow-xl ${styles.cardbox}`}
              >
                <figure>
                  <img src={value.url} alt="Shoes" />
                </figure>
                <div className={`card-body text-white`}>
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-success">Buy Now</button>
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
