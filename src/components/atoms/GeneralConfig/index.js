import { useState } from 'react';
import './style.css'

import {
  getGeneralOptions,
  selectGeneral
} from '../../../store/configSlice';
import { useSelector } from 'react-redux';


function GeneralConfig(){
  const [options, setOptions] = useState(null)
  const options = useSelector(selectGeneral)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGeneralOptions())
    setOptions(selectorGeneralOptions)
  }, []);
  

  function selectOption(indexOp, index){
    
    let opts =  [...options]
    opts[indexOp].items.map((v) => v.selected = false)
    opts[indexOp].items[index].selected = true
    setOptions(opts)    
    
  }
  
  return (
    <div className=" bg-ia-brown-dark w-full h-full text-ia-purple-dark p-5 rounded-md">

      <div className="  font-bold text-xl pb-5">
        Configurações Gerais
      </div>

      <div className="grid grid-cols-2 grid-rows-2">
        {options.map((op,indexOp) => 
          <div key={indexOp} className="pb-5">
            <div className=" text-sm  mb-2">
              {op.title}
            </div>
            <div className=" flex">
              {op.items.map((v,i) => 
                <div key={i} onClick={() => selectOption(indexOp, i)} className={[ v.selected? " selected " : "" , " itemOption mr-2 "]}>
                  <div className="text-md ">{v.name}</div>
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