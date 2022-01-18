import Round from '../../atoms/Round'
import WordsDisplay from '../../atoms/WordsDisplay';
import Clock from '../../atoms/Clock/index.js';
import Service from '../../../services';
import { useState, useEffect } from 'react';
import ModalCustom from '../Modal';
import { eventEmitter } from '../../../services/eventEmitter';

function InfoContainer() {

  const [words, setWords] = useState(null);
  const [turn, setTurn] = useState(null);
  const [resetClock, setResetClock] = useState(false);
  const [startClock, setstartClock] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [scoreSelected, setScoreSelected] = useState(0);
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

  const startTimer = (scoreSelectedParam) => {
    setScoreSelected(scoreSelectedParam.value)
    setstartClock(true)
  }

  const result = (param) => {
    setOpenModal(false)
    nextRound(param)
  }

  const openModalFunc = (param) => {
    setOpenModal(true)
  }

  const nextRound = async(rightAswerFlag) => {

    try{
      let resp;
      if(rightAswerFlag){
        resp = await service.nextRound({score: scoreSelected })
      }else{
        resp = await service.nextRound({score: 0 })
      }
      setWords([]);
      getTurn();
      eventEmitter.dispatch("refreshTeams")
      setResetClock(!resetClock)
      setstartClock(false);
      console.log('resp next', resp);
    }catch(e){
      console.log(e);
    }

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
        <div className="max-w-card w-full    sm:w-1/3">
          <Clock resetClock={resetClock} startClock={startClock} openModalFunc={openModalFunc}></Clock>
        </div>
      </div>
      <button onClick={() => setOpenModal(true)}>click</button>
      <ModalCustom openModal={openModal} result={result}></ModalCustom>
    </div>
  );
}

export default InfoContainer;
