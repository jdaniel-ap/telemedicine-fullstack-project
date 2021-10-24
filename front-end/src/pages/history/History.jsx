import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";
import Tooltip from "@material-ui/core/Tooltip";
import { Button, LinearProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { getUserConsults } from "../../services/api";
import socket from "../../services/socket";
import { useDispatch } from "react-redux";
import { setStatus } from "../../redux/slices/consultSlice";

import "./history.scss";

function History() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState([]);
  const { token } = JSON.parse(localStorage.getItem("user"));

  const handlerFetch = useCallback(async () => {
    const { data } = await getUserConsults(token);
    setData(data);
  }, [token]);

  useEffect(() => {
    handlerFetch();
  }, [handlerFetch]);

  socket.on("consult_status", () => {
    handlerFetch();
  });

  function consultStatus(status) {
    if (status === "wait") {
      return "Esperando confirmacion del medico";
    } else if (status === "open") {
      return "Consulta abierta";
    }

    return "Consulta cerrada";
  }

  function handleConsult(row) {
    dispatch(setStatus(row.status));
    history.push(`/dashboard/consult/pacient/chat/${row.id}`);
  }

  return (
    <div className="content">
      <Header />
      <main>
        <Aside />
        <section style={{ textAlign: "center" }}>
          <h2 style={{ textAlign: "left" }}>Consultas</h2>
          <table>
            {data.length === 0 ? (
              <LinearProgress />
            ) : (
              <tbody>
                <tr>
                  <th>Status</th>
                  <th>Identificador</th>
                  <th className="test">Medico</th>
                  <th className="test">Fecha</th>
                  <th>Motivo</th>
                </tr>
                {data.map((row) => (
                  <tr
                    className={
                      row.status === "closed" ? "status-closed" : "status-open"
                    }
                    key={row.id}
                  >
                    <td>
                      <Tooltip title={consultStatus(row.status)}>
                        <span className={row.status}></span>
                      </Tooltip>
                    </td>
                    <td>{row.id}</td>
                    <Tooltip title={row.medicId} className="test">
                      <td>{row.medicId.split("-")[0]}...</td>
                    </Tooltip>
                    <td className="test">{row.createdAt.split("T")[0]}</td>
                    <Tooltip title={row.motive}>
                      <td>{`${row.motive.split(" ")[0]} ${
                        row.motive.split(" ")[1]
                      }...`}</td>
                    </Tooltip>
                    <td className="btn-history">
                      <Button
                        disabled={row.status === "wait"}
                        className={`${
                          row.status === "closed"
                            ? "status-closed"
                            : "status-open"
                        } btn-history`}
                        onClick={() => handleConsult(row)}
                      >
                        Ver más
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          <Button
            className="btn primary-btn"
            style={{ margin: "auto" }}
            onClick={() => history.push("/dashboard/consult/generate")}
          >
            Nueva consulta
          </Button>
        </section>
      </main>
    </div>
  );
}

export default History;
