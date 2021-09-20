import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import { Checkbox } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import {
  resetUserData,
  setDefaultData,
  setHealthData,
  setUserData,
} from "../../redux/slices/updateDataSlice";
import { setUserDataRequest, getUserDataRequest } from "../../services/api";

import "./mainData.scss";

function MainData() {
  const [editInput, setEditInput] = useState(false);
  const [defaultState, setDefaultState] = useState({});
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.userMedicData);
  const { userData, healthData } = globalState;
  const { token } = JSON.parse(localStorage.getItem("user"));
  const enableEditField = `${
    editInput ? "profile-input" : "profile-input-disable"
  }`;

  const sendRequest = async () => {
    await setUserDataRequest(globalState, token);
  };

  const handleHealthData = ({ target }) => {
    const { value, checked, name, type } = target;
    dispatch(setHealthData({ value, checked, name, type }));
  };

  const handleUserData = ({ target }) => {
    const { value, name, type } = target;
    dispatch(setUserData({ name, value, type }));
  };

  const enableEditInput = () => {
    setDefaultState(globalState);
    setEditInput(true);
  };

  const disableEditInput = () => {
    setEditInput(false);

    dispatch(resetUserData({ defaultState }));
  };

  useEffect(() => {
    async function getData() {
      const { data } = await getUserDataRequest(token);
      const { healthData, ...basicData } = data;
      const { id, userId, ...basicUserData } = basicData;
      dispatch(setDefaultData({ healthData, userData: basicUserData }));
    }
    if (!userData.id) {
      getData();
    }
  }, []);

  return (
    <div className="content">
      <Header />
      <main>
        <Aside />
        <section>
          <h2>Historia medica</h2>
          <div className="health-content">
            <div className="checkbox-area">
              <div>
                <span>Alergias</span>
                <Checkbox
                  color="secondary"
                  className="check"
                  name="isAlergic"
                  disabled={!editInput ? true : false}
                  checked={healthData.isAlergic}
                  onChange={(e) => handleHealthData(e)}
                />
              </div>
              <div>
                <span>Consumo de alcohol</span>
                <Checkbox
                  color="secondary"
                  name="useAlcohol"
                  className="check"
                  disabled={!editInput ? true : false}
                  checked={healthData.useAlcohol}
                  onChange={(e) => handleHealthData(e)}
                />
              </div>
              <div>
                <span>Tabaquismo</span>
                <Checkbox
                  color="secondary"
                  name="useCigars"
                  className="check"
                  disabled={!editInput ? true : false}
                  checked={healthData.useCigars}
                  onChange={(e) => handleHealthData(e)}
                />
              </div>
              <div>
                <span>Drogas ilicitas</span>
                <Checkbox
                  color="secondary"
                  name="useDrugs"
                  className="check"
                  disabled={!editInput ? true : false}
                  checked={healthData.useDrugs}
                  onChange={(e) => handleHealthData(e)}
                />
              </div>
              <div>
                <span>Medicamentos</span>
                <Checkbox
                  color="secondary"
                  name="useMedication"
                  className="check"
                  disabled={!editInput ? true : false}
                  checked={healthData.useMedication}
                  onChange={(e) => handleHealthData(e)}
                />
              </div>
            </div>
            <div>
              <span>Nombres</span>
              <input
                type="text"
                name="fullname"
                className={enableEditField}
                placeholder="Nombre y apellido"
                value={userData.fullname}
                onChange={(e) => handleUserData(e)}
              />
            </div>
            <div>
              <span>Edad</span>
              <input
                type="number"
                name="age"
                value={userData.age}
                className={enableEditField}
                onChange={(e) => handleUserData(e)}
              />
            </div>
            <div>
              <span>Sexo</span>
              <input
                type="text"
                name="sex"
                value={userData.sex}
                className={enableEditField}
                onChange={(e) => handleUserData(e)}
              />
            </div>
            <div>
              <span>Raza</span>
              <input
                type="text"
                name="race"
                value={userData.race}
                className={enableEditField}
                onChange={(e) => handleUserData(e)}
              />
            </div>
            <div>
              <span>Altura</span>
              <input
                type="number"
                name="height"
                placeholder="Metros"
                value={userData.height}
                className={enableEditField}
                onChange={(e) => handleUserData(e)}
              />
            </div>
            <div>
              <span>Peso</span>
              <input
                type="number"
                placeholder="Kilogramos"
                name="weight"
                value={userData.weight}
                className={enableEditField}
                onChange={(e) => handleUserData(e)}
              />
            </div>

            <div
              className={`hide-element-check ${
                healthData.isAlergic && "show-element-check"
              }`}
              >
              <span>Indicanos a que eres alergico</span>
              <input
                type="text"
                name="alergics"
                value={healthData.alergics}
                className={enableEditField}
                onChange={(e) => handleHealthData(e)}
                />
            </div>
            <div
              className={`hide-element-check ${
                healthData.useCigars && "show-element-check"
              }`}
            >
              <span>Consumo de cigarros/dia</span>
              <input
                type="text"
                name="howManyCigars"
                value={healthData.howManyCigars}
                className={enableEditField}
                onChange={(e) => handleHealthData(e)}
              />
            </div>
            <div
              className={`hide-element-check ${
                healthData.useAlcohol && "show-element-check"
              }`}
            >
              <span>Frecuencia de ingesta de alcohol</span>
              <input
                type="text"
                name="howMuchAlcohol"
                value={healthData.howMuchAlcohol}
                className={enableEditField}
                onChange={(e) => handleHealthData(e)}
              />
            </div>
            <div
              className={`hide-element-check ${
                healthData.useDrugs && "show-element-check"
              }`}
            >
              <span>Droga, cantidad y frecuencia</span>
              <input
                type="text"
                name="howManyDrugs"
                value={healthData.howManyDrugs}
                className={enableEditField}
                onChange={(e) => handleHealthData(e)}
              />
            </div>
            <div
              className={`hide-element-check ${
                healthData.useMedication && "show-element-check"
              }`}
            >
              <span>Uso medicamentos y frecuencia</span>
              <input
                type="text"
                name="whichMedications"
                value={healthData.whichMedications}
                className={enableEditField}
                onChange={(e) => handleHealthData(e)}
              />
            </div>
            <div className="health-textarea">
              <span>Comorbidades</span>
              <textarea
                type="text"
                name="comorbidity"
                className={`${enableEditField} profile-textarea`}
                value={healthData.comorbidity}
                onChange={(e) => handleHealthData(e)}
              />
            </div>
          </div>
          <div className="btn-container">
            <Button
              className="btn primary-btn"
              onClick={!editInput ? enableEditInput : sendRequest}
            >
              {editInput ? "Salvar" : "Editar"}
            </Button>
            <Button
              className="btn cancel-btn"
              onClick={disableEditInput}
              disabled={editInput && false}
            >
              {editInput ? "Cancelar" : ""}
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainData;
