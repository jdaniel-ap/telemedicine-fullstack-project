import React, { useEffect, useState } from 'react';
import { Tooltip } from '@material-ui/core/';

import Header from '../../components/Header/Header';
import Chat from '../../components/Chat/chat';

import { getPacientData } from '../../services/api';
import { useParams } from "react-router-dom";

import socket from '../../services/socket';

import { FormControlLabel, Checkbox, NativeSelect } from '@material-ui/core';

import { useSelector } from 'react-redux';

import './medicConsult.scss';

function MedicConsult() {
  const [pacientInfo, setpacientInfo] = useState({pacientData: {}, healthData: { isAlergic: null, useAlcohol: null, useCigars: null }});
  const status = useSelector((state) => state.consult.status);
  const [consultStatus, setConsultStatus] = useState(status);
  const { pacientData, healthData } = pacientInfo;
  const { token } = JSON.parse(localStorage.getItem('user'));
  const { pacient, id } = useParams();

  useEffect(() => {
    const pacientRequest = async () => {
      const { data } = await getPacientData(pacient, token);

      const {  healthData, ...info } = data;

      setpacientInfo({pacientData: info, healthData})
      console.log(pacientInfo)

    }
    pacientRequest();
  }, []);

  useEffect(() => {
    // setLoad(true)
  }, [pacientData]);

  useEffect(() => {
    const consultId = Number(id)
    socket.emit('consult_status', {consultId , consultStatus})
  }, [consultStatus])

  return (
    <div className="content">
      <Header />
      <main>
        <div className='pacient-data'> 
        <div className="consult-dashboard-details">

        <div className="details-box">
          <span>Nombre</span>
          <span className="pacient-details">{pacientData.fullname}</span>
        </div>

        <div className="box">
        <div className="details-box">
            <span>Edad</span>
            <span className="pacient-details">{pacientData.age}</span>
          </div>
          <div className="details-box">
            <span>Altura</span>
            <span className="pacient-details">{pacientData.height}m</span>
          </div>
          <div className="details-box">
            <span>Peso</span>
            <span className="pacient-details">{pacientData.weight}kg</span>
          </div>
          <div className="details-box">
            <span>IMC</span>
            <span className="pacient-details">{(pacientData.weight/Math.pow(pacientData.height, 2)).toFixed(2)} Kg/m2</span>
          </div>
        </div>

        <div className="box">
          <div className="details-box">
            <span>Sexo</span>
            <span className="pacient-details">{pacientData.sex}</span>
          </div>
          <div className="details-box">
            <span>Raza</span>
            <span className="pacient-details">{pacientData.race}</span>
          </div>
          <div className="details-box">
            <span>Status</span>
            <NativeSelect
              defaultValue={status}
              onChange={({ target }) => setConsultStatus(target.value)}
              inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
              }}
            >
              <option value='wait'>Espera</option>
              <option value='open'>Abierta</option>
              <option value='closed'>Cerrada</option>
            </NativeSelect>
          </div>
        </div>

          <div className="box">
            <Tooltip title={healthData.alergics}>
              <div className="details-box">
                <FormControlLabel disabled control={<Checkbox checked={healthData.isAlergic}/>} label="Alergias" />
              </div>
            </Tooltip>
            <div className="details-box">
              <FormControlLabel disabled control={<Checkbox checked={healthData.useCigars}/>} label="Fuma" />
            </div>
            <div className="details-box">
              <FormControlLabel disabled control={<Checkbox checked={healthData.useAlcohol}/>} label="Bebe" />
            </div>
          </div>

          <div className="box">
            <div className="details-box">
              <FormControlLabel disabled control={<Checkbox checked={healthData.useMedication}/>} label="Medicamentos" />
            </div>
            <div className="details-box">
              <FormControlLabel disabled control={<Checkbox checked={healthData.useDrugs}/>} label="Drogas" />
            </div>
          </div>

          <div className="details-box">
            <span>Comorbidades</span>
            <span className="pacient-details">{healthData.comorbidity}</span>
          </div>
          
    </div>

    <Chat />
    
  </div>
      </main>
    </div>
  )
}

export default MedicConsult