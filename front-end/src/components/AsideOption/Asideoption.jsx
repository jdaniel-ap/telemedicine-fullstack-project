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
import { setAsideEvent } from '../../redux/slices/appSlice';
import { useDispatch, useSelector } from 'react-redux';

function Asideoption({ name, linkId }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const asideEvent = useSelector(state => state.appEvents.asideEvents)

  function handleAsideEvent({target}) {
    dispatch(setAsideEvent(target.innerText));
    history.push(linkObj[name]);
    
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
