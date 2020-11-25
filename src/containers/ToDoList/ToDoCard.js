import React from "react";
import { Card, Button, Row, Col, Input } from "react-bootstrap";
import "./ToDoCard.css";
function ToDoCard({ id, description, remove }) {
  function handleRemove(evt) {
    remove(id);
  }

  return (
    <Card className="ToDo">
      <Row className="ToDo">
        <Col sm={10}>
          <p className="description">{description}</p>
        </Col>
        <Col sm={2}>
          <Button className="remove" onClick={handleRemove}>
            X
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default ToDoCard;
