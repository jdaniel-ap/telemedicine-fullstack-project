import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Tooltip from "@material-ui/core/Tooltip";
import { LinearProgress } from "@material-ui/core";
import capitalize from "capitalize";

import { useHistory } from "react-router-dom";
import { getMedicConsults } from "../../services/api";
import { useDispatch } from "react-redux";
import { setStatus } from "../../redux/slices/consultSlice";

function MedicDashboard() {
  const history = useHistory();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem("user"));
    setLoad(true);

    async function fetchConsult() {
      const { data } = await getMedicConsults(token);
      setData(data);
      setLoad(false);
    }

    fetchConsult();
  }, []);

  function handleConsult(row) {
    dispatch(setStatus(row.status));
    localStorage.setItem("consults", JSON.stringify(data));
    history.push(`/consult/medic/chat/${row.id}/${row.userId}`);
  }

  return (
    <div className="content">
      <Header />
      <main>
        <section className="medic-dash" style={{ textAlign: "center" }}>
          {load ? (
            <LinearProgress />
          ) : (
            <table>
              <tbody>
                <tr>
                  <th>Status</th>
                  <th>Identificador</th>
                  <th className="test">Paciente</th>
                  <th className="test">Fecha</th>
                  <th>Motivo</th>
                </tr>
                {data.map((row) => (
                  <tr
                    className="status-open"
                    key={row.id}
                    onClick={() => handleConsult(row)}
                  >
                    <td>
                      <Tooltip title="Consulta en proceso">
                        <span className={row.status}></span>
                      </Tooltip>
                    </td>
                    <td>{row.id}</td>
                    <Tooltip className="test" title={row.userId}>
                      <td>{capitalize.words(row.user.userData.fullname)}</td>
                    </Tooltip>
                    <td className="test">{row.createdAt.split("T")[0]}</td>
                    <Tooltip title={row.motive}>
                      <td>{`${row.motive.split(" ")[0]} ${
                        row.motive.split(" ")[1]
                      }...`}</td>
                    </Tooltip>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
}

export default MedicDashboard;
