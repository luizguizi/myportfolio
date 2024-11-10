import React from 'react'
import styles from '../components/About.module.css'

const About = () => {
  return (
      <div className={styles.container}>
        <div className={styles.content}>
        <div className={styles.intro}>
        <h3>Luiz Guilherme</h3>
        <p>     24 anos, natural de Curitiba, Paraná. atualmente estou cursando CST em Análise e desenvolvimento de sistemas, em paralelo estudo programação front-end, buscando sempre estar atualizado diante as tecnologias e boas práticas que situam ao front-end.</p>
       </div>
       <div className={styles.sides}>
              <div className={styles.aside1}>
                <div className={styles.logoside01}></div>
                <div className={styles.formationside}>
                <h2>Técnico em Mecatrônica</h2>
                <p>SENAI, Curitiba, Paraná.</p>
                <p>Janeiro/2019 a Janeiro/2021</p>
              </div>  
              <div className={styles.formationside}>
                <h2>Análise e Des. de Sistemas</h2>
                <p>Universidade Santa Cruz, Curitiba.</p>
                <p>previsão de conclusão jullho/2025</p>
              </div>              
              </div>
        <div className={styles.aside2}>
        <div className={styles.logoside02}></div>
              <div className={styles.formationside}>
                <h2>React do Zero a Maestria</h2>
                <p>Hora de codar, Udemy.</p>
                <p>março/2024.</p>
              </div>    
              <div className={styles.formationside}>
                <h2>Web Moderno</h2>
                <p>Cod3r cursos, Udemy.</p>
                <p>cursando.</p>   
              </div>  
              <div className={styles.formationside}>
                <h2>Desenvolvedor full-stack</h2>
                <p> Danki Code.</p>
                <p>cursando.</p>   
              </div>           
        </div>
       </div>
       <button className={styles.button}>
       <span>Currículo</span>
        </button>
        </div>
    </div>
    
  )
}

export default About