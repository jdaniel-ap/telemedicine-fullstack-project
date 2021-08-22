import React from 'react'

function Asideoption({ name, state, setState }) {
  function handleAsideEvent({target}) {
    setState(target.innerText);
  }
  return (
    <span className={state === name ? 'selected':''} onClick={(e) => handleAsideEvent(e)}>{name}</span>
  )
}

export default Asideoption
