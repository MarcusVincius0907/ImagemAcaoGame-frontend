import { useEffect, useState } from 'react';

import {
  selectGeneralSum,
  selectTeams

} from '../../../store/configSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ViewerConfigOpt() {
  const generalSum = useSelector(selectGeneralSum)
  const teams = useSelector(selectTeams)

  return(
    <div className="bg-ia-brown-dark w-full h-full text-ia-purple-dark p-5 rounded-md flex flex-col justify-evenly">
        <div className="bg-ia-brown-light w-full mt-5 p-5 rounded-md">
          <div className=" font-bold text-xl">Tempo da Mimica: {generalSum?.time} min</div>
          <div className=" font-bold text-xl">Quantidade de Palavras: {generalSum?.wordsQtd}</div>
          <div className=" font-bold text-xl">Quantidade de Rodadas: {generalSum?.roundQtd}</div>
        </div>

        <div className="flex w-full">

          {teams?.map((v,i) => 
            <div className="m-3 w-full mt-5">
              <div className=" bg-ia-brown-light w-full rounded-md">
                <div key={i} className=" bg-ia-purple-dark text-white text-xl w-full p-2 rounded-t-md ">
                  {v.name}
                </div>

                <div className="p-2 flex flex-col justify-center items-center">
                  {v.players?.map((p,i) => 
                    <div key={i} className=" m-1 w-10/12  text-center text-lg text-white bg-ia-brown-dark px-5 py-2 rounded-sm"> 
                      {p.name}
                    </div>
                  )}
                 

                </div>

              </div>
            </div>
          )}


          

        </div>
        <div className="p-3 w-full mt-5">
          <button onClick={() => console.log('hello')} className=" w-full text-white border-0 flex justify-center items-center p-3 bg-ia-purple-dark rounded-sm hover:opacity-50">SALVAR</button>
        </div>

    </div>
  )
}