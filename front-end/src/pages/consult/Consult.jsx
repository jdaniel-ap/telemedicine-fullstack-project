import { Button, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import { generateConsult } from "../../services/api";
import Alert from "../../components/Modal/Alert";
import fill from "../../assets/images/filldata.svg";

import "./consult.scss";

function Consult() {
  const { userInfo } = JSON.parse(localStorage.getItem("user"));
  const [consult, setConsult] = useState({
    userId: "",
    medicId: "",
    motive: "",
  });
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState("");
  const [prev, setPrev] = useState("");
  const history = useHistory();

  const setDefaultData = useCallback(() => {
    setConsult((prevState) => ({ ...prevState, userId: userInfo.id }));
  }, [userInfo.id]);

  useEffect(() => {
    setDefaultData();
  }, [setDefaultData]);

  function handleConsult({ target }) {
    const { name, value } = target;
    setConsult((prevState) => ({ ...prevState, [name]: value }));
  }

  async function requestConsult() {
    const { token } = JSON.parse(localStorage.getItem("user"));

    try {
      setLoad(true);
      if (consult.motive.split(" ").length < 3)
        throw new Error(
          "El motivo de la consulta tiene que tener por lo minimo 10 palabras"
        );
      const request = await generateConsult(consult, token, prev);
      console.log(request);
      if (request.data.status === "error")
        throw new Error(request.data.message);
      setLoad(false);
      if (request.data.status === "success")
        return history.push("/dashboard/consult/");
    } catch (err) {
      setError(true);
      handleError(err.message);
    }
  }

  function handleError(msg) {
    setLoad(false);
    setMessage(msg);
    setError(true);
    setTimeout(() => setError(false), 4000);
  }

  const prevImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setPrev(reader.result);
    };
  };

  return (
    <div className="content">
      <Header />
      <main>
        <Aside />
        <section>
          <h2>Consultas</h2>
          <div className={!userInfo.userData ? "hide" : "new-consult"}>
            <Alert className={error ? "error" : ""}>{message}</Alert>
            <div>
              <span>ID Personal</span>
              <input
                type="text"
                defaultValue={consult.userId}
                readOnly
                className="disable-input"
              />
            </div>
            <div>
              <span>ID Medico</span>
              <input
                name="medicId"
                type="text"
                placeholder="Ingresa el ID del Medico"
                onChange={(e) => handleConsult(e)}
              />
            </div>
            <div>
              <span>Examen</span>
              <input
                name="medicId"
                type="file"
                onChange={(e) => prevImage(e)}
              />
            </div>
            <div>
              <span>Motivo de consulta</span>
              <textarea
                name="motive"
                placeholder="Por favor, ingrese el motivo de su consulta. Recuerde ser detallado mientras explica su caso."
                onChange={(e) => handleConsult(e)}
              />
            </div>
            <Button
              className="btn primary-btn"
              onClick={() => requestConsult()}
            >
              {load ? <CircularProgress color="inherit" /> : "Generar consulta"}
            </Button>
          </div>
          <div className={userInfo.userData ? "hide" : "data-error"}>
            <img src={fill} alt="fill your user data" width="400px" />
            <p>
              Para poder realizar consultas necesitas rellenar tu historia
              medica en la seccion de Historia
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Consult;
