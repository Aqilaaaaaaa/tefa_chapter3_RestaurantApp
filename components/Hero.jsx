import styles from "../styles/hero.module.css";

export default function Hero() {
    return (
      <>
       <div className={styles.container}>
        <h1 className={styles.nama}>Hunger App</h1>
        <p className={styles.desc}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>

      </>
    )
  }