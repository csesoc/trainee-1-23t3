import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Catalogue from './pages/Catalogue';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalogue />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
