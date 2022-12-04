import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';
import 'bootstrap/dist/js/bootstrap';

import LandingPage from './components/landingPage';

const LandingPageFunc = () => <LandingPage />;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPageFunc />
  </React.StrictMode>
);
