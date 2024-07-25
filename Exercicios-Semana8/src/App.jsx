import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Produtos from './components/Produtos'
import PaginaProdutos from './pages/PaginaProdutos'
import PaginaLogin from './pages/PaginaLogin'
import Modal from 'react-modal';
import { useState } from 'react'


function App() {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(true)
 
  function handleOpenModal (){
    setIsOpen(true)
    alert('Você não possui idade suficiente para acessar esta página.')
  }

 
  function handleCloseModal(){
    setIsOpen(false)
    
  }


  return (
    <>

         <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => handleCloseModal('nao')}
          contentLabel="Example Modal" 
          style={customStyles}    
        >
          <h2>Possui idade acima de 18 anos? </h2>
          <button onClick={handleCloseModal}>Sim</button>
          <button onClick={handleOpenModal}>Não</button>
          
        </Modal>



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