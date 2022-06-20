import { useEffect, useState } from 'react';
import './style.css'

import {
  getGeneralOptions,
  selectGeneral,
  setGeneral,
  selectedOption,

} from '../../../store/configSlice';
import { useDispatch, useSelector } from 'react-redux';


function GeneralConfig(){
  const options = useSelector(selectGeneral)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGeneralOptions())
  }, []);
  

  function selectOption(indexOp, index){
    dispatch(selectedOption(indexOp, index));
  }
  
  return (
    <div className=" bg-ia-brown-dark w-full h-full text-ia-purple-dark p-5 rounded-md">

      <div className="  font-bold text-xl pb-5">
        Configurações Gerais
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2">
        {options?.map((op,indexOp) => 
          <div key={indexOp} className="pb-5">
            <div className=" text-sm  mb-2">
              {op.title}
            </div>
            <div className=" flex">
              {op.items.map((v,i) => 
                <div key={i} onClick={() => selectOption(indexOp, i)} className={[ v.selected? " selected " : "" , " itemOption mr-2 "]}>
                  <div className="text-md ">{v.value}</div>
                </div>
              )}
              
            </div>
          </div>
        )}

      </div>

    </div>
  )
}

export default GeneralConfig;