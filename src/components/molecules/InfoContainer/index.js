import Round from '../../atoms/Round'
import WordsDisplay from '../../atoms/WordsDisplay';
import Clock from '../../atoms/Clock/index.js';
import Service from '../../../services';
import { useState, useEffect } from 'react';

function InfoContainer() {

  const [words, setWords] = useState(null);
  const [turn, setTurn] = useState(null);
  const [resetClock, setResetClock] = useState(false);
  const [startClock, setstartClock] = useState(false);
  const service = new Service()

  /* init */
  useEffect(() => {
    
    getTurn()
  },[]);

  /* changes */
  useEffect(() => {
  });

  const getWords = async() => {
    try{
      const resp = await service.getWords()
      setWords(resp.data.payload)
     
    }catch(e){
      console.log(e);
    }
  }

  const getTurn = async() =>{
    try{
      const resp = await service.getTurn()
      setTurn(resp.data.payload.turn);
      console.log('turn', resp);
    }catch(e){
      console.log(e);
    }
  } 

  const readyToStart = (param) => {
    //setResetClock(!resetClock)
    getWords()
  }

  const startTimer = () => {
    setstartClock(true)
  }

  return (
    <div className="w-full max-w-container px-12  m-auto mt-10 ">
      <div className='bg-ia-purple-light p-3 rounded-md min-h-[250px] w-full flex justify-center flex-wrap sm:flex-nowrap'>
        <div className="max-w-card mb-5 sm:mb-0 w-full sm:mr-5  sm:w-1/3">
          <Round readyToStart={readyToStart} turn={turn} ></Round>
        </div>
        <div className="max-w-card mb-5 sm:mb-0 w-full sm:mr-5 sm:w-1/3">
          <WordsDisplay words={words} startTimer={startTimer}></WordsDisplay>
        </div>
        <div className="max-w-card w-full  sm:w-1/3">
          <Clock resetClock={resetClock} startClock={startClock}></Clock>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
