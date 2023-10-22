import "../css-files/App.css";
import "../css-files/furtheroptions.css";
import layout from '../images/ui.png';
import React from "react";
import { Link } from "react-router-dom";

export default function Page4() {
    return (
        <div className="page4">
            <div className="left-box">
                <div className="logo-container">
                    <div className="logo"></div>
                    <div className="top-left">Mavtrix</div>
                </div>

                <div className="name">Mavtrix</div>

                <div className="content">First Indian video conferencing application with sound spatilisation features</div>

                <button className="meeting_options" style={{ marginBottom: '15px' }}> Meeting Options</button>

                <div>
                    <div className="furtheroptions">
                        <Link to='/Link'>
                            <div className="opt" >+ Start an instant meeting</div>
                        </Link>
                        <Link to='/CreateNewMeet'>
                            <div className="opt" >~ Start a new meeting for later</div>
                            {/* <div className="opt" >+ Schedule in Google Calender</div> */}
                        </Link>
                        <Link to='/MyMeetings'>
                            <div className="opt" >+ My Meetings</div>
                        </Link>
                    </div>
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
