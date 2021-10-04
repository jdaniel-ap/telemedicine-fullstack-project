import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';
import { generateConsult } from '../../services/api';
import './consult.scss';

function Consult() {
  const [consult, setConsult] = useState({ userId: '', medicId: '', motive: ''});
  const history = useHistory();

  useEffect(() => {
   const { userInfo } = JSON.parse(localStorage.getItem('user'));
   setConsult(prevState => ({ ...prevState, userId: userInfo.id}));
  }, []);

  function handleConsult({ target }) {
    const { name, value } = target;
    setConsult(prevState => ({...prevState, [name]: value}))
    console.log(consult)
  }
  
  async function requestConsult() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const request = await generateConsult(consult, token);
    console.log(request)
    if(request.status === 'success') history.push('/dashboard/consult/');
  }

  return (
    <div className="content">
      <Header />
      <main>
      <Aside />
        <section>
          <h2>Consultas</h2>
          <div className="consult">
            <div>
              <span>ID Personal</span>
              <input type="text" defaultValue={consult.userId} readOnly className="disable-input"/>
            </div>
            <div>
              <span>ID Medico</span>
              <input name="medicId" type="text" placeholder="Ingresa el ID del Medico" onChange={(e) => handleConsult(e)} />
            </div>
            <div>
              <span>Motivo de consulta</span>
              <textarea name="motive" placeholder="Por favor, ingrese el motivo de su consulta. Recuerde ser detallado mientras explica su caso." onChange={(e) => handleConsult(e)} />
            </div>
            <Button className="btn primary-btn" onClick={requestConsult}>Generar consulta</Button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Consult
