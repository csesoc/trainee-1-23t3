import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Catalogue from './pages/Catalogue';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/catalogue" element={<Catalogue/>}/>
    </Routes>
  )
}

export default App
