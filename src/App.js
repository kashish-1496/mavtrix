import "./App.css";
import layout from './images/ui.png';
import React , {useState}from "react";
import { useEffect } from "react";
// function Join(){
  // const handleClick=()=>{
  //   console.log("clicked");
  //   return page2();
  // }

   function Page5(){
    // console.log("page5 re rendered")
    return(
      <div className="page5">
        {/* <div className="headingof5">Create a new Meeting</div> */}
        <div className="leftbox5">
          <div className="logo-container">
            <div className="logo"></div>
            <div className="top-left">Mavtrix</div>
          </div>

          <div className="infoname">
            <div className="newkopt">Meeting Agenda :</div>
            <div className="newkopt">Time :</div>
            <div className="newkopt">Room Size :</div>
            <div className="newkopt">Maximum Participants :</div>
          </div>
        </div>

        <div className="rightbox5">
          <div className="infoentry">
            <div className="info1"></div>
            <div className="info2"></div>
            <div className="info3"></div>
            <div className="info4"></div>
          </div>
          <div className="schedule">Schedule Meeting</div>
        </div>
      </div>

    );
  }
 function Page4(){
    const[showPage5,setShowPage5]=useState(false);

     useEffect(() => {
      //  console.log("showPage5 has changed", showPage5);
     }, [showPage5]);

    //  const handleNewMeet = () => {
    //    console.log("Before state update, showPage5:", showPage5);
    //    setShowPage5(prevState => !prevState);
    //     console.log("After state update, showPage5:", showPage5);
    //   };
      // console.log("Page4 re-rendered");
    //  console.log("state of showpage5", showPage5);


     const handleNewMeet=()=>{ 
       setShowPage5(true);
      };
       // setShowPage5((prev) => {
       //   console.log("showPage5 inside handleNewMeet:", prev);
       //   return true;
       // })

    // console.log("showPage5",showPage5);

    return(
      <div className="app5">
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
                <div className="opt">+ My Meetings</div>
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
    )
  }

  function Page3(){

    const [showPage4,setShowPage4] =useState(false);
    const meetingOptions=()=>{setShowPage4(true);};

    return(
      <div className="app3">
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
    )}</div>
  );
}


  function Page2() {

    const [showPage3,setShowPage3]=useState(false);
    const handleSigninClick=()=>{setShowPage3(true);};

   return(
    <div className="app2">
      {showPage3?(<Page3/>):(

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
    )}
    </div>
    );
  }
  

  export default function Home_page(){

    const[showPage2,setShowPage2]=useState(false);
    const handleJoinClick=()=>{setShowPage2(true);};

    return(
      <div className="app">
        {showPage2?(<Page2/>):(

        <div className="page1">

          <div className="left-box">

            <div className="logo-container">
              <div className="logo"></div>
              <div className="top-left">Mavtrix</div>
            </div>

            <div className="name">Mavtrix</div>

            <div className="content">First Indian video conferencing application with sound spatilisation features</div>

            <button className="join" onClick={handleJoinClick}>Join</button>

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
      )}
    </div>
  );
}

// export default home_page