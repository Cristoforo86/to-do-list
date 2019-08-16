import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import About from "./pages/About";
import Todos from "./components/Todos";
import LoginSignup from "./pages/LoginSignup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      token: ""
    };
  }

  //GET todos

  getTodos = token => {
    const config = {
      headers: {
        "auth-token": `${token}`
      }
    };

    console.log("1", config);

    axios
      .get("http://localhost:5000/todos", config)

      .then(res =>
        this.setState({ todos: res.data }, () => {
          console.log("3", this.state.todos, this.state.token);
        })
      )
      .catch(err => console.log(err));
  };

  //ADD todo

  addTodo = async title => {
    axios.defaults.headers.post["auth-token"] = `${this.state.token}`;
    const res = await axios.post("http://localhost:5000/todos", {
      title: title
    });
    try {
      this.setState({ todos: [...this.state.todos, res.data] });
    } catch (err) {
      console.log(err);
    }
  };

  //DELETE todo

  deleteTodo = id => {
    const config = {
      headers: {
        "auth-token": `${this.state.token}`
      }
    };
    let target = id.target.value;
    console.log(id.target.value);
    axios
      .delete(`http://localhost:5000/todos/${target}`, config)
      .then(res =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo._id !== target)]
        })
      )
      .catch(err => console.log(err));
  };

  setToken = data => {
    this.setState({ token: data }, () => console.log(this.state.token));
  };

  //LOGIN
  logIn = (email, password) => {
    axios
      .post("http://localhost:5000/api/user/login", {
        email: email,
        password: password
      })
      .then(res => this.setState({ token: res.data }, this.getTodos(res.data)))
      .catch(err => console.log(err));
  };

  //REGISTER
  onRegister = async (name, email, password) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const data = {
      name: name,
      password: password,
      email: email
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/register",
        JSON.stringify(data),
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div>
            <Switch>
              {!this.state.token ? (
                <Route
                  exact
                  path="/"
                  render={props => (
                    <React.Fragment>
                      <LoginSignup
                        token={this.state.token}
                        getTodos={this.getTodos}
                        setToken={this.setToken}
                        setHeader={this.setHeader}
                        logIn={this.logIn}
                        onRegister={this.onRegister}
                      />
                    </React.Fragment>
                  )}
                />
              ) : (
                <Route
                  exact
                  path="/"
                  render={props => (
                    <React.Fragment>
                      <Addtodo addTodo={this.addTodo} />
                      <Todos
                        todos={this.state.todos}
                        deleteTodo={this.deleteTodo}
                      />
                    </React.Fragment>
                  )}
                />
              )}

              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
