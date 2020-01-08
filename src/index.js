import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./components/Todo";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Todo's List</h1>
      <Todo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
