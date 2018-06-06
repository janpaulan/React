import React from "react";
import { Form, Button, FormField } from "semantic-ui-react";
import Validator from 'validator';
import InlineError from "../components/messages/InlineError";
import "../components/css/app.css";

class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e => this.setState({data:{...this.state.data, [e.target.name]: e.target.value}
  });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState( {errors} );
  };

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Password can't be blank";
    return errors;
  }

  render() {
    const { data, errors } = this.state;

    return (
        <Form onSubmit={this.onSubmit}>
          <FormField error={!!errors.email}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </FormField>
          <FormField error={!!errors.password}>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </FormField>
          <Button primary>Login</Button>
        </Form>
    );
  }
}

export default LoginForm;
