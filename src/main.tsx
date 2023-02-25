import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import App from './App'
import Openings from './components/Openings';
import Recommendations from './components/Recommendations';
import './index.css'
import CollectCv from './screens/cvCollect';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/showopenings",
    element: <Openings />,
  },
  {
    path: "/recommendations",
    element: <Recommendations/>,
  },
  {
    path: "/:company/:role",
    element: <CollectCv />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
