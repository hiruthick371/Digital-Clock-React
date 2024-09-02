import React, { useEffect, useState } from "react";
import background from "./assets/bg.webp";

function DigitalClock(){

  const[time,setTime]=useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date())
    },1000);

    return()=>{
      clearInterval(intervalId);
    }

  },[]);

  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = (hours>=12)?"PM":"AM";

    hours= hours%12 || 12; //For 12 hours would be zero so we use logical OR. If it is 0 then 12 will be stored

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number){
    return (number<10 ?"0":"")+number;
  }

  return(

    <>
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
    </>
  );
}

export default DigitalClock