import React, { useState } from "react";
import "./ToDoCard.css";
function ToDoForm({ addToDo }) {
  const [formData, setFormData] = useState({ description: "" });

  function handleSubmit(evt) {
    evt.preventDefault();
    const { description } = formData;
    if (formData.description !== "") addToDo({ description });
    setFormData({ description: "" });
  }

  function handleChange(evt) {
    console.log(evt.target.value);
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  }

  return (
    <div className="ToDo card">
      <form onSubmit={handleSubmit}>
        <div className="ToDo row">
          <div className="col-sm-10">
            <input
              name="description"
              type="text"
              className="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="col-sm-2">
            <button type="submit" className="remove btn btn-primary">
              +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;
