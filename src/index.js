import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import "./i18next/i18next"
// import { Provider } from 'react-redux';
// import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <Router>
  <React.StrictMode>
    <Routes>
      <Route path='*' element={<App />} />
    </Routes>
  </React.StrictMode>
  </Router>
  // </Provider>
);

