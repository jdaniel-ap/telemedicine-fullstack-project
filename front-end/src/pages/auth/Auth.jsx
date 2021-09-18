import React, { useContext } from 'react';
import illustrationImg from '../../assets/images/asd3.png';
import logoImg from '../../assets/images/newlogo.png';
import Button from '../../components/Button/Button';
import Alert from '../../components/Modal/Alert';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { useSelector } from 'react-redux';

import '../auth/auth.scss';

function Auth() {
  const signState = useSelector(state => state.authentication.signState)
  const { fillFormFields, handleLogin, setSignState } = useContext(AuthContext);

  return (
    <div id='page-auth'>
      <aside>
        <img src={ illustrationImg } alt="simbolize a question" />
        <p>Rellena el formulario y comienza a gestionar tu tiempo</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={ logoImg } alt="Consult" />
          <form action="">
            <input 
              type="text"
              name="username"
              placeholder="Usuario"
              onChange={(e) => fillFormFields(e, true)}
              />
            <input 
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={(e) => fillFormFields(e, true)}
              />
            <Button onClick={(e) => handleLogin(e, true)}>
              Iniciar sesion
            </Button>
          </form>
          <p>Si no tienes cuenta puedes registrarte {'\n'}
            <Link to="/signup" onClick={() => setSignState(prevState => ({ ...prevState, signIn: false}))}>aqui</Link>
          </p>
        </div>
          { signState.signIn && <Alert className='error' onClick>Usuario o contraseña incorrectos</Alert> }
      </main>
    </div>
  )
}

export default Auth
