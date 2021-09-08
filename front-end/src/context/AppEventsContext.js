import React, { createContext, useState } from 'react';

export const AppEventsContext = createContext();

export default function AppEventsContextProvider(props) {
  const [asideEvent, setAsideEvent] = useState('');
  const [userData, setUserData] = useState({ username: '', email: '', fullname: '', id: ''});

  return(
    <AppEventsContext.Provider value={{asideEvent, setAsideEvent, userData, setUserData}}>
      {props.children}
    </AppEventsContext.Provider>
  )
}
