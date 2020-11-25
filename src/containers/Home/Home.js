import React from "react";
import Weather from "../Weather/Weather";
import { Container, Row } from "reactstrap";

import "./Home.css";
import ToDoCard from "../ToDoList/ToDoCard";
import ToDoList from "../ToDoList/ToDoList";

function Home() {
  return (
    <Container className="home">
      <Weather />
      <ToDoList />
    </Container>
  );
}

export default Home;
