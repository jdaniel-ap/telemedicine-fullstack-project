import React, { useContext } from 'react';
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
import { AppEventsContext } from '../../context/AppEventsContext';

function Asideoption({ name, linkId }) {
    const { asideEvent, setAsideEvent } = useContext(AppEventsContext)
  const history = useHistory();
  function handleAsideEvent({target}) {
    history.push(linkObj[name])
    setAsideEvent(target.innerText);
  }

  const icons = {
    Perfil: asideEvent === name ? DashboardIcon : DashboardOutlinedIcon,
    Consultas: asideEvent === name ? DescriptionIcon : DescriptionOutlinedIcon,
    Historial: asideEvent === name ? WatchLaterIcon : WatchLaterOutlinedIcon,
    Configuracion: asideEvent === name ? SettingsIcon : SettingsOutlinedIcon,
  }

  const linkObj = {
    Perfil: `/dashboard/profile/${linkId}`,
    Consultas: `/dashboard/consult/${linkId}`,
    Historial: `/dashboard/history/${linkId}`,
    Configuracion: `/dashboard/config/${linkId}`
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
