import { Link, NavLink } from "react-router-dom"
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div >
    <nav className={styles.nav}>
        <div className={styles.logo}>
            
        </div>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about' >About</NavLink></li>
          <li><NavLink to='/skills' >Skills</NavLink></li>
          <li><NavLink to='/portfolio' >Portoflio</NavLink></li>
          <li><NavLink to='/contactme'>Contactme</NavLink></li>
        </ul>
    </nav>
    </div>
  )
}

export default NavBar