import styles from "./style.module.css";
import { useState, useEffect } from 'react';
import Service from "../../../services";

function TeamCard(props){

 useEffect(() => {
  
 })



  return(
    <div className="w-full max-w-card bg-ia-brown-dark rounded-md min-h-[250px]">

      <div className="w-full bg-ia-purple-light p-2 rounded-t-md">
        <h1 className=" text-white text-3xl">{props?.team?.name}</h1>
      </div>

      <div className="flex p-3 text-ia-purple-dark">
        <div className="w-1/2 ">
          {props?.team?.players.map((v,index) =>
            <div key={index} className={`${styles.itemPlayer}`}>
              <span>{v.name}</span>
            </div>
          )}
          
        </div>
        <div className="w-1/2 pl-5">
          {/* score */}
          <div className="w-full bg-ia-brown-light mt-1 rounded-sm p-2">
            <h2 className="  text-xl">Pontuação</h2>
            {
              props?.team?.scoreInfo?.rounds.length > 0
              ?
                <div className=" text-sm mt-2 ">
                  {props?.team?.scoreInfo?.rounds.map((v,i) =><div key={i}>{`rodada ${v.roundNumber} -> ${v.score} pts `}</div> )}
                </div>
              :  
              <div className=" text-sm mt-2 ">
                <div>Ainda sem resultados...</div>
              </div>
            }
            
          </div>
          {props?.team?.scoreInfo?.rounds.length > 0 
          ?
            <div className="w-full bg-ia-brown-light mt-1 rounded-sm p-2">
              <h2 className=" text-xl  ml-2">{`Total ${props?.team?.scoreInfo?.total} pts`}</h2> 
            </div>
          :
            <></>
          }  
          
        </div>
      </div>

    </div>
  )
}

export default TeamCard;