import "../css-files/App.css";
import "../css-files/mymeeting.css";
import layout from '../images/ui.png';
import React from "react";
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
                <div className="blackbox">
                    {/* <div className="insideblack"> */}
                        <div className="meet1">
                            <div className="leftdata">
                                <div className="agenda">Agenda:</div>
                                <div className="date">Date:</div>
                                <div className="time">Time:</div>
                            </div>
                            <div className="rightdata">
                                <div className="agenda-info">Agenda1</div>
                                <div className="date-info">18/10/2023</div>
                                <div className="time-info">18:00</div>
                            </div>
                        </div>

                        <div className="meet2">
                            <div className="leftdata">
                                <div className="agenda">Agenda:</div>
                                <div className="date">Date:</div>
                                <div className="time">Time:</div>
                            </div>
                            <div className="rightdata">
                                <div className="agenda-info">Agenda2</div>
                                <div className="date-info">26/10/2023</div>
                                <div className="time-info">19:00</div>
                            </div>
                        </div>
                        <div className="meet3">
                            <div className="leftdata">
                                <div className="agenda">Agenda:</div>
                                <div className="date">Date:</div>
                                <div className="time">Time:</div>
                            </div>
                            <div className="rightdata">
                                <div className="agenda-info">Agenda3</div>
                                <div className="date-info">28/10/2023</div>
                                <div className="time-info">22:00</div>

                            </div>
                        </div>
                        
                    {/* </div> */}
                </div>
                < Link to='/FurtherOptions'>
                    <button className="back">- Back</button>

                </Link>
            </div>

        </div>
    );
}