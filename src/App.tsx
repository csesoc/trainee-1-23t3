import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Catalogue from './pages/Catalogue';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/catalogue" element={<Catalogue/>}/>
    </Routes>
  )
}

export default App
