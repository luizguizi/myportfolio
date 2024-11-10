import React from 'react'
import styles from '../components/Skills.module.css'

const Skills = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        <div className={styles.intro}>
        <h3>SKILLS</h3>
       </div>
       <div className={styles.sides}>

              <div className={styles.aside1}>
              <div>Hard</div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>JavaScript</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>React.js</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>React Native</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>Node</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>Firebase</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>Photoshop</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>Power BI</div>
              </div>
              </div>
        <div className={styles.aside2}>
        <div>Soft</div>
        <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>JavaScript</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>React.js</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>React Native</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>Node</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>Firebase</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>Photoshop</div>
              </div>
              <div className={styles.skill_bar}>
              <div className={styles.skill_level} style={{ width: "75%" }}>Power BI</div>
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

export default Skills