import 'regenerator-runtime/runtime'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import { useEffect } from 'react'
import { languages } from './utils/languages'

function App() {

  useEffect(() => {
    localStorage.setItem('speech', 'true')
    localStorage.setItem('lang', languages[0])
  }, [])


  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}

export default App
