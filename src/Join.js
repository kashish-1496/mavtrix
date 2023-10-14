import "./App.css";
import layout from './images/ui.png';
import link_img from './images/link_img.png';
import copy_img from './images/copy_img.png';
import React, { useState, useCallback } from "react";
import Signin from './Signin.js';
import { Link } from "react-router-dom";

export default function Home_page() {
    return (
        <div className="page1">
            <div className="left-box">
                <div className="logo-container">
                    <div className="logo"></div>
                    <div className="top-left">Mavtrix</div>
                </div>
                <div className="name">Mavtrix</div>
                <div className="content">First Indian video conferencing application with sound spatilisation features</div>
                <Link to='login'>
                    <button className="join" >Join</button>
                </Link>
            </div>
            <div className="right-box">
                <div className="images">
                    <img className="first" src={layout} />
                    <img className="second" src={layout} />
                    <img className="third" src={layout} />
                </div>
            </div>
            {/* {showPage2 && <Page2/>} */}
        </div>
    );
}