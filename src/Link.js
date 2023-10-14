import "./App.css";
import layout from './images/ui.png';
import link_img from './images/link_img.png';
import copy_img from './images/copy_img.png';
import React, { useState, useCallback } from "react";
function Page6() {
    return (
        <div className="page6">
            <div className="left-box">
                <div className="logo-container">
                    <div className="logo"></div>
                    <div className="top-left">Mavtrix</div>
                </div>
                <div className="name">Mavtrix</div>
                <div className="content">First Indian video conferencing application with sound spatilisation features</div>
                <div className="linktext">Here is your Meeting Link : </div>
                <div className="linkbutton">
                    <img className="link_img" src={link_img} />
                    <div className="link_txt">https://your_link_will_be_generated</div>
                    <img className="copy_img" src={copy_img} />
                </div>
            </div>
            <div className="right-box">
                <div className="images">
                    <img className="first" src={layout} />
                    <img className="second" src={layout} />
                    <img className="third" src={layout} />
                </div>
            </div>
        </div>
    );
}
