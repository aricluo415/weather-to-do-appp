import React, { useState } from "react";
import { ListGroup, ListGroupItem, Row } from "react-bootstrap";
import ToDoForm from "./ToDoForm";
import "./ToDoList.css";
import ToDoPaginate from "./ToDoPaginate";
function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  function addToDo(newToDo) {
    setLoading(true);
    setTodos((todos) => [...todos, newToDo]);
    setLoading(false);
  }

  function removeToDo(id) {
    setLoading(true);
    setTodos((todos) => todos.filter((todo, idx) => `todo-${idx}` !== id));
    setLoading(false);
  }

  if (isLoading) return <div>...Loading</div>;

  return (
    <Row className="toDoList">
      <ListGroup className="toDos">
        <ListGroupItem>
          <ToDoForm addToDo={addToDo} />
        </ListGroupItem>
        <ToDoPaginate todos={todos} removeToDo={removeToDo} addToDo={addToDo} />
      </ListGroup>
    </Row>
  );
}

export default ToDoList;
