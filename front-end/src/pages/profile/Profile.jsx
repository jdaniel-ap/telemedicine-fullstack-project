import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Button } from "@material-ui/core";
import Aside from "../../components/Aside/Aside";
import profileImg from "../../assets/images/profileData.svg";
import Tooltip from "@material-ui/core/Tooltip";
import { editUserData } from "../../services/api";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser, setUser } from "../../redux/slices/appSlice";

import "./profile.scss";

function Profile() {
  const [userValues, setUserValues] = useState({});
  const [editInput, setEditInput] = useState(false);
  const history = useHistory();
  const userData = useSelector((state) => state.appEvents.userData);
  const dispatch = useDispatch();

  async function saveChanges() {
    const localStorageValues = JSON.parse(localStorage.getItem("user"));
    const { data } = await editUserData(userData, localStorageValues.token);
    if (data.token) {
      localStorage.setItem(
        "user",
        JSON.stringify({ token: data.token, userInfo: userData })
      );
      setEditInput(false);
      dispatch(setUser(userData));
    } else if (data.message === "jwt malformed") {
      localStorage.removeItem("user");
      history.push("/");
    }
  }

  function enableInput(target) {
    setUserValues(userData);
    setEditInput(true);
  }

  function cancelEditData() {
    dispatch(setUser(userValues));
    setEditInput(false);
  }

  function handleUserData({ target }) {
    const { name, value } = target;
    dispatch(editUser({ name, value }));
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!userData.id) {
      dispatch(setUser(user.userInfo));
    }
  }, [dispatch, userData.id]);

  return (
    <div className="content">
      <Header />
      <main>
        <Aside />
        <section>
          <h2>Informacion basica</h2>
          <div className="welcome-content">
            <div>
              <span>ID</span>
              <Tooltip title="El ID no puede ser editado">
                <input
                  type="text"
                  name="id"
                  className="profile-input-disable"
                  value={userData.id}
                  readOnly
                />
              </Tooltip>
            </div>
            <div>
              <span>User</span>
              <input
                type="text"
                name="fullname"
                className={`${
                  editInput ? "profile-input" : "profile-input-disable"
                }`}
                value={userData.username}
                readOnly={!editInput ? true : false}
                onChange={(e) => handleUserData(e)}
              />
            </div>
            <div>
              <span>Email</span>
              <input
                type="text"
                name="email"
                className={`${
                  editInput ? "profile-input" : "profile-input-disable"
                }`}
                value={userData.email}
                readOnly={!editInput ? true : false}
                onChange={(e) => handleUserData(e)}
              />
            </div>
          </div>
          <div className="button-container">
            <Button
              onClick={editInput ? saveChanges : enableInput}
              className="btn primary-btn"
              // style={{ borderRadius: 10 }}
            >
              {editInput ? "Guardar" : "Editar informacion"}
            </Button>
            <Button
              onClick={cancelEditData}
              className={editInput ? "btn secondary-btn" : "hide-element"}
            >
              Cancelar
            </Button>
          </div>
        </section>
        <img src={profileImg} alt="profile" className="page-forniture" />
      </main>
    </div>
  );
}

export default Profile;
