import "./App.css";
import layout from './images/ui.png';
import link_img from './images/link_img.png';
import copy_img from './images/copy_img.png';
import React from "react";
import { Link } from "react-router-dom";

export default function Feedback() {
    

    return (
        <div>
           
                <div className="feed">
                    <div className="logo-container">
                        <div className="logo"></div>
                        <div className="top-left">Mavtrix</div>
                    </div>
                    <div className="feed_heading">Thanks for choosing us. We would be grateful to hear about your experience.</div>
                    <div className="feedtext">Your Feedback -</div>
                    <div className="skip">Skip</div>
                </div>
            
        </div>
    );
}