//import ReactCountdownClock from "react-countdown-clock";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function Clock(props) {

  const [timerStarted, setTimerStarted] = useState(false)

  useEffect(() => {
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    timerInterval = null;
    setTimerStarted(false)
  },[props.resetClock]);

  useEffect(() => {

    if(props.startClock){
      startTimer()
      console.log('start timer');
    }

  },[props.startClock]);

  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD,
    },
  };

  const TIME_LIMIT = 10;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;

  function App() {
    return (
      <>
        <div className="base-timer">
          <svg
            className="base-timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="base-timer__circle">
              <circle
                className="base-timer__path-elapsed"
                cx="50"
                cy="50"
                r="45"
              ></circle>
              <path
                id="base-timer-path-remaining"
                strokeDasharray="283"
                className="base-timer__path-remaining "
                d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "
              ></path>
            </g>
          </svg>
          <span id="base-timer-label" className="base-timer__label">
            {timerStarted? formatTime(timeLeft) : <FontAwesomeIcon icon={faPlay} />}
          </span>
        </div>
      </>
    );
  }

  function onTimesUp() {
    clearInterval(timerInterval);
    props?.openModalFunc()
  }

  function pause(){
    clearInterval(timerInterval);
    setTimerStarted(false)
    props?.openModalFunc()
    timeLeft = 0
  }

  function startTimer() {
    console.log('start timer inside');
    setTimerStarted(true)
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML =
        formatTime(timeLeft);
      setCircleDasharray();

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }



  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
  
  return (
    <div className="w-full flex  flex-col  bg-ia-purple-med p-3 rounded-md h-full animate-fade">
      <div className="text-white text-md ">O tempo está rolando</div>
      <div className="mt-5 grid justify-center w-full ">
       
        <div id="app">
          <App></App>
        </div>

        <div className="mt-3 grid justify-center w-full ">
          <button disabled={!timerStarted} onClick={() => {
            pause()
            
          }} className=" text-white border-0 flex justify-center items-center p-3 bg-ia-purple-dark rounded-sm hover:opacity-50">PRONTO!</button>
        </div>
      </div>
    </div>
  );
}


export default Clock;
