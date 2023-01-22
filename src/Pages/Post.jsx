import React from 'react'

import { useEffect, useState } from 'react'
import styles from "../Css/post.module.css";
import axios from "axios";

function Posts() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // calling the initial data in getdata function
  function getData() {
    axios.get(`http://jsonplaceholder.typicode.com/photos/?_limit=12&_page=${page}`)
      .then((result) => {
        setData((pre) => [...pre, ...result.data]);
      }).catch((err) => {
        console.log("err", err)
      });
  }

  // this is the function to handle the scroll of the page
  const handleInfiniteScroll = async () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let innerHeight = window.innerHeight;
    let scrollTop = document.documentElement.scrollTop;
    // console.log("scroll Height", scrollHeight);
    // console.log("inner Height", innerHeight );
    // console.log("scrollTop", scrollTop);
    try {
      if (innerHeight + scrollTop + 1 >= scrollHeight) {
        setPage((pre) => pre + 1)
      }
    } catch (error) {
      console.log("err", error);
    }
  }
  // this is the use effect calling
  useEffect(() => {
    getData()
  }, [page])

  // this use effect is use for when we will scroll the page
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll)

  }, [])
  console.log('page', page);
  console.log("real data", data);
  return (
    <div className={styles.posts}>
      {
        data?.map((ele) => (
          <div key={ele.id}>
            <div>
              <img src={ele.thumbnailUrl} alt="" width={"320px"}/>
            </div>
          </div>
        ))
      }
    </div>
  )
} 

export default Posts