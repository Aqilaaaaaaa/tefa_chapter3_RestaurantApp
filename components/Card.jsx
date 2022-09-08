import Image from "next/image";
import styles from "../styles/Card.module.css";

const Card = ({loc, image, rate, title, desc,  }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <p className={styles.tagloc}>{loc}</p>
      </div>
      <img className={styles.img} src={image}  />
      <div className={styles.content}>
        <p className={styles.rate}>rating : {rate}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
      </div>
  
    </div>
  );
};

export default Card;
