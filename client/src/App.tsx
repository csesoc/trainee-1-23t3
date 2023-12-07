import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Catalogue from './pages/Catalogue';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalogue />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
