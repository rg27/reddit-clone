import React from 'react';
import Iframe from 'react-iframe'

const Timer = () => {
    return (
    <div>
      <Iframe 
        src="https://free.timeanddate.com/countdown/i7la9sed/n1238/cf100/cm0/cu4/ct0/cs0/ca0/co1/cr0/ss0/cacfff/cpc000/pct/tcfff/fs100/szw256/szh108/tatYear%20End%20Event%20Countdown%20Timer/tacfff/tptIt's%20SHOW%20TIME/tpc000/iso2020-12-19T20:00:00"
        allowTransparency="true" 
        frameborder="0" 
        width="270" 
        height="100"
        className="unclickable"
      />
    </div>
    )
  }
  export default Timer;