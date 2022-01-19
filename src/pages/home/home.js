import styles from './home.module.css'
import Header from '../../components/atoms/Header'
import TeamsContainer from '../../components/molecules/TeamsContainer';
import InfoContainer from '../../components/molecules/InfoContainer';
import { useState, useEffect } from 'react';
import Service from '../../services';
import { eventEmitter } from '../../services/eventEmitter';



function Home() {

  const service = new Service()

  useEffect(() => {
    startRound();
    window.addEventListener('keydown', (ev) => {
      if(ev.keyCode === 13){
        eventEmitter.dispatch("enterPress")
      }
    })
  },[]);

  async function startRound(){
    try{
      const resp = await service.startRound()
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className={`${styles.bgContainer} h-full w-full overflow-auto pb-5`}>
      <Header></Header>
      <TeamsContainer></TeamsContainer>
      <InfoContainer></InfoContainer>
      
    </div>
  );
}

export default Home;
