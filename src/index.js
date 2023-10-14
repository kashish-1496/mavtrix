import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Join from './Join';
import Signin from './Signin';
import MeetingOptions from './MeetingOptions';
import FurtherOptions from './FurtherOptions';
import Link from './Link';
import CreateNewMeet from './CreateNewMeet';
import Mymeetings from './MyMeetings';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Join/>,
  },
  {
    path:"/login",
    element:<Signin/>
  },
  {
    path:"/meetoptions",
    element:<MeetingOptions/>
  },
  {
    path:"/FurtherOptions",
    element:<FurtherOptions/>
  },
  {
    path:"/Link",
    element:<Link/>
  },
  {
    path:"/CreateNewMeet",
    element:<CreateNewMeet/>
  },
  {
    path:"/MyMeetings",
    element:<Mymeetings/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
