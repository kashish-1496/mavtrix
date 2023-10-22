import "../css-files/App.css";
import "../css-files/meetingoptions.css";
import layout from '../images/ui.png';
import React from "react";
import { Link } from "react-router-dom";

export default function Page3() {
    return (

        <div className="page3">
            <div className="left-box">
                <div className="logo-container">
                    <div className="logo"></div>
                    <div className="top-left">Mavtrix</div>
                </div>
                <div className="name">Mavtrix</div>
                <div className="content">First Indian video conferencing application with sound spatilisation features</div>
                <Link to='/FurtherOptions'>
                    <button className="meeting_options" > Meeting Options</button>
                </Link>

                <br />
                <div className="meeting_code"><input type="link" placeholder=" Enter a meeting code or link"></input> </div>
            </div>
            <div className="right-box">
                <div className="images">
                    <img className="first" src={layout} />
                    <img className="second" src={layout} />
                    <img className="third" src={layout} />
                </div>
            </div>
        </div>
    )
}