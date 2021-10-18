import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import socket from "../../services/socket";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./chat.scss";
import { getChatHistory } from "../../services/api";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "60vh",
    width: "95%",
    overflowY: "auto",
  },
});

const Chat = ({ status }) => {
  const { userInfo, token } = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  // const [chatInfo, setChatInfo] = useState({});
  const [history, setHistory] = useState([]);
  const [link, setLink] = useState("");
  const { id } = useParams();
  const scrollRef = useRef(null);
  const consultState = useSelector((state) => state.consult.status);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [history]);

  function formatUrl(chatData) {
    if (chatData.format === "pdf") {
      const format = chatData.url.split("pdf");
      format[1] = "jpg";
      return setLink(format.join(""));
    } else {
      return setLink(chatData.url);
    }
  }

  function handleMessage({ target }) {
    setMessage(target.value);
  }

  async function getChat() {
    const request = await getChatHistory(id, token);
    if (request) {
      setHistory(request.messages);
      if (request.images[0]) {
        console.log(request.images);
        console.log("request.images");
        // setChatInfo(request.images);
        formatUrl(request.images[0]);
      }
    }
  }

  function handleChat(e) {
    e.preventDefault();
    const date = new Date();
    const time = `${date.getHours()}:${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }`;
    setChat({ message: message, time, user: userInfo.id, room: id });
    setMessage("");
  }

  useEffect(() => {
    socket.emit("message", chat);
  }, [chat]);

  useEffect(() => {
    socket.emit("join_room", id);
    socket.emit("message", { room: id, user: userInfo.username });
    getChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  socket.off("message").on("message", (data) => {
    setHistory((state) => [...state, data]);
  });

  socket.on("sendMessage", (orderEvent) => {});

  return (
    <div className="chat-box" style={{ overflow: "hidden" }}>
      <a target="_blank" rel="noreferrer" href={link}>
        <div className={link ? "images-link" : "hide"}>
          Ver archivos de la consulta
        </div>
      </a>
      <Grid>
        <Grid item xs={12}>
          <List className={classes.messageArea}>
            {history.map(({ message, time, user }, index) =>
              message ? (
                <ListItem key={index} ref={scrollRef}>
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        align={user === userInfo.id ? "right" : "left"}
                        primary={message}
                      ></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        align={user === userInfo.id ? "right" : "left"}
                        secondary={time}
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
              ) : (
                <ListItem ref={scrollRef}>
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText
                        align="center"
                        secondary={`${user} se ha unido a la sala`}
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
              )
            )}
          </List>
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
            }}
            onSubmit={(e) => handleChat(e)}
          >
            <input
              type="text"
              onChange={(e) => handleMessage(e)}
              value={message}
              style={{ width: "85%", marginRight: "5px" }}
              disabled={consultState === "closed" || consultState === "wait"}
            />
            <Fab color="primary" aria-label="add" type="submit">
              <SendIcon />
            </Fab>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
