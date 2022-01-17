import Round from '../../atoms/Round'
import WordsDisplay from '../../atoms/WordsDisplay';
import Clock from '../../atoms/Clock/index.js';
import Service from '../../../services';
import { useState, useEffect } from 'react';

function InfoContainer() {

  const [words, setWords] = useState(null);
  const [resetClock, setResetClock] = useState(false);
  const service = new Service()

  /* init */
  useEffect(() => {
    getWords()
  },[]);

  /* changes */
  useEffect(() => {
  });

  async function getWords(){
    try{
      const resp = await service.getWords()
      setWords(resp.data.payload)
     
    }catch(e){
      console.log(e);
    }
  }

  function startRound(param){
    setResetClock(!resetClock)
  }

  return (
    <div className="w-full max-w-container px-12  m-auto mt-10 ">
      <div className='bg-ia-purple-light p-3 rounded-md min-h-[250px] w-full flex justify-center flex-wrap sm:flex-nowrap'>
        <div className="max-w-card mb-5 sm:mb-0 w-full sm:mr-5  sm:w-1/3">
          <Round startRound={startRound}></Round>
        </div>
        <div className="max-w-card mb-5 sm:mb-0 w-full sm:mr-5 sm:w-1/3">
          <WordsDisplay words={words}></WordsDisplay>
        </div>
        <div className="max-w-card w-full  sm:w-1/3">
          <Clock resetClock={resetClock}></Clock>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
