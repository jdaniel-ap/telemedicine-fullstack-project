import React from 'react';
import logo from '../../assets/images/newlogo.png';
import { Avatar, IconButton, Tooltip, Button } from '@material-ui/core/';
import {Settings, Notifications, ExitToApp, SmokingRooms, LocalBar, ScatterPlot } from '@material-ui/icons/';

import './medicDashboard.scss';

function MedicDashboard() {
  return (
    <div className="content">
      <header className='new-header'>
      <div>
        <img src={logo} alt="medtools" />
        <div>
          <span>Consultas</span>
          <span>Historial</span>
          <span>Ayuda</span>
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', padding: '10px'}}>

        <IconButton>
          <Settings style={{ fontSize: '25px', margin: '0px'}} />
        </IconButton>
        <IconButton>
          <Notifications style={{ fontSize: '25px'}} />
        </IconButton>
        <Tooltip title='Salir'>
          <IconButton>
            <ExitToApp style={{ fontSize: '25px'}} />
          </IconButton>
        </Tooltip>
        </div>
        <Avatar className="avatar" style={{backgroundColor: '#ee5253'}}>N</Avatar>
      </div>
      </header>
      <main>
        <section>
          <h2 className="medic-dashboard-title">Ultima consulta</h2>
          <div className="consult-dashboard-details">
            <div className="details-box">
                <span>Referencia</span>
              <Tooltip title='click para copiar'>
                <span className="pacient-details">e0a9254f-3a6d-48f6-a2b6-9e8...</span>
              </Tooltip>
            </div>
            <div className="details-box">
              <span>Nombre</span>
              <span className="pacient-details">Jose Daniel Arreaza</span>
            </div>
            <div className="box">
              <div className="details-box">
                <span>Altura</span>
                <span className="pacient-details">1.90m</span>
              </div>
              <div className="details-box">
                <span>Peso</span>
                <span className="pacient-details">90kg</span>
              </div>
              <div className="details-box">
                <span>ICM</span>
                <span className="pacient-details">26 Kg/m2</span>
              </div>
            </div>
            <div className="box">
              <div className="details-box">
                <Tooltip title='Fumador'>
                  <SmokingRooms style={{ fontSize: '35px', margin: '5px 30px 0px 0', cursor: 'pointer'}} />
                </Tooltip>
              </div>
              <div className="details-box">
                <Tooltip title='Alergico'>
                  <ScatterPlot style={{ fontSize: '35px', margin: '5px 30px 0px 0', cursor: 'pointer'}}  />
                </Tooltip>
              </div>
              <div className="details-box">
              <Tooltip title='Consume Alcoghol'>
                <LocalBar style={{ fontSize: '35px', margin: '5px 30px 0px 0', cursor: 'pointer'}}  />
              </Tooltip>
              </div>
            </div>
            <div className="details-box">
              <span>Motivo de consulta</span>
              <span className="pacient-details">Doctor tengo una molestia en el ano, no puedo echar una cagaita</span>
            </div>
            <Button className="primary-btn">
              Entrar
            </Button>
          </div>
        </section>
        <section>

        </section>
      </main>
    </div>
  )
}

export default MedicDashboard
