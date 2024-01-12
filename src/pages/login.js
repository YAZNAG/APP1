// Import necessary dependencies
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.css';

// Example AuthService with a fictional login function
const AuthService = {
    login: async (email, password) => {
      try {
        const response = await fetch('https://example.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          // Handle non-successful responses
          const errorData = await response.json();
          throw new Error(errorData.message || 'Authentication failed');
        }
  
        // If successful, parse and return the user data or token
        const userData = await response.json();
        return userData;
      } catch (error) {
        // Handle network errors or other issues
        throw new Error('An error occurred during authentication');
      }
    },
  };
  
 
 

  const Login = ({ onLogin }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const userData = await AuthService.login(values.email, values.password);
        onLogin(userData);
      } catch (error) {
        console.error('Authentication error:', error.message);
        // Handle the error, for example, show an error message to the user
      }
    },
  });

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
