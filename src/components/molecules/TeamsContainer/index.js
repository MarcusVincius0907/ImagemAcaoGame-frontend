import styles from "./style.module.css";
import TeamCard from '../../atoms/TeamCard';
import Service from "../../../services";
import { useState, useEffect } from 'react';

function TeamsContainer(){
  const [teams, setTeams] = useState([]);
  const [service, setService] = useState(new Service);

  /* init */
  useEffect(() => {
    getTeams()
  },[]);

  /* changes */
  useEffect(() => {
    console.log(teams);
  });

  async function getTeams(){
    try{
      const resp = await service.getTeams()
      console.log('resp', resp);
      setTeams(resp.data.payload)
     
    }catch(e){
      console.log(e);
    }
  }
  return(
    <div className="flex flex-wrap sm:flex-nowrap mt-10 max-w-container w-full m-auto px-12">
      <TeamCard team={teams[0]}></TeamCard>
      <div className="hidden sm:block  h-full min-h-[250px] w-6 bg-ia-purple-light mx-6 rounded-md"></div>
      <div className="mt-5 sm:mt-0 w-full">
        <TeamCard team={teams[1]}></TeamCard>
      </div>
    </div>
  )
}

export default TeamsContainer;