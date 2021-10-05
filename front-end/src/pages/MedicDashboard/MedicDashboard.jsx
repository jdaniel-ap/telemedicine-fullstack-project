import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Tooltip from '@material-ui/core/Tooltip';

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { getMedicConsults } from '../../services/api';

function MedicDashboard() {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'))
    async function fetchConsult() {
      const { data } = await getMedicConsults(token);
      setData(data);
      console.log(data)
    }
    
    fetchConsult()
  }, []);

  return (
    <div className="content">
      <Header />
      <main>
        <section style={{textAlign: 'center'}}>
        <table>
          <tbody>

          <tr>
            <th>Status</th>
            <th>Identificador</th>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Motivo</th>
          </tr>
          {data.map(row => (
            <tr className="status-open" key={row.id}>
              <td><Tooltip title="Consulta en proceso"><span className={row.status}></span></Tooltip></td>
              <td>{row.id}</td>
              <Tooltip title={row.userId}><td>{row.medicId.split('-')[0]}...</td></Tooltip>
              <td>{row.createdAt.split('T')[0]}</td>
              <Tooltip title={row.motive} ><td>{`${row.motive.split(' ')[0]} ${row.motive.split(' ')[1]}...`}</td></Tooltip>
              <td><Button onClick={() => history.push(`/consult/medic/chat/${row.id}/${row.userId}`)}>Ver más</Button></td>
            </tr>
          ))}
          </tbody>
        </table>
        </section>
      </main>
    </div>
  )
}

export default MedicDashboard
