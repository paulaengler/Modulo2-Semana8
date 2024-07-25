// import Modal from 'react-modal';
// import { useState } from 'react'

// Modal.setAppElement('#root')

// function Modal() {

//     const [modalIsOpen, setIsOpen] = useState(true)
  
//     function handleOpenModal (){
//       setIsOpen(true)
//     }

//     function afterOpenModal() {
//         // references are now sync'd and can be accessed.
//         subtitle.style.color = '#f00';
//       }
  
//     function handleCloseModal(){
//       setIsOpen(false)
//     }
  
//     return (
//         <>
//         <div className="modal">
//           <button className="btn-modal" onClick={handleOpenModal}> Modal </button>
//         </div>

//         <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={handleCloseModal}
//           contentLabel="Example Modal"          
//         >
//           <h2>Hello</h2>
//           <button onClick={handleCloseModal}>Close</button>
//           <h3> i am a modal </h3>
//         </Modal>
        
//         </>

//     )
//     }

// export default Modal


 // if (acao === 'sim') {
    //   // Lógica para redirecionar o usuário para a página desejada
    //   window.location.href = '/home';
    // } else if (acao === 'nao') {
    //   // Lógica para gerar um alerta
    //   alert('Você não possui idade suficiente para acessar esta página.');
    // }