import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import Error from './components/ErrorPage';
import LocationPage from './components/LocationPage';
import AboutPage from './components/AboutPage';
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
