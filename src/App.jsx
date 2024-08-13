import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './pages/mainLayout/MainLayout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />} />
      </Routes>
    </>
  )
}

export default App
