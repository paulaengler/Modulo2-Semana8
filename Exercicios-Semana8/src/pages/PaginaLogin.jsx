import { useState } from 'react';
import '../pages/PaginaLogin.css'
import { useNavigate } from 'react-router-dom'


function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (email === 'admin@admin.com' && senha === 'admin123') {
          console.log("ir pra home")
            navigate('/home')
        } else {
        alert('Email e/ou senha incorretos')
        }
    }

  return (
    <>
    <div className="login">
      <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" />
      <input type="text" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" placeholder='Digite sua senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
      <button onClick={handleSubmit}>Entrar</button>
    </div>
    </>
  )
}

export default Login