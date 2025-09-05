import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layouts'
import LandingPage from './pages/LandingPage'
import Halls from './pages/HallsPage'
import HallsDetail from './pages/HallsDetails'
import Booking from './pages/Booking'
import AboutUsPage from './pages/AboutUsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <LandingPage /> } />
          <Route path='/venues' element={ <Halls /> } />
          <Route path='/venues/:id' element={ <HallsDetail /> } />
          <Route path='/booking' element={ <Booking /> } />
          <Route path='/about-us' element={ <AboutUsPage /> } />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
