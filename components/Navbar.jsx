import styles from "../styles/nav.module.css";
import Link from 'next/link'

export default function Navbar (){
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.nama}>
          Hunger App
          </div>
        </div> 
        <ul className={styles.menu}>
            <li className={styles.item}><Link className="" href="#Home">Home</Link></li>
            <li className={styles.item}><Link className="" href="#Fav">Favorite</Link></li>
            <li className={styles.item}><Link className="" href="#About">About Us</Link></li>
          </ul>                             
      </div>
    )
}

