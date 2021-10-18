import React, { useContext, useState } from "react";
import illustrationImg from "../../assets/images/asd3.png";
import logoImg from "../../assets/images/newlogo.png";
import Button from "../../components/Button/Button";
import Alert from "../../components/Modal/Alert";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { NotificationContainer } from "react-notifications";

import "../auth/auth.scss";
import "react-notifications/lib/notifications.css";

function Auth() {
  const [load, setLoad] = useState(false);
  const [alert, setAlert] = useState(false);
  const signState = useSelector((state) => state.authentication.signState);
  const { fillFormFields, handleLogin, setSignState } = useContext(AuthContext);

  async function handleLoad(event) {
    setLoad(true);
    const request = await handleLogin(event, true);
    if (request) {
      setLoad(false);
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 4000);
    }
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="simbolize a question" />
        <p>Rellena el formulario y comienza a gestionar tu tiempo</p>
      </aside>
      <main>
        <Alert className={alert ? "error" : ""}>
          Contraseña o usuario incorrectos
        </Alert>
        <div className="main-content">
          <img src={logoImg} alt="Consult" />
          <form action="">
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              onChange={(e) => fillFormFields(e, true)}
            />
            <input
              type="password"
              name="password"
              autoComplete="on"
              placeholder="Contraseña"
              onChange={(e) => fillFormFields(e, true)}
            />
            <Button onClick={(e) => handleLoad(e)}>
              {load ? <CircularProgress color="inherit" /> : "Iniciar sesion"}
            </Button>
          </form>
          <p>
            Si no tienes cuenta puedes registrarte {"\n"}
            <Link
              to="/signup"
              onClick={() =>
                setSignState((prevState) => ({ ...prevState, signIn: false }))
              }
            >
              aqui
            </Link>
          </p>
        </div>
        {signState.signIn && (
          <Alert className="error" onClick>
            Usuario o contraseña incorrectos
          </Alert>
        )}
      </main>
      <NotificationContainer />
    </div>
  );
}

export default Auth;
