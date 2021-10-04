import React from 'react';
import Header from '../../components/Header/Header';
import Aside from '../../components/Aside/Aside';

import './pacientConsult.scss'
import Chat from '../../components/Chat/chat';

function PacientConsult() {
  return (
    <div className="content">
      <Header />
      <main>
        <Aside />
        <section style={{ display: 'flex', justifyContent: 'center'}}>
          <div>
            <Chat />
          </div>
          <div className="chat-box">
          </div>
        </section>
      </main>
    </div>
  )
}

export default PacientConsult
