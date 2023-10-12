import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {X1,X2,X3,X4,X5,X6} from './abc';
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
  },
  {
    path : "/x1",
    element : <X1/>,
  },
  {
    path : "/x2",
    element : <X2/>
  },
  {
    path : "/x3",
    element : <X3/>
  },
  {
    path : "/x4",
    element : <X4/>
  },
  {
    path : "/x5",
    element : <X5/>
  },
  {
    path : "/x6",
    element : <X6/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

