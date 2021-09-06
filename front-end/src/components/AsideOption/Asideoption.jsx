import React from 'react';
import { useHistory } from 'react-router-dom';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { SvgIcon } from '@material-ui/core';

function Asideoption({ name, state, setState, linkId }) {
  const history = useHistory();
  function handleAsideEvent({target}) {
    history.push(linkObj[name])
    setState(target.innerText);
  }

  const icons = {
    Perfil: state === name ? DashboardIcon : DashboardOutlinedIcon,
    Consultas: state === name ? DescriptionIcon : DescriptionOutlinedIcon,
    Historial: state === name ? WatchLaterIcon : WatchLaterOutlinedIcon,
    Configuracion: state === name ? SettingsIcon : SettingsOutlinedIcon,
  }

  const linkObj = {
    Perfil: `/dashboard/profile/${linkId}`,
    Consultas: `/dashboard/consult/${linkId}`,
    Historial: `/dashboard/history/${linkId}`,
    Configuracion: `/dashboard/config/${linkId}`
  }


  return (

      <span
        className={`${state === name ? 'selected':''} aside-option`}
        onClick={(e) => handleAsideEvent(e)}>
        <SvgIcon component={icons[name]} />
        {name}
      </span>

  )
}

export default Asideoption
