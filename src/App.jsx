import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'

import CreateActivity from './components/CreateActivity/CreateActivity'
import Detail from './components/Detail/Detail'
import Footer from './components/footer/Footer'
import HomePage from './components/HomePage/HomePage'
import LandingPage from './components/LandingPage/LandingPage'
import Nav from './components/Nav/Nav'
import ResultsSearch from './components/SearchBar/ResultsSearch'
import axio from 'axios'

axios.defaults.baseURL = 'https://pi-back-production-e9b7.up.railway.app/'


function App() {
  
  const location = useLocation()
  
  return (
    <div className='Container'>
        {location.pathname!=='/' && <Nav/>}
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/result' element={<ResultsSearch/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/create' element={<CreateActivity/>}/>
        </Routes>
        {location.pathname!=='/' && <Footer/>}
    </div>
  )
}

export default App
