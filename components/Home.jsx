import React from 'react'
import styles from '../components/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.info}>
      <div className={styles.info_text}>
      <h2>Olá, eu sou Luiz Guilherme</h2>
      <h4>Bem-vindo ao meu portfolio!</h4>
      <p>Estudante de ADS, apaixonado pela 
        tecnologia e disposto a encarar desafios que 
        agreguem a minha carreira</p>
        </div>
        <div className={styles.photo}>
        </div>
        </div>
        
    </div>
    <button className={styles.button}>
          <span>Contact-me</span>
        </button>
    </div>
  )
}

export default Home