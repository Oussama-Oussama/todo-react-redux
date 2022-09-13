import "./Todowork.css";
import { deleteTodo } from "../Redux/TodoList";
import { useDispatch, useSelector } from "react-redux";

function Todowork(props) {
  const dispatch = useDispatch();
  const todolist = useSelector((store) => store.todoReducer.todo);

  return (
    <div className="contain">
      <ul>
        {todolist.map((item, index) => {
          return (
            <li className="item" key={index}>
              <span>{item.value}</span>
              <button onClick={() => dispatch(deleteTodo(index))}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todowork;
