import "./App.css";
import layout from './images/ui.png';
import link_img from './images/link_img.png';
import copy_img from './images/copy_img.png';
import React , {useState, useCallback } from "react";
// import { useEffect } from "react";


function Feedback(){
  const[skipClick,setSkipClick] = useState(false);
  const handleSkip=()=>{setSkipClick(true);};

  return(
    <div>
      {skipClick?(<Home_page/>):(
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

 function Mymeetings(){
    const[showPage,setShowPage]=useState(false);
    const handleBack=()=>{setShowPage(true);};

    return(
      <div>
        {showPage?(<Page4/>):(
          // console.log("updated showpage",showPage);
          <div className="page7">
            <div className="logo-container">
              <div className="logo"></div>
              <div className="top-left">Mavtrix</div>
            </div>
    
            <div className="mymeethead">My Meetings</div>
            <div className="blackbox"></div>
            <button className="back" onClick={handleBack}>- Back</button>
          </div>
        ) 
      }
    </div>
  );
    }

   function Page6(){
    return(
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
            <img className="link_img" src={link_img}/>
            <div className="link_txt">https://your_link_will_be_generated</div>
            <img className="copy_img" src={copy_img}/>
          </div>

          </div>

          <div className="right-box">

          <div className="images">
            <img className="first" src= {layout}/>
            <img className="second" src= {layout}/>
            <img className="third" src= {layout}/>
          </div>
        </div>
      </div>
    );
  }
  function Page5(){
    // console.log("page5 re rendered")
    const[showMymeetings,setShowMymeetings]=useState(false);
    const handleSchedule=()=>{setShowMymeetings(true);};

    return(
      <div>
        {showMymeetings?(<Mymeetings/>):(
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

  function Page4(){
    const[showPage5,setShowPage5]=useState(false);
    const handleNewMeet=()=>{setShowPage5(true);};
    
    const[showMymeetings,setShowMymeetings]=useState(false);
    const handleMymeet=()=>{setShowMymeetings(true);};

    const[showLink,setShowLink]=useState(false);
    const handleInstant =()=>{setShowLink(true);};

    //  useEffect(() => {
    //   //  console.log("showPage5 has changed", showPage5);
    //  }, [showPage5]);

    //  const handleNewMeet = () => {
    //    console.log("Before state update, showPage5:", showPage5);
    //    setShowPage5(prevState => !prevState);
    //     console.log("After state update, showPage5:", showPage5);
    //   };
      // console.log("Page4 re-rendered");
    //  console.log("state of showpage5", showPage5);


       // setShowPage5((prev) => {
       //   console.log("showPage5 inside handleNewMeet:", prev);
       //   return true;
       // })

    // console.log("showPage5",showPage5);

    return(
      <div>
        {showLink?(<Page6/>):(
            <div className="page4">
            <div className="left-box">
              <div className="logo-container">
                <div className="logo"></div>
                <div className="top-left">Mavtrix</div>
              </div>

              <div className="name">Mavtrix</div>
                
              <div className="content">First Indian video conferencing application with sound spatilisation features</div>

              <button className="meeting_options" style={{marginBottom:'15px'}}> Meeting Options</button>

              <div>
                <div className="furtheroptions">
                  <div className="opt" onClick={handleInstant}>+ Start an instant meeting</div>
                  <div className="opt" onClick={handleNewMeet}>~ Start a new meeting for later</div>
                  <div className="opt" onClick={handleNewMeet}>+ Schedule in Google Calender</div>
                  <div className="opt" onClick={handleMymeet}>+ My Meetings</div>
                </div>       
              </div>
            </div>
    
          <div className="right-box">
            <div className="images">
              <img className="first" src= {layout}/>
              <img className="second" src= {layout}/>
              <img className="third" src= {layout}/>
            </div>
          </div>
        </div>
        )}

        {showMymeetings?(<Mymeetings/>):(
        <div className="page4">
            <div className="left-box">
              <div className="logo-container">
                <div className="logo"></div>
                <div className="top-left">Mavtrix</div>
              </div>

              <div className="name">Mavtrix</div>
                
              <div className="content">First Indian video conferencing application with sound spatilisation features</div>

              <button className="meeting_options" style={{marginBottom:'15px'}}> Meeting Options</button>

              <div>
                <div className="furtheroptions">
                  <div className="opt" onClick={handleInstant}>+ Start an instant meeting</div>
                  <div className="opt" onClick={handleNewMeet}>~ Start a new meeting for later</div>
                  <div className="opt" onClick={handleNewMeet}>+ Schedule in Google Calender</div>
                  <div className="opt" onClick={handleMymeet}>+ My Meetings</div>
                </div>       
              </div>
            </div>
    
          <div className="right-box">
            <div className="images">
              <img className="first" src= {layout}/>
              <img className="second" src= {layout}/>
              <img className="third" src= {layout}/>
            </div>
          </div>
        </div>
      )}

        {showPage5?(<Page5/>):(
          <div className="page4">
            <div className="left-box">
              <div className="logo-container">
                <div className="logo"></div>
                <div className="top-left">Mavtrix</div>
              </div>

              <div className="name">Mavtrix</div>
                
              <div className="content">First Indian video conferencing application with sound spatilisation features</div>

              <button className="meeting_options" style={{marginBottom:'15px'}}> Meeting Options</button>

              <div>
                <div className="furtheroptions">
                  <div className="opt">+ Start an instant meeting</div>
                  <div className="opt" onClick={handleNewMeet}>~ Start a new meeting for later</div>
                  <div className="opt" onClick={handleNewMeet}>+ Schedule in Google Calender</div>
                  <div className="opt" onClick={handleMymeet}>+ My Meetings</div>
                </div>       
              </div>
            </div>
    
          <div className="right-box">
            <div className="images">
              <img className="first" src= {layout}/>
              <img className="second" src= {layout}/>
              <img className="third" src= {layout}/>
            </div>
          </div>
        </div>
      )}
    </div> 
  );
  }

  function Page3(){

    const [showPage4,setShowPage4] =useState(false);
    const meetingOptions=()=>{setShowPage4(true);};

    return(
      <div>
        {showPage4?(<Page4/>):(

        <div className="page3">

          <div className="left-box">
            <div className="logo-container">
              <div className="logo"></div>
              <div className="top-left">Mavtrix</div>
            </div>
            <div className="name">Mavtrix</div>
            <div className="content">First Indian video conferencing application with sound spatilisation features</div>
            <button className="meeting_options" onClick={meetingOptions}> Meeting Options</button>
            <br />      
            <button className="meeting_code"> Enter a meeting code or link </button>        

          </div>

          <div className="right-box">
            <div className="images">
              <img className="first" src= {layout}/>
              <img className="second" src= {layout}/>
              <img className="third" src= {layout}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  }


  function Page2() {

   return(
    <div>
      

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
         <button className="signin" onClick={handleSigninClick}>Sign in with Google</button>
       </div>
      </div>
  </div>
  );
  }
  

   function Home_page({ gotoPage }){

    return(
      <div>

        <div className="page1">

          <div className="left-box">

            <div className="logo-container">
              <div className="logo"></div>
              <div className="top-left">Mavtrix</div>
            </div>

            <div className="name">Mavtrix</div>

            <div className="content">First Indian video conferencing application with sound spatilisation features</div>

            <button className="join" onClick={() => gotoPage(<Page2 />)}>Join</button>

          </div>

          <div className="right-box">
            
            <div className="images">
              <img className="first" src= {layout}/>
              <img className="second" src= {layout}/>
              <img className="third" src= {layout}/>
            </div>
          </div>
          {/* {showPage2 && <Page2/>} */}
        </div>
    </div>
  );
}

// export default home_page
export default function CustomRouter(){

  function changePage(page) {
    setCurrentPage(page);
  }
  const homepage = <Home_page gotoPage={changePage} />;
  const [currentPage,setCurrentPage]=useState(homepage);
  // console.log(currentPage);
  return(
    <div>
      {currentPage}
    </div>
  );
}
