import "./App.css";
import layout from './images/ui.png';
import link_img from './images/link_img.png';
import copy_img from './images/copy_img.png';
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

export default function Mymeetings() {

    return (
        <div>

            <div className="page7">
                <div className="logo-container">
                    <div className="logo"></div>
                    <div className="top-left">Mavtrix</div>
                </div>
                <div className="mymeethead">My Meetings</div>
                <div className="blackbox"></div>
                < Link to='/FurtherOptions'>
                    <button className="back">- Back</button>

                </Link>
            </div>

        </div>
    );
}