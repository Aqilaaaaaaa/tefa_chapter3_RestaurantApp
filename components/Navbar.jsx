import styles from "../styles/nav.module.css";
import Link from 'next/link'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 


export default function Navbar (){
  const [isMobile, setIsMobile] = useState(false);
  

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.nama}>
          Hunger App 
          </div>
        </div> 
        <ul className={!isMobile ? styles.menu : styles.menuLink}>
          <li className={styles.item}><Link className="" href="#">Home</Link></li>
          <li className={styles.item}><Link className="" href="#">Favorite</Link></li>
          <li className={styles.item}><Link className="" href="/about">About Us</Link></li>
        </ul>  
        <button className={styles.burgerBtn} onClick={() => setIsMobile(false)}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>                           
      </div>
    )
}

