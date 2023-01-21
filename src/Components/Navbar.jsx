import React, { useState } from "react";
import styles from "../Css/navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";


function Navbar() {
  const [search, setSearch] = useState(false);

  const handleClick=()=>{
       setSearch(true)
  }
  return (
    <div className={styles.main_nav}>
      <div className={styles.nav}>
        <div>
          <img className={styles.insta_image} src="/instagram.webp" alt="" />
        </div>
        <div className={styles.search_bar}>
          <CiSearch className={search ? styles.hide : styles.show}/>
          <input type="text" placeholder="Search" onClick={handleClick} />
          <TiDelete className={search ? styles.show : styles.hide} onClick={()=>setSearch(false)} />
        </div>
        <div className={styles.login_signup}>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
