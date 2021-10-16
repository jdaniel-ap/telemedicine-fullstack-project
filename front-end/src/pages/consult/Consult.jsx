import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import { generateConsult } from "../../services/api";
import Alert from "../../components/Modal/Alert";

import "./consult.scss";

function Consult() {
  const [consult, setConsult] = useState({
    userId: "",
    medicId: "",
    motive: "",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState({});
  const history = useHistory();

  useEffect(() => {
    const { userInfo } = JSON.parse(localStorage.getItem("user"));
    setConsult((prevState) => ({ ...prevState, userId: userInfo.id }));
  }, []);

  function handleConsult({ target }) {
    const { name, value } = target;
    setConsult((prevState) => ({ ...prevState, [name]: value }));
  }

  async function requestConsult() {
    const { token } = JSON.parse(localStorage.getItem("user"));
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "ui1wwfbg");

    try {
      const request = await generateConsult(consult, token, formData);
      if (consult.motive.split(" ").length < 10)
        throw new Error(
          "El motivo de la consulta tiene que tener por lo minimo 10 palabras"
        );
      if (request.status === "success")
        return history.push("/dashboard/consult/");
    } catch (err) {
      handleError(err.message);
    }
  }

  function handleError(msg) {
    const badRequest = "Request failed with status code 400";
    const response =
      "El id introducido no esta asociado a ningun medico, consultorio o asociacion";
    if (msg === badRequest) setMessage(response);
    setError(true);
    setTimeout(() => setError(false), 4000);
  }

  return (
    <div className="content">
      <Header />
      <main>
        <Aside />
        <section>
          <h2>Consultas</h2>
          <div className="new-consult">
            <Alert className={error && "error"}>{message}</Alert>
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
                // accept="image/png, image/gif, image/jpeg"
                onChange={(e) => setImage(e.target.files[0])}
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
              Generar consulta
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Consult;
