import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import "./components/app.css";
import Pages from './components/pages';
import BG from './components/bg';
// import "./components/css-files";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.Join />,
  },
  {
    path:"/login",
    element:<Pages.Signin/>
  },
  {
    path:"/meetoptions",
    element:<Pages.MeetingOptions/>
  },
  {
    path:"/FurtherOptions",
    element:<Pages.FurtherOptions/>
  },
  {
    path:"/Link",
    element:<Pages.Link/>
  },
  {
    path:"/CreateNewMeet",
    element:<Pages.CreateNewMeet/>
  },
  {
    path:"/MyMeetings",
    element:<Pages.Mymeetings/>
  },
  {
    path:"/bg",
    element:<BG />
  }
]);
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
el.style.height = "100vh";
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// reportWebVitals();
