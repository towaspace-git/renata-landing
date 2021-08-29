import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomScroll from 'react-custom-scroll';

ReactDOM.render(
  <React.StrictMode>
    <CustomScroll>
      <div style={{ height: '100vh' }}>
        <App />
      </div>
    </CustomScroll>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
