import React from "react";
import "./Todo.css";
import { useRef } from "react";
import Todowork from "../TodoWork/Todowork";
import { addTodo } from "../Redux/TodoList";
import { useDispatch } from "react-redux";

function Todo() {
  const refer = useRef(null);
  const dispatch = useDispatch();

  function add() {
    if (!refer.current.value) {
      alert("Enter something to do in nav");
      return;
    } else {
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 1000),
          value: refer.current.value,
        })
      );
      refer.current.value = "";
      return;
    }
  }

  return (
    <div id="todo">
      <nav>
        <div className="cnav">
          <input
            ref={refer}
            type="text"
            placeholder="Write something"
            id="inp1"
          />
          <button id="btn" onClick={add}>
            Add
          </button>
        </div>
      </nav>
      <Todowork />
    </div>
  );
}

export default Todo;
