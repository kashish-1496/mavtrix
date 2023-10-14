function Page4() {
    const [showPage5, setShowPage5] = useState(false);
    const handleNewMeet = () => { setShowPage5(true); };

    const [showMymeetings, setShowMymeetings] = useState(false);
    const handleMymeet = () => { setShowMymeetings(true); };

    const [showLink, setShowLink] = useState(false);
    const handleInstant = () => { setShowLink(true); };

    return (
        <div>
            {showLink ? (<Page6 />) : (
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
                                <div className="opt" onClick={handleInstant}>+ Start an instant meeting</div>
                                <div className="opt" onClick={handleNewMeet}>~ Start a new meeting for later</div>
                                <div className="opt" onClick={handleNewMeet}>+ Schedule in Google Calender</div>
                                <div className="opt" onClick={handleMymeet}>+ My Meetings</div>
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
            )}
        </div>
    );
}
