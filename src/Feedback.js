import "./App.css";
import layout from './images/ui.png';
import link_img from './images/link_img.png';
import copy_img from './images/copy_img.png';
import React, { useState, useCallback } from "react";
function Feedback() {
    const [skipClick, setSkipClick] = useState(false);
    const handleSkip = () => { setSkipClick(true); };

    return (
        <div>
            {skipClick ? (<Home_page />) : (
                <div className="feed">
                    <div className="logo-container">
                        <div className="logo"></div>
                        <div className="top-left">Mavtrix</div>
                    </div>
                    <div className="feed_heading">Thanks for choosing us. We would be grateful to hear about your experience.</div>
                    <div className="feedtext">Your Feedback -</div>
                    <div className="skip" onClick={handleSkip}>Skip</div>
                </div>
            )}
        </div>
    );
}