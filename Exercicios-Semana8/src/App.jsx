import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Produtos from './components/Produtos'
import PaginaProdutos from './pages/PaginaProdutos'
import PaginaLogin from './pages/PaginaLogin'


function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' Component={Header} />
          <Route path='/signin' Component={PaginaLogin} />
          <Route path='/produtos' Component={PaginaProdutos} />
        </Routes>
      </BrowserRouter>
      <Hero/>
      <Produtos/>
    </>
  )
}

export default App
