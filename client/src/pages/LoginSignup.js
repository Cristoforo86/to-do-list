import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import "../components/styles.css";

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      password: "",
      name: "",
      nameReg: "",
      emailReg: "",
      passwordReg: ""
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  onChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onSubmit = event => {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
    this.setState({ email: "", password: "" });
  };

  onSubmitRegister = event => {
    event.preventDefault();
    this.props.onRegister(
      this.state.nameReg,
      this.state.emailReg,
      this.state.passwordReg
    );
    this.setState({ nameReg: "", emailReg: "", passwordReg: "" });
    this.toggle();
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Login</h1>
          <Form onSubmit={this.onSubmit}>
            <Input
              placeholder="Email"
              bsSize="lg"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <Input
              placeholder="Password"
              bsSize="lg"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <Button
              color="primary"
              size="lg"
              block
              type="submit"
              value="Submit"
            >
              Log In
            </Button>
          </Form>
          <div className="section-signUp">
            <h3>No Account? Register!</h3>

            {/* -----------------Modal--------------------------- */}

            <Button
              color="primary"
              size="s"
              type="submit"
              value="register"
              onClick={this.toggle}
            >
              Register
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Registration</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.onSubmitRegister}>
                  <Input
                    placeholder="Name"
                    bsSize="lg"
                    type="text"
                    name="nameReg"
                    onChange={this.onChange}
                    value={this.state.nameReg}
                  />
                  <Input
                    placeholder="Email"
                    bsSize="lg"
                    type="text"
                    name="emailReg"
                    onChange={this.onChange}
                    value={this.state.emailReg}
                  />
                  <Input
                    placeholder="Password"
                    bsSize="lg"
                    type="password"
                    name="passwordReg"
                    onChange={this.onChange}
                    value={this.state.passwordReg}
                  />
                  <Button
                    color="primary"
                    size="lg"
                    block
                    type="submit"
                    value="Submit"
                  >
                    Sign Up!
                  </Button>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginSignup;
