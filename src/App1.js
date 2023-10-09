import "./App.css";

function home_page(){
  return(
    <div className="page1">

      <div className="left-box">
        <div className="logo-container">
          <div className="logo"></div>
          <div className="top-left">Mavtrix</div>
        </div>
        <div className="name">Mavtrix</div>
        <div className="content">First Indian video conferencing application with sound spatilisation features</div>
        <button className="join" >Join</button>
      </div>

      <div className="right-box"></div>
    </div>
  )
}

export default function page2(){
  return(
    <div className="page2-ui">

      <div className="left-box2">
      
        <div className="logo-container">
            <div className="logo"></div>
            
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
        <button className="signin">Sign in with Google</button>
      </div>

    </div>     
  )
}

// export default home_page