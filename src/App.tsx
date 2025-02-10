import 'regenerator-runtime/runtime'
import { Route, Routes } from 'react-router'
import HomePage from './HomePage'
import SettingsPage from './SettingsPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}

export default App
