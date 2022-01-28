import styles from "./style.module.css";
import TeamCard from '../../atoms/TeamCard';
import Service from "../../../services";
import { useState, useEffect } from 'react';
import { eventEmitter } from '../../../services/eventEmitter'

import { useSelector, useDispatch } from 'react-redux';
import {
  getTeams,
  selectTeams
} from '../../../store/mainSlice';

function TeamsContainer(){

  const teams = useSelector(selectTeams);
  const dispatch = useDispatch();

  useEffect(() => {
    
  },[]);


  return(
    <div className="flex flex-wrap sm:flex-nowrap mt-10 max-w-container w-full m-auto px-2 sm:px-12">
      <TeamCard team={teams? teams[0] : null} ></TeamCard>
      <div className="hidden sm:block  h-full min-h-[250px] w-6 bg-ia-purple-light mx-6 rounded-md"></div>
      <div className="mt-5 sm:mt-0 w-full">
        <TeamCard team={teams? teams[1] : null} ></TeamCard>
      </div>
    </div>
  )
}

export default TeamsContainer;