import {Routes, Route, BrowserRouter} from 'react-router-dom'

import './App.css'
import NavBar from '../components/NavBar'

//pages
import Home from '../components/Home'
import About from '../components/About'
import Contactme from '../components/Contactme'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'

function App() {
  

  return (
    <div className="App">
    
    <BrowserRouter>
    < NavBar/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/portfolio'  element={<Portfolio />}/>
        <Route path='/contactme' element={<Contactme />} />
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
