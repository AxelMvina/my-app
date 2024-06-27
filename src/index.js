import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LocationPage from './pages/LocationPage/LocationPage';
import AboutPage from './pages/AboutPage/AboutPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
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
    element: <ErrorPage/>,
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
