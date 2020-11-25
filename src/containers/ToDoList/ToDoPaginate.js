import React, { useEffect, useState } from "react";
import { ListGroupItem, Pagination } from "react-bootstrap";
import ToDoCard from "./ToDoCard";
import "./ToDoList.css";
function ToDoPaginate({ todos, removeToDo }) {
  const [active, setActive] = useState(1);
  const [pages, setpages] = useState([]);
  const [list, setList] = useState([]);
  useEffect(
    function () {
      let newpages = [];
      for (let number = 0; number < todos.length / 3; number++) {
        newpages.push(
          <Pagination.Item
            key={number + 1}
            active={number + 1 === active}
            value={number + 1}
            onClick={() => handleClick(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        );
      }
      const start = (active - 1) * 3;
      console.log(start, ":", newpages);
      setpages(newpages);
      setList(todos.slice(start, start + 3));
    },
    [active, todos]
  );

  function handleClick(value) {
    console.log(value);
    setActive(value);
  }

  return (
    <div>
      {list.map(({ description }, idx) => (
        <ListGroupItem key={`todo-${idx}`}>
          <ToDoCard
            id={`todo-${idx}`}
            description={description}
            remove={removeToDo}
          />
        </ListGroupItem>
      ))}
      <Pagination className="d-inline-flex" size="sm">
        {pages}
      </Pagination>
    </div>
  );
}
export default ToDoPaginate;
