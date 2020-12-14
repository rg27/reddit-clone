import React from 'react';
import Iframe from 'react-iframe'

const Timer = () => {
    return (
    <div>
      <Iframe 
        src="https://free.timeanddate.com/countdown/i7l10ia0/n1238/cf100/cm0/cu4/ct0/cs1/ca0/cr0/ss0/cacfff/cpc000/pc000/tcfc0/fs100/szw320/szh135/tac000/tptTime%20since%20Event%20started%20in/tpc000/matOP360%20Year%20End%20Event%20Countdown/macfff/mpc000/iso2020-12-19T22:00:00" 
        allowTransparency="true" 
        frameborder="0" 
        width="320" 
        height="100"
        className="unclickable"
      />
    </div>
    )
  }
  export default Timer;