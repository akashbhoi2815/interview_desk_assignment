import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../Css/profile.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import {IoMdGrid} from "react-icons/io";
import {BiMoviePlay} from "react-icons/bi";
import {AiOutlineContacts} from "react-icons/ai";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import AllRoutes from "../Components/AllRoutes";

const Profile = () => {
  const [profileData, setProfileData] = useState();
  const [post, setPost] = useState();
  console.log("profileData: ", profileData);

  const getData = () => {
    axios
      .get(`http://jsonplaceholder.typicode.com/users/1`)
      .then((res) => setProfileData(res.data));
  };

  function postData() {
    axios
      .get(`http://jsonplaceholder.typicode.com/photos/`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  useEffect(() => {
    getData();
    postData();
  }, []);

  return (
    <>
      <div className={styles.profile}>
        <header className={styles.header}>
          <div className={styles.profile_image_div}>
            <div style={{width:"150px",height:"150px"}}>
            <img className={styles.profile_image} src="/virat.jpeg" alt="" />
            </div>
          </div>
          <div className={styles.profile_info}>
            <div className={styles.profile_info_username}>
              <p>
                {profileData?.username}{" "}
                <span>
                  <MdVerified color="#3797f0" />
                </span>{" "}
              </p>
              <div>
                <button>Follow</button>
                <button>Message</button>
              </div>
              <p>
                <FiMoreHorizontal />
              </p>
            </div>
            <div className={styles.profile_info_follow}>
              <p>
                <span>{post?.length}</span> posts
              </p>
              <p>
                <span>255M</span> followers
              </p>
              <p>
                <span>262</span> following
              </p>
            </div>
            <div className={styles.profile_info_data}>
              <div><span>{profileData?.name}</span> <br /><span>{profileData?.company.name}</span> <br /><span>{profileData?.website}</span></div>
            </div>
          </div>
        </header>
            <br />
            <div className={styles.routing} >
              <div><Link className={styles.routing_link} to="/"><IoMdGrid/>POSTS</Link></div>
              <div><Link className={styles.routing_link} to="/reels"><BiMoviePlay/>REELS</Link></div>
              <div><Link className={styles.routing_link} to="/tagged"><AiOutlineContacts/>TAGGED</Link></div>
            </div>
            <br />
            <AllRoutes/>
        {/* <div>
          <Posts />
        </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Profile;
