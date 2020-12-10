import React from 'react';
import Iframe from 'react-iframe'

// Random component


const Timer = () => {
     
    return (
    <div>
      <Iframe 
        src="https://free.timeanddate.com/countdown/i7kzaid5/n1238/cf11/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac000/cpc000/pct/tc66c/fs100/szw320/szh135/tac000/tpc000/mac000/mpc000/iso2020-12-19T22:00:00" 
        allowTransparency="true" 
        frameborder="0" 
        width="290" 
        height="50"
      />
    </div>
      )
    }
  export default Timer;