import "../css-files/App.css";
import "../css-files/signin.css";
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

export default function Page2() {
    return (
        <div className="page2">
            <div className="left-box2">
                <div className="logo-container">
                    <div className="logo"></div>
                    <div className="top-left">Mavtrix</div>
                </div>
                <div className="heading">MAVTRIX</div>
                <div className="points">
                    <div className="point">Remote Learning</div>
                    <div className="point">Scheduled Meetings</div>
                    <div className="point">Immersive Presentation</div>
                    <div className="point">Increases Engagement</div>
                    <div className="point">Privacy Enhancement</div>
                    <div className="point">Immersive Sound</div>
                    <div className="point">Sound Spatialization</div>
                    <div className="point">Realistic Speaker Movement</div>
                    <div className="point">Remote Team Collaboration</div>
                </div>
            </div>
            <div className="right-box2">
                < Link to="/meetoptions">
                <button className="signin">Sign in with Google</button>
                </Link>
            </div>
        </div>
    );
}