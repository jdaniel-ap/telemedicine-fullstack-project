import React from 'react';
import { useHistory } from 'react-router-dom';
import { SvgIcon } from '@material-ui/core';
import { setAsideEvent } from '../../redux/slices/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LocalHospital, LocalHospitalOutlined, DashboardOutlined, Dashboard, Description, DescriptionOutlined } from '@material-ui/icons';

function Asideoption({ name, linkId }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const asideEvent = useSelector(state => state.appEvents.asideEvents)

  function handleAsideEvent({target}) {
    dispatch(setAsideEvent(target.innerText));
    history.push(linkObj[name]);
    
  }

  const icons = {
    Perfil: asideEvent === name ? Dashboard : DashboardOutlined,
    Historia: asideEvent === name ? Description : DescriptionOutlined,
    Consulta: asideEvent === name ? LocalHospital : LocalHospitalOutlined,
  }

  const linkObj = {
    Perfil: `/dashboard/profile/`,
    Historia: `/dashboard/health-data/`,
    Consulta: `/dashboard/consult/`,
    Configuracion: `/dashboard/config/`
  }


  return (
      <span
        className={`${asideEvent === name ? 'selected':''} aside-option`}
        onClick={(e) => handleAsideEvent(e)}>
        <SvgIcon component={icons[name]} />
        {name}
      </span>
  )
}

export default Asideoption
