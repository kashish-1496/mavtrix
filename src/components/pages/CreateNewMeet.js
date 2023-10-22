import "../css-files/App.css";
import "../css-files/createnewmeet.css";
import { Link } from "react-router-dom";
// import { Component } from 'react'; 
// import { Alert, Button, View, StyleSheet } from 'react-native';
// import {Alert ,Button,View,StyleSheet} from React;
// import layout from './images/ui.png';
// import React, { useState, useCallback } from "react";

export default function Page5() {
  // function twoOptionsAlertFunction(){
  //   //function to make two option alert
  //   Alert.alert(
  //      //This is title
  //      'Further-Schedluling',
  //      //This is body text
  //      'Also Schedule in Google Calender?',
  //      [
  //        {text: 'Yes', onPress: () => console.log('Yes Pressed')},
  //        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
  //       ],
  //     { cancelable: false }
  //     //on clicking out side, Alert will not dismiss
  //   );
  // }
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#FFFFFF',
  //     alignItems: 'center',
  //     justifyContent: 'center'
  //   },
  // });
  //   <>
  //  <View style={styles.container}>
  //     {/*Alert with two options*/}
  //     <View style={{marginVertical: 10}}>
  //       <Button title='Display Alert with Two Options' onPress={this.twoOptionsAlertFunction}/>
  //     </View>
  //  </View>
    // <div>
  return(
    <div className="page5">

        <div className="divheading">
          <div className="headingof5">Create a new Meeting</div>
        </div>
    
        <div className="logo-container">
            <div className="logo"></div>
            <div className="top-left">Mavtrix</div>
        </div>

        <div className="meeting-info">
            <div className="info">
              <label>Agenda:</label>
              <input type="text"></input>
            </div>
            <div className="info">
              <label>Date&Time:</label>
              <input type="datetime-local"></input>
            </div>
        </div>
    </div>
  );
  }



            {/* <div className="infoname">
              <div className="newkopt">Meeting Agenda :</div>
              <div className="newkopt">Date & Time :</div>
              {/* <div className="newkopt">:</div> */}
              {/* <div className="newkopt">Room Size :</div> */}
              {/* <div className="newkopt"> Participants :</div> */}
              {/* <Link to='/MyMeetings'>
          </Link> }
            </div>
          </div>

          <div className="rightbox5">
            <div className="infoentry">
              <div className="info1">
                <input type="text" placeholder="blah...blah..blah"></input>
              </div>
              <div className="info2">
                <input type="datetime-local" ></input>
              </div> */}
              {/* <div className="info3">
                <input type="text" placeholder=""></input>
              </div> */}

              {/* <div className="info3"></div> */}
              {/* <div className="info4"></div> */}
            // </div>
            {/* <div className="twobutton"> */}
              {/* <Link to='/MyMeetings'>
                <div className="scheduletocalender">Schedule in Google Calender</div>
              </Link>
              <Link to='/MyMeetings'>
                <div className="schedule" ></div>
              </Link> */}
            {/* </div> */}
            // </div>
          // </div>

    // </div>