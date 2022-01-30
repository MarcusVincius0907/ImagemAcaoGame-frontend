import styles from "./style.module.css";
import { useState, useEffect } from 'react';
import Service from "../../../services";

function TeamCard(props){

 useEffect(() => {
 })

 const checkPlayerTurn = (idPlayer, idTeam) => {
  return props?.team?.currentPlayer?.id === idPlayer && props?.team?.isTurn
 }


  return(
    <div className={[ props?.team?.isTurn? "  border-2 border-white " : "  " , " w-full max-w-card bg-ia-brown-dark rounded-md min-h-[250px]"]}>

      <div className="w-full bg-ia-purple-light p-2 rounded-t-md">
        <h1 className=" text-white text-3xl">{props?.team?.name}</h1>
      </div>

      <div className="flex p-3 text-ia-purple-dark">
        <div className="w-1/2 ">
          {props?.team?.players.map((v,index) =>
            <div key={index} className={[checkPlayerTurn(v.id, v.teamId)? " border-2 border-ia-purple-dark " : "  "  ,` ${styles.itemPlayer} `]}>
              <span className={[checkPlayerTurn(v.id, v.teamId)? " font-bold " : "  ", " text-md sm:text-xl text-ia-purple-dark " ]}>{v.name}</span>
            </div>
          )}
          
        </div>
        <div className="w-1/2 pl-5">
          {/* score */}
          <div className="w-full bg-ia-brown-light mt-1 rounded-sm p-2">
            <h2 className=" text-lg  sm:text-xl">Pontuação</h2>
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
              <h2 className=" text-md sm:text-xl  ml-2">{`Total ${props?.team?.scoreInfo?.total} pts`}</h2> 
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