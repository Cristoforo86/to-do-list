import React, { Component } from "react";
import TodoItem from "./Todoitem";
// import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";

// import { addTodo } from "../redux/actions/todoAction";
class Todos extends Component {
  // const dispatch = useDispatch();
  // const addTodo = useSelector(state => state.todo);
  render() {
    return this.props.todos.map(todo => (
      <TodoItem key={todo._id} todo={todo} deleteTodo={this.props.deleteTodo} />
    ));
  }
}

// const mapStateToProps = state => ({
//   todo: state.todo
// });

// export default connect(mapStateToProps)(Todos);
export default Todos;
