import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import Tooltip from '@material-ui/core/Tooltip';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { getUserConsults } from '../../services/api';
import socket from "../../services/socket";

import './history.scss';

function History() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'))

  async function fetchConsult() {
    const { data } = await getUserConsults(token);
    setData(data);
    console.log(data)
  }

  useEffect(() => {
    fetchConsult()
  }, []);

  socket.on('consult_status', () => {
    fetchConsult();
  })

  return (
    <div className="content">
      <Header />
      <main>
        <Aside />
        <section style={{textAlign: 'center'}}>
        <table>
          <tbody>

          <tr>
            <th>Status</th>
            <th>Identificador</th>
            <th>Medico</th>
            <th>Fecha</th>
            <th>Motivo</th>
          </tr>
          {data.map(row => (
            <tr className={row.status === 'closed' ? 'status-closed' : 'status-open'} key={row.id}>
              <td><Tooltip title="Consulta en proceso"><span className={row.status}></span></Tooltip></td>
              <td>{row.id}</td>
              <Tooltip title={row.medicId}><td>{row.medicId.split('-')[0]}...</td></Tooltip>
              <td>{row.createdAt.split('T')[0]}</td>
              <Tooltip title={row.motive} ><td>{`${row.motive.split(' ')[0]} ${row.motive.split(' ')[1]}...`}</td></Tooltip>
              <td><Button className={row.status === 'closed' ? 'status-closed' : 'status-open'} onClick={() => history.push(`/dashboard/consult/pacient/chat/${row.id}`)}>Ver más</Button></td>
            </tr>
          ))}
          </tbody>
        </table>
        <Button className="btn primary-btn" style={{ margin: 'auto'}} onClick={() => history.push('/dashboard/consult/generate')}>Nueva consulta</Button>
        </section>
      </main>
    </div>
  )
}

export default History
