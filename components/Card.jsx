import Image from "next/image";
import styles from "../styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <p className={styles.tagloc}>Bandung</p>
      </div>
      <Image src="/img/pizza.png" alt="" width="200" height="200" />
      <div className={styles.content}>
        <p className={styles.rate}>Rating : 4.5</p>
        <h1 className={styles.title}>Lorem Ipsum Dolor</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      
      
    </div>
  );
};

export default Card;
