import { ADD_POST } from "./index";
import axios from "axios";

export const addTodo = title => {
  axios
    .post("http://localhost:5000/todos", {
      title: title
    })
    .then(res => res.json())
    .then(todo =>
      dispatchEvent({
        type: ADD_POST,
        payload: todo
      })
    )
    .catch(err => console.log(err));
};
