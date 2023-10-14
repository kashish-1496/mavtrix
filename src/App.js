import "./App.css";
import layout from './images/ui.png';
import link_img from './images/link_img.png';
import copy_img from './images/copy_img.png';
import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

 function Page4() {
  
  return (
    <div>
      {/* {showLink ? (<Page6 />) : ( */}
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
                <div className="opt" >+ Start an instant meeting</div>
                <div className="opt" >~ Start a new meeting for later</div>
                <div className="opt" >+ Schedule in Google Calender</div>
                <div className="opt" >+ My Meetings</div>
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
      {/* )} */}

      </div>
  );
}









// export default home_page
// export default function CustomRouter(){

//   function changePage(page) {
//     setCurrentPage(page);
//   }
//   const homepage = <Home_page gotoPage={changePage} />;
//   const [currentPage,setCurrentPage]=useState(homepage);
//   // console.log(currentPage);
//   return(
//     <div>
//       {currentPage}
//     </div>
//   );
// }
