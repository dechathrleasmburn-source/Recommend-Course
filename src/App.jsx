import React from 'react' 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";



const App = () => {
  return (
   <>
      <Router>
        <div className='container mt-4'>
          <nav className='mb-4'>
            <Link to="/Home" className='btn btn-primary me-2'>Home</Link>
            <Link to="/about" className='btn btn-primary me-2'>About</Link>
            <Link to="/Contact" className='btn btn-primary me-2'>Contact</Link>
          </nav>

          <Routes>
            <Route path='/Home' element={<Home/>} /> 
            <Route path='/about' element={<About/>} /> 
            <Route path='Contact' element={<Contact/>} /> 
            <Route path='*' element={<NotFound/>} /> 
          </Routes>
        </div>
      </Router>
   </>
  )
}

export default App