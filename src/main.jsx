import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';
import 'bootstrap/dist/js/bootstrap';

import LandingPage from './components/landingPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
