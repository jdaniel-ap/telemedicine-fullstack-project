import React from 'react';
import Aside from '../../components/Aside/Aside';
import Header from '../../components/Header/Header';
import './consult.scss';

function Consult() {

  return (
    <div className="content">
      <Header />
      <main>
      <Aside />
        <section>
          <h2>Consultas</h2>
          {/* <ConsultCards /> */}
        </section>
      </main>
    </div>
  )
}

export default Consult
