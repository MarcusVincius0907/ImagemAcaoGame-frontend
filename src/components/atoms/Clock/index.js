//import ReactCountdownClock from "react-countdown-clock";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { eventEmitter } from '../../../services/eventEmitter';
import { activeChild } from '../../../utils/activeChild';
import sound from '../../../assets/audio/alarm-ringtone-edited.mp3';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectClockStatus,
  setIsOpenModal,
  selectActiveChild
} from '../../../store/mainSlice';
import { clockStatus } from '../../../utils/clockStatus';
import localStorageHandler from '../../../services/localStorageHandler';



function Clock() {

  const TIME_LIMIT = ((localStorageHandler.getConfig())? (localStorageHandler.getConfig()).time : null ?? 1) * 60;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  const FULL_DASH_ARRAY = 283;
  const alarm = new Audio(sound)


  const [timerStarted, setTimerStarted] = useState(false)
  const [count, setCount] = useState(formatTime(timeLeft))
  const [interval, setIntervalCustom] = useState(null)

  const clockStatusSelector = useSelector(selectClockStatus);
  const activeChildSelector = useSelector(selectActiveChild);
  const dispatch = useDispatch();


  useEffect(() => {
    
    switch (clockStatusSelector) {
      case clockStatus.START:
        startTimer()
        break;
      case clockStatus.RESET:
        resetTimer()
        break;
      default:
        console.log('clock status not found');
        break;
    }

    

  },[clockStatusSelector]);

  useEffect(() => {
    eventEmitter.subscribe("enterPress", () => {
      if(timerStarted)
        pause()
    })
  })
  

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
            {timerStarted? count : <FontAwesomeIcon icon={faPlay} />}
            
          </span>
        </div>
      </>
    );
  }

  function resetTimer(){
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    timerInterval = null;
    setTimerStarted(false)
    setCount(formatTime(TIME_LIMIT))
  }

  function pause(){
    clearInterval(interval);
    setTimerStarted(false)
    dispatch(setIsOpenModal(true))
    timeLeft = 0
  }

  function startTimer() {
    setTimerStarted(true)
    let interval = setInterval(() => {

      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      setCount(formatTime(timeLeft))
      setCircleDasharray();
      if (timeLeft === 0) {
        clearInterval(interval);
        dispatch(setIsOpenModal(true))
        setTimerStarted(false)
        alarm.play()
      }
    }, 1000)

    setIntervalCustom(interval)

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
    <div className={[  activeChildSelector === activeChild.CLOCK ? " border-2 border-white " : "  " , " w-full flex  flex-col  bg-ia-purple-med p-3 rounded-md h-full animate-fade"]}>
      <div className="text-white text-md ">Cronômetro</div>
      <div className="mt-5 grid justify-center w-full ">
       
        <div id="app">
          <App></App>
        </div>

        
      </div>
      <div className="mt-3 grid justify-center w-full text-white ">
        <div className="my-1 text-sm opacity-50">Para encerrar, clique aqui ou tecle <strong> ENTER </strong></div>
        <button disabled={!timerStarted} onClick={() => {
            pause()            
          }} className=" border-0 flex justify-center items-center p-3 bg-ia-purple-dark rounded-sm hover:opacity-50">PRONTO!</button>
      </div>
    </div>
  );
}


export default Clock;
