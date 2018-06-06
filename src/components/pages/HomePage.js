import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../forms/LoginForm';

const HomePage = () => (
  <div>
    <h1>Homepage</h1>
    {/* <Link to="/login">Login</Link>  */}
    <LoginForm />
  </div>
);

export default HomePage;
