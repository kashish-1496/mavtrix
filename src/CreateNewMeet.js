import "./App.css";
import layout from './images/ui.png';
import link_img from './images/link_img.png';
import copy_img from './images/copy_img.png';
import React, { useState, useCallback } from "react";
function Page5() {
  const [showMymeetings, setShowMymeetings] = useState(false);
  const handleSchedule = () => { setShowMymeetings(true); };
  return (
    <div>
      {showMymeetings ? (<Mymeetings />) : (
        <div className="page5">
          <div className="divheading">
            <div className="headingof5">Create a new Meeting</div>
          </div>
          <div className="leftbox5">
            <div className="logo-container">
              <div className="logo"></div>
              <div className="top-left">Mavtrix</div>
            </div>
            <div className="infoname">
              <div className="newkopt">Meeting Agenda :</div>
              <div className="newkopt">Time :</div>
              <div className="newkopt">Room Size :</div>
              {/* <div className="newkopt"> Participants :</div> */}
            </div>
          </div>
          <div className="rightbox5">
            <div className="infoentry">
              <div className="info1"></div>
              <div className="info2"></div>
              <div className="info3"></div>
              {/* <div className="info4"></div> */}
            </div>
            <div className="schedule" onClick={handleSchedule}><div>Schedule Meeting</div></div>
          </div>
        </div>
      )}
    </div>
  );
}