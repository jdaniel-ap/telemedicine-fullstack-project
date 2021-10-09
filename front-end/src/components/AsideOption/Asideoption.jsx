import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SvgIcon } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { LocalHospital, LocalHospitalOutlined, DashboardOutlined, Dashboard, Description, DescriptionOutlined } from '@material-ui/icons';


function Asideoption({ name, linkId }) {
  const location = useLocation();
  const history = useHistory();
  const asideEvent = useSelector(state => state.appEvents.asideEvents)

  function handleAsideEvent() {
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
        className={`${linkObj[name] === location.pathname ? 'selected':''} aside-option`}
        onClick={(e) => handleAsideEvent(e)}>
        <SvgIcon component={icons[name]} />
        {name}
      </span>
  )
}

export default Asideoption
