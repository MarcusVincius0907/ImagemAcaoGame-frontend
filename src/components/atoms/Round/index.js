import styles from "./style.module.css";
import { useState, useEffect } from 'react';
import { activeChild } from "../../../utils/activeChild";

function Round(props){

  useEffect(() => {
    
  });

  return(
    <div className={[ props?.active === activeChild.ROUND ? " border-2 border-white " : "  " , " w-full flex  text-white flex-col justify-center bg-ia-purple-med p-3 rounded-md h-full"]}>
      <div className="my-1 opacity-50 text-sm">informações gerais</div>
      <div className="my-1 text-xl font-bold">Rodada {props?.turn?.round}</div>
      <div className="my-1 text-xl ">Vez de {props?.turn?.player?.name} - {props?.turn?.team?.name} </div>
      <div className="my-1 text-sm">Você tem 1 minuto para escolher uma palavra e fazer sua mimica, boa sorte!</div>
      <div className="mt-3 grid justify-center w-full ">
        <div className="my-1 text-sm opacity-50">Clique no botão para inicar sua vez</div>
        <button disabled={props?.active !== activeChild.ROUND} onClick={() => props.readyToStart()} className=" border-0 flex justify-center items-center p-3 bg-ia-purple-dark rounded-sm hover:opacity-50">INICIAR</button>
      </div>
    </div>
  )
}

export default Round;