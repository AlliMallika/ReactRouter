// import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home} from './components/Home'
import { About} from './components/About'
import { Contact} from './components/Contact'

const App = () => {
  return (
    <Router>
         <nav className="navbar navbar-dark bg-dark" 
         style={{ display: 'flex', justifyContent: 'flex-end', margin:'8px', padding: '5px', fontSize: '20px' }}>
        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
          <li style={{ marginRight: '15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ marginRight: '15px' }}>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          </li>
          <li style={{marginRight: '15px'}}>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          </li>
          <li style={{display:'flex', alignItems: 'center'}}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
          </li>
        </ul>
      </nav>

       <Routes>
           <Route path='/' element={ <Home/>} />
           <Route path='/about' element={ <About/> } />
           <Route path='/contact' element={ <Contact/> } />
       </Routes>
    </Router>
  
    
  )
}

export default App