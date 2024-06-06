import{BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Cadastro } from './pages/Cadastro'
import { Login } from './pages/Login'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element ={<Home/>}/>
      <Route path="/Cadastro" element ={<Cadastro/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
