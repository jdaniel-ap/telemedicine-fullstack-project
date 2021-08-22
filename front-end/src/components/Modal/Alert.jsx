import React from 'react';
import './alert.scss'

function Alert(props) {
  const handleAlert = () => {
    return(
     <em  {...props} />
    );
  }
  return (
    handleAlert()
  )
}

export default Alert
