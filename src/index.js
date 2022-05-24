import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Router from './pages/router';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './errorboundary';
import router from './pages/router';
const name="preethu"
const root = ReactDOM.createRoot(document.getElementById('root'));
const intialvalue ={name:"preethu",age:24,place:"pkl"}
export const UserContex =React.createContext(intialvalue)
root.render(
  <ErrorBoundary>
 <UserContex.Provider value={intialvalue}>
   <Router/>
   </UserContex.Provider>
    
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
