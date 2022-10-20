import React from 'react'
import ReactLandingPage from './ReactLandingPage'
import Home from './Home'
import Searched from './Searched'
import Captures from './Captures'
import Specifics from './Specifics'
import {Route, Routes} from 'react-router-dom'

function Pages() {
  return (
    <div>
        <Routes>
            <Route path= "/" element={<ReactLandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/searched/:search" element= {<Searched />} />
            <Route path="/captures/" element={<Captures />} />
            <Route path="/specifics/:id" element={<Specifics />} /> 
        </Routes>
    </div>
  )
}

export default Pages