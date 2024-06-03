import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Error from './Components/ErrorPage';
import LocationPage from './Components/LocationPage';
import AboutPage from './Components/AboutPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Location/:id",
    element: <LocationPage/>,
  },
  {
    path: "/About",
    element: <AboutPage/>,
  },
  {
    path: "*",
    element: <Error/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
