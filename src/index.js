import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <h2>TALLY COUNTER</h2>
    <App />
    <Footer/>
  </React.StrictMode>
);

