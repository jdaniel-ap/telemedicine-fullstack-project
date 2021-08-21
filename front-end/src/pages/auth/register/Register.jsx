import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import illustrationImg from '../../../assets/images/signup.png';
import logoImg from '../../../assets/images/Untitled.png';
import '../../auth/auth.scss';
import Button from '../../../components/Button/Button';
import { AuthContext } from '../../../context/AuthContext';

function Register() {
  const { signupValues ,signupState, fillFormFields, handleSignup } = useContext(AuthContext);
  return (
    <div id='page-auth'>
      <aside>
        <img src={ illustrationImg } alt='simbolize a question' />
        <p>Registrate en Medtools y facilita la gestion tu tiempo</p>
      </aside>

      <main>
        <div className='main-content'>
          <img src={ logoImg } alt='Consult' />
          <form action=''>
          { !signupState ? 
          <> 
            <input 
              type='text'
              name='username'
              id=''
              placeholder='Usuario'
              value={signupValues.username}
              onChange={(e) => fillFormFields(e)}
            />
            <input 
              type='text'
              name='email'
              id=''
              placeholder='Email'
              value={signupValues.email}
              onChange={(e) => fillFormFields(e)}
            />
            <input 
              type='password'
              name='password'
              id=''
              placeholder='Contraseña'
              value={signupValues.password}
              onChange={(e) => fillFormFields(e)
              }
            />
            <div className='radio-container'>
              <span>Soy medico</span>
              <input 
                type='checkbox'
                name='medicRole'
                checked={signupValues.medicRole}
                onChange={(e) => fillFormFields(e)}
              ></input>
            </div> 
            <Button onClick={(e) => handleSignup(e)}>
              Registrarse
            </Button>
          </> 
          : <>
              <h2>REGISTRO COMPLETADO</h2>
              <img src='https://i.stack.imgur.com/EzFNr.gif' width="50" alt="200" />
            </> 
          }
          <p> { !signupState ? 'Si ya tienes cuenta puedes ingresar ':'Tu registro fue exitoso, para continuar ingresa '}<Link to='/signin'>aqui</ Link></p>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Register
