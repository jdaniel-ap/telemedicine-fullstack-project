import React, { useContext } from 'react';
import Aside from '../../components/Aside/Aside';
import ConsultCards from '../../components/ConsultCards/ConsultCards';
import Header from '../../components/Header/Header';
import { AppEventsContext } from '../../context/AppEventsContext';
import './consult.scss';

function Consult() {
  const { userData } = useContext(AppEventsContext);

  return (
    <div className="content">
      <Header />
      <main>
      <Aside userId={userData.id} />
        <section>
          <h2>Consultas</h2>
          <ConsultCards />
        </section>
      </main>
    </div>
  )
}

export default Consult
