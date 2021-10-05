import React, { useEffect, useState } from 'react';
import { Tooltip } from '@material-ui/core/';

import Header from '../../components/Header/Header';
import Chat from '../../components/Chat/chat';

import { getPacientData } from '../../services/api';
import { useParams } from "react-router-dom";

import { FormControlLabel, Checkbox, Button } from '@material-ui/core'

import './medicConsult.scss';

function MedicConsult() {
  const [pacientInfo, setpacientInfo] = useState({pacientData: {}, healthData: { isAlergic: null, useAlcohol: null, useCigars: null }});
  const { pacientData, healthData } = pacientInfo;
  const { token } = JSON.parse(localStorage.getItem('user'));
  // const [load, setLoad] = useState(false);
  const { pacient } = useParams();

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
  }, [pacientData])

  return (
    <div className="content">
      <Header />
      <main>
        <div className='pacient-data'> 
    {/* <h2 className="medic-dashboard-title">Ultima consulta</h2> */}
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
          <span className="pacient-details">En espera</span>
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
