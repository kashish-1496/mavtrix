import "./App.css";
import layout from './images/ui.png';
import link_img from './images/link_img.png';
import copy_img from './images/copy_img.png';
import React, { useState, useCallback } from "react";
function Mymeetings() {
    const [showPage, setShowPage] = useState(false);
    const handleBack = () => { setShowPage(true); };
    return (
        <div>
            {showPage ? (<Page4 />) : (
                <div className="page7">
                    <div className="logo-container">
                        <div className="logo"></div>
                        <div className="top-left">Mavtrix</div>
                    </div>
                    <div className="mymeethead">My Meetings</div>
                    <div className="blackbox"></div>
                    <button className="back" onClick={handleBack}>- Back</button>
                </div>
            )}
        </div>
    );
}