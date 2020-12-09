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
      <Countdown
      date={Date.now() + 5000}
      renderer={renderer}
      />
      )
    }
  

  export default Timer;