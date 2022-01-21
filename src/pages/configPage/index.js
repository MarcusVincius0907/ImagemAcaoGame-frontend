import Header from '../../components/atoms/Header'
import TeamsContainer from '../../components/molecules/TeamsContainer';
import InfoContainer from '../../components/molecules/InfoContainer';
import { useState, useEffect } from 'react';
import Service from '../../services';
import { eventEmitter } from '../../services/eventEmitter';
import ConfigContainer from '../../components/molecules/ConfigContainer';



function Config() {

  const service = new Service()

  useEffect(() => {
    
  },[]);


  return (
    <div className={` bg-ia-purple-dark h-full w-full overflow-auto pb-5`}>
      <Header></Header>
      <ConfigContainer></ConfigContainer>
    </div>
  );
}

export default Config;
