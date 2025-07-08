import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import App from './App'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import ProtectedRoutes from './ProtectedRoutes'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MainRouter() {
  return (
    <Router>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element={<ProtectedRoutes><App /></ProtectedRoutes>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/player" element={<ProtectedRoutes><Player /></ProtectedRoutes>} />
      </Routes>
    </Router>
  )
}

export default MainRouter
