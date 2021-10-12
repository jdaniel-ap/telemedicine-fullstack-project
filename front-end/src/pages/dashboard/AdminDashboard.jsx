import React, { useEffect } from "react";
import emptyImg from "../../assets/images/empty.svg";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/appSlice";

import "./adminDashboard.scss";

function AdminDashboard() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.appEvents.userData);

  useEffect(() => {
    const { userInfo } = JSON.parse(localStorage.getItem("user"));
    dispatch(setUser(userInfo));
  }, [dispatch]);

  return (
    <div className="content">
      <Header />
      <main>
        <Aside />
        <section>
          <h2>
            Hola
            {"\n"}
            {userData
              ? userData.fullname && userData.fullname.split(" ")[0]
              : ""}
            , tienes
            <span> 0</span> novedades
          </h2>
          <div className="welcome-content">
            <img src={emptyImg} alt="empty place" />
          </div>
        </section>
      </main>
    </div>
  );
}

/*
2)  Axios
3)  Refactorizar los pages que tienen Header
4)  Agregar exceptions en el endpoint de editar
5)  Mover token verification al backend
*/

export default AdminDashboard;
