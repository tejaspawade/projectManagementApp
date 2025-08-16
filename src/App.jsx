import './App.css'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProject from './components/Project/CreateProject/CreateProject'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-project" element={<CreateProject/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
