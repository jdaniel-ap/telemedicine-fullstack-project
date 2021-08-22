import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import illustrationImg from '../../assets/images/register.png';
import logoImg from '../../assets/images/Untitled.png';
import './signup.scss';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../context/AuthContext';
import Alert from '../../components/Modal/Alert';

function Signup() {
  const { signupValues, 
          setSignupValues,
          signState,
          fillFormFields,
          handleSignup,
          setSignState 
        } = useContext(AuthContext);

  const resetForm = () => {
    setSignupValues({ username: '', email: '', password: '', medicRole: false});
    setSignState(prevState => ({...prevState, signUp: false }));

  };
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
            <input 
              type='text'
              name='fullname'
              placeholder='Nombres'
              value={signupValues.fullname}
              onChange={(e) => fillFormFields(e)}
            />
            <input 
              type='text'
              name='username'
              placeholder='Usuario'
              value={signupValues.username}
              onChange={(e) => fillFormFields(e)}
            />
            <input 
              type='text'
              name='email'
              placeholder='Email'
              value={signupValues.email}
              onChange={(e) => fillFormFields(e)}
            />
            <input 
              type='password'
              name='password'
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
          <p>Si ya tienes cuenta puedes ingresar <Link to='/' onClick={() => resetForm()}>aqui</ Link></p>
          </form>
        </div>
        { signState.signUp && <Alert className={signState.serverResponse.success ? 'success' : 'error'}>{signState.serverResponse.message}</Alert>}
      </main>
    </div>
  )
}

export default Signup
