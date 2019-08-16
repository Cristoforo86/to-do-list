import React, { Component } from "react";
import { Button, Input, Form } from "reactstrap";

class Addtodo extends Component {
  state = {
    title: ""
  };

  onChange = event =>
    this.setState({
      title: event.target.value
    });

  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div style={{ paddingTop: "4rem" }}>
        <Form onSubmit={this.onSubmit}>
          <Input
            placeholder="Add new todo ..."
            bsSize="lg"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />

          <Button color="primary" size="lg" block type="submit" value="Submit">
            Add todo
          </Button>
        </Form>
      </div>
    );
  }
}

export default Addtodo;
