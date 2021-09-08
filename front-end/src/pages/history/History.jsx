import React from 'react';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
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
            <th>Paciente</th>
            <th>Email</th>
            <th>Pais</th>
            <th>Fecha</th>
            <th>Motivo</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Futterskiste@yahoo.ger</td>
            <td>Alemania</td>
            <td>11/05/2020</td>
            <td>Chequeo</td>
          </tr>
          <tr>
            <td>Francisco Chang</td>
            <td>Moctezuma_1996@hotmail.com</td>
            <td>Mexico</td>
            <td>20/05/2020</td>
            <td>Examenes</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>ernestohandel2000@outlook.com</td>
            <td>Austria</td>
            <td>21/07/2020</td>
            <td>Molestia</td>
          </tr>
          <tr>
            <td>Helen Bennett</td>
            <td>helencool@gmail.com</td>
            <td>UK</td>
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
