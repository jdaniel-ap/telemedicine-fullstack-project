import React from 'react';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import Tooltip from '@material-ui/core/Tooltip';
import './history.scss';

function History() {
  return (
    <div className="content">
      <Header />
      <main>
        <Aside />
        <section style={{textAlign: 'left'}}>
        <table>
          <tbody>

          <tr>
            <th>Status</th>
            <th>Paciente</th>
            <th>Email</th>
            <th>Fecha</th>
            <th>Motivo</th>
          </tr>
          <tr className="status-closed">
            <td><Tooltip title="Consulta terminada"><span className="finished"></span></Tooltip></td>
            <td>Alfreds Futterkiste</td>
            <td>Futterskiste@yahoo.ger</td>
            <td>11/05/2020</td>
            <td>Chequeo</td>
          </tr>
          <tr className="status-closed">
          <td><Tooltip title="Consulta terminada"><span className="finished"></span></Tooltip></td>
            <td>Francisco Chang</td>
            <td>Moctezuma_1996@hotmail.com</td>
            <td>20/05/2020</td>
            <td>Examenes</td>
          </tr>
          <tr className="status-closed">
          <td><Tooltip title="Consulta terminada"><span className="finished"></span></Tooltip></td>
            <td>Ernst Handel</td>
            <td>ernestohandel2000@outlook.com</td>
            <td>21/07/2020</td>
            <td>Molestia</td>
          </tr>
          <tr className="status-open">
          <td><Tooltip title="Consulta abierta"><span className="open"></span></Tooltip></td>
            <td>Helen Bennett</td>
            <td>helencool@gmail.com</td>
            <td>30/09/2020</td>
            <td>Molestia</td>
          </tr>
          </tbody>
        </table>
        </section>
      </main>
    </div>
  )
}

export default History
