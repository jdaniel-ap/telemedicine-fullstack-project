import React, { useContext } from "react";
import { Link } from "react-router-dom";
import illustrationImg from "../../assets/images/register.png";
import logoImg from "../../assets/images/Untitled.png";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../context/AuthContext";
import Alert from "../../components/Modal/Alert";
import { useDispatch, useSelector } from "react-redux";
import { resetSignup } from "../../redux/slices/authSlice";
import { CircularProgress } from "@material-ui/core";

import "./signup.scss";

function Signup() {
  const dispatch = useDispatch();
  const globaState = useSelector((state) => state.authentication);
  const { signState, signupValues } = globaState;
  const { fillFormFields, handleSignup } = useContext(AuthContext);

  const resetForm = () => {
    dispatch(resetSignup());
  };

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="simbolize a question" />
        <p>Registrate en Medtools y facilita la gestion tu tiempo</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Consult" />
          <form action="">
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              value={signupValues.username}
              onChange={(e) => fillFormFields(e)}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={signupValues.email}
              onChange={(e) => fillFormFields(e)}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={signupValues.password}
              onChange={(e) => fillFormFields(e)}
            />
            <div className="radio-container">
              <span>Soy medico</span>
              <input
                type="checkbox"
                name="medicRole"
                checked={signupValues.medicRole}
                onChange={(e) => fillFormFields(e)}
              ></input>
            </div>
            <Button onClick={(e) => handleSignup(e)}>
              {signState.signUp ? (
                <CircularProgress color="inherit" />
              ) : (
                "Registrarse"
              )}
            </Button>
            <p>
              Si ya tienes cuenta puedes ingresar{" "}
              <Link to="/" onClick={() => resetForm()}>
                aqui
              </Link>
            </p>
          </form>
        </div>
        {signState.serverResponse.message && (
          <Alert className={signState.serverResponse.status}>
            {signState.serverResponse.message}
          </Alert>
        )}
      </main>
    </div>
  );
}

export default Signup;
