import React from "react";
import styles from "../Css/footer.module.css";
import { v4 as uuidv4 } from 'uuid';


let arr = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Top Accounts",
  "Locations",
  "Instagram Lite",
  "Contact Uploading & Non-Users",
  "Suggested Accounts",
];
const Footer = () => {
  return (
    <div >
      <div className={styles.footer1}>{arr.length > 0 && arr.map((e) => <p key={uuidv4()}>{e}</p>)}</div>
      <div className={styles.footer2}>
        <select name="" id=""></select>
        <p >© 2023 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default Footer;
