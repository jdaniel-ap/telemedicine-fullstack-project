import React from 'react';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';
import Chat from '../../components/Chat/chat';
import { useSelector } from 'react-redux';

import './pacientConsult.scss'

function PacientConsult() {
  const consultStatus = useSelector(state => state.consult);
  console.log(consultStatus)
  return (
    <div className="content">
      <Header />
      <main>
        <Aside />
        <section style={{ display: 'flex', justifyContent: 'center'}}>
          <div>
            <Chat status={consultStatus} />
          </div>
          <div className="chat-box">
          </div>
        </section>
      </main>
    </div>
  )
}

export default PacientConsult
