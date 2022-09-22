import { NextPage } from "next";
import styles from "../styles/Content.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Content: NextPage = () => {
  let [urlLinks, setUrl] = useState([])

  async function getApi() {
    try {
      const response = await axios.get("https://api.thedogapi.com/v1/images/search?limit=5&page=10&order=Desc");
      setUrl(response.data)

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className={`${styles.contentbox} container`}>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        {urlLinks.map((value: any, index: any) => {
          return (
            <li key={index}>
              <div
                className={`card-compact w-96 bg-gray-800 shadow-xl ${styles.cardbox}`}
              >
                <figure>
                  <img src={value.url} alt="Shoes" />
                </figure>
                <div className="card-body text-white">
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
    </div>
  );
};

export default Content;
