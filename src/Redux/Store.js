import { configureStore } from "@reduxjs/toolkit";
import TodoList from "./TodoList.js";

export default configureStore({
  reducer: {
    todoReducer: TodoList,
  },
});
