import { useState } from 'react';
import './style.css'

const _Options = [
  {
    
    title: 'Tempo da mimica',
    items: [
      {id: 0, name: '1m', selected: true},
      {id: 1, name: '2m', selected: false},
      {id: 2, name: '5m', selected: false},
    ]
    
  },

  {
    
    title: 'Quantidade de rodadas',
    items: [
      {id: 0, name: '5', selected: true},
      {id: 1, name: '10', selected: false},
      {id: 2, name: '15', selected: false},
    ]
    
  },

  {
    
    title: 'Quantidade de palavras',
    items: [
      {id: 0, name: '3', selected: true},
      {id: 1, name: '5', selected: false},
      {id: 2, name: '10', selected: false},
    ]
    
  },

  

 
]


function GeneralConfig(){
  const [options, setOptions] = useState(_Options)

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