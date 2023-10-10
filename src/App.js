import "./App.css";
import layout from './images/ui.png';
import React , {useState} from "react";
// function Join(){
  // const handleClick=()=>{
  //   console.log("clicked");
  //   return page2();
  // }
  export default function Page4(){
    return(
      <div className="page4">
        <div className="left-box">
        <div className="logo-container">
          <div className="logo"></div>
          <div className="top-left">Mavtrix</div>
        </div>
        <div className="name">Mavtrix</div>
        <div className="content">First Indian video conferencing application with sound spatilisation features</div>
        <button className="meeting_options" style={{marginBottom:'0px'}}> Meeting Options</button>
        <div>
          <div className="options">

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
    )
  }

  function Page3(){
    return(
    <div className="page3">

      <div className="left-box">
        <div className="logo-container">
          <div className="logo"></div>
          <div className="top-left">Mavtrix</div>
        </div>
        <div className="name">Mavtrix</div>
        <div className="content">First Indian video conferencing application with sound spatilisation features</div>
        <button className="meeting_options"> Meeting Options</button>
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
  );
}
  function Page2() {
    console.log("clicked for page2")
    const [showPage3,setShowPage3]=useState(false);
    const handleSigninClick=()=>{setShowPage3(true);};

   return(
    <div className="app2">
      {showPage3?(<Page3/>):(

     <div className="page2-ui">
  
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
    )}</div>
   );
  }
  

  function Home_page(){

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