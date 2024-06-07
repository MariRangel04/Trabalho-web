import{BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Cadastro } from './pages/Cadastro'
import { Login } from './pages/Login'
import { Carteira } from './pages/Carteira'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element ={<Home/>}/>
      <Route path="/Cadastro" element ={<Cadastro/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Carteira' element={<Carteira/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
