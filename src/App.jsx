import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route } from "react-router-dom"
import { Homepage } from './home/homepage'
import { NavBar } from './layout/NavBar'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Homepage/>}  />
            <Route element={<NavBar/>}>
               
                
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
