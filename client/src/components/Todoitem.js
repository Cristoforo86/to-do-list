import React, { Component } from "react";
import moment from "moment";
import { Button } from "reactstrap";
import "./styles.css";
export class Todoitem extends Component {
  render() {
    const { title, date } = this.props.todo;

    const am = moment(date).format("LLL");
    const vor = moment(date)
      .startOf("m")
      .fromNow();
    return (
      <div className="container-grid">
        <div>
          <h3>{title}</h3> created at: {am} {vor}
        </div>
        <div>
          <Button
            className="button-del"
            onClick={this.props.deleteTodo}
            value={this.props.todo._id}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default Todoitem;
