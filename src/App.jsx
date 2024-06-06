import{BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Cadastro } from './pages/Cadastro'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element ={<Home/>}/>
      <Route path="/Cadastro" element ={<Cadastro/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
