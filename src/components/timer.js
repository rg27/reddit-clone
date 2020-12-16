import React from 'react';
import Iframe from 'react-iframe'

const Timer = () => {
    return (
    <div>
      <Iframe 
       src="https://free.timeanddate.com/countdown/i7lbpwl0/n1238/cf100/cm0/cu4/ct0/cs1/ca0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fs200/szw320/szh135/tacfff/tpcfff/matCountdown%20Timer/macfff/mptIt's%20Showtime/mpcfff/iso2020-12-19T20:00:00"
        allowTransparency="true" 
        frameborder="0" 
        width="300" 
        height="200"
        className="unclickable"
      />
    </div>
    )
  }
  export default Timer;