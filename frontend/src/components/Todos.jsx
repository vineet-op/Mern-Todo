import React, { useState } from "react";

const Todos = ({ todos }) => {
  //   const [state, setstate] = useState(0);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
