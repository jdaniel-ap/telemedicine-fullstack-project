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
    width: "90%",
    overflowY: "auto",
  },
});

const Chat = () => {
  const { userInfo } = JSON.parse(localStorage.getItem("user"));
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [history, setHistory] = useState([]);
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [history]);

  function handleMessage({ target }) {
    setMessage(target.value);
  }

  function handleChat(e) {
    e.preventDefault();
    const { userInfo } = JSON.parse(localStorage.getItem("user"));
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
    console.log(id);
    socket.emit("join_room", id);
    socket.emit("join", { room: id, user: userInfo.username });
  }, []);

  socket.off("join").on("join", (data) => {
    setUsers((state) => [...state, data]);
  });

  socket.off("response").on("response", (data) => {
    setHistory((state) => [...state, data]);
    console.log(data);
  });

  socket.on("sendMessage", (orderEvent) => {});

  return (
    <div>
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
          <form style={{}} onSubmit={(e) => handleChat(e)}>
            <input
              type="text"
              onChange={(e) => handleMessage(e)}
              value={message}
              style={{ width: "85%", marginRight: "20px" }}
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
