import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './index.css';
import "./i18next/i18next"
import App from './App';
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
  <React.StrictMode>
    <Routes>
      <Route path='*' element={<App />} />
    </Routes>
  </React.StrictMode>
  </Router>
);

