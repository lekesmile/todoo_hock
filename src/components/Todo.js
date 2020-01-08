import React, { useState } from "react";
import List from "./List";
import uuid from "uuid";
const Todo = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const message = { input: input, id: uuid() };

    setData(data.concat(message));
    setInput("");
  };

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = id => {
    console.log("Delete clicked");
    setData(prev => {
      console.log(id);
      return prev.filter(item => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <input
          className="p-2"
          name="input"
          onChange={handleInput}
          value={input}
        />

        <button className="btn btn-outline-primary btn-lg ml-2">Add</button>
      </form>

      <List data={data} edit={handleEdit} del={handleDelete} />
    </div>
  );
};

export default Todo;
