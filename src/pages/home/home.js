import styles from './home.module.css'
import Header from '../../components/atoms/Header'
import TeamsContainer from '../../components/molecules/TeamsContainer';
import InfoContainer from '../../components/molecules/InfoContainer';
import { useState, useEffect } from 'react';
import Service from '../../services';
import { eventEmitter } from '../../services/eventEmitter';
import { useDispatch } from 'react-redux';
import { start } from  '../../store/mainSlice'



function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(start())
    window.addEventListener('keydown', (ev) => {
      if(ev.keyCode === 13){
        eventEmitter.dispatch("enterPress")
      }
    })
  },[]);

  return (
    <div className={` bg-ia-purple-dark h-full w-full overflow-auto pb-5`}>
      <Header></Header>
      <TeamsContainer></TeamsContainer>
      <InfoContainer></InfoContainer>
    </div>
  );
}

export default Home;
