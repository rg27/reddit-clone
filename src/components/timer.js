import React from 'react';

import Countdown from 'react-countdown';
 
// Random component


const Timer = () => {
    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <span>{hours} Days : {minutes} Minutes : {seconds} Seconds</span>;
      }
    };
     
    return (
    //   <Countdown
    //   date={new Date('2020-12-19T22:00:00').getTime() - Date.now()}
    //   renderer={renderer}
    // />
    <div>
      <iframe 
        src="http://free.timeanddate.com/countdown/i7kzaid5/n1238/cf11/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac000/cpc000/pct/tc66c/fs100/szw320/szh135/tac000/tpc000/mac000/mpc000/iso2020-12-19T22:00:00" 
        allowTransparency="true" 
        frameborder="0" 
        width="290" 
        height="50">
      </iframe>
    </div>
      )
    }
  

  export default Timer;