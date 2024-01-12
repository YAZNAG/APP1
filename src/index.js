import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import { StateProvider } from './context/GlobalState';
import { AuthProvider } from './components/AuthContext'; // Correct path for AuthContext
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <AuthProvider>
    <StateProvider>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </AuthProvider>,
  document.getElementById('root')
);
