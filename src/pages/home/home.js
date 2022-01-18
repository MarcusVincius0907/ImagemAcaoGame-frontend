import styles from './home.module.css'
import Header from '../../components/atoms/Header'
import TeamsContainer from '../../components/molecules/TeamsContainer';
import InfoContainer from '../../components/molecules/InfoContainer';
import { useState, useEffect } from 'react';
import Service from '../../services';


function Home() {

  const service = new Service()

  useEffect(() => {
    startRound();
  },[]);

  async function startRound(){
    try{
      const resp = await service.startRound()
      console.log('start round', resp);
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
