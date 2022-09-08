import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Link from 'next/link'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'


export default function Home() {

  const[restoAsync, setrestoAsync] = useState ([])
  const[restoPromise, setrestoPromise] = useState ([])

  useEffect(() => {
    restoFetchPromise();
  },[])

  const restoFetchPromise = () => {
    const response = fetch('./api/restaurants')
    response
    .then(res => res.json())
    .then((data => {
      setrestoPromise(data)
      console.log(data)
    }))
    .catch(e => {console.log(e)});

  };
 
  async function restoFetchAsync() {
    try {
      const res = await fetch('./api/restaurants');
      const data = await res.json();
      setrestoAsync(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
// const loadData = () => {
//   return fetch('./api/restaurants')
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new error(response.status);
//       } 
//     })
//     .then(data => {
//         setDataload(data);
//     });
// }

  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
      <main className={styles.main}>
        <p className={styles.label}>
          <Link className="" href="#Home">Explore Restaurant</Link>
        </p>
        <div className={styles.row}>
          {restoPromise.map((restaurants)=>
            <div className={styles.col} key={restaurants.id}>
              <Card 
                loc={restaurants.location}
                image={restaurants.image}
                rate={restaurants.rate}
                title={restaurants.name}
                desc={restaurants.description}
              />
          </div>
          )} 
        </div>
      </main>
      <Footer/>   
    </div>
  )
}
