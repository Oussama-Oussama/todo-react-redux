import { createSlice } from "@reduxjs/toolkit";

export const TodoList = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todo.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = TodoList.actions;

export default TodoList.reducer;
