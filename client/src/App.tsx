import { Route, Routes } from 'react-router-dom'

import Catalogue from './pages/Catalogue';
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Individual from './pages/Individual';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalogue />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/individual" element={<Individual />} />

    </Routes>
  )
}

export default App