import styles from "./style.module.css";

import { useState, useEffect } from 'react';

function WordsDisplay(props) {

  const [formatedList, setFormatedList] = useState([]);
  const [selectWordOnce, setSelectWordOnce] = useState(false);
  

  useEffect(() => {
    formatList();
    setSelectWordOnce(false)
  }, [props.words]);

  function formatList(){

    let list = []

    if(props?.words)
      props.words.forEach(({word, value}) => {
        list.push({word, value, selected: false })
      });

    setFormatedList(list)

  }

  function selectWord(index){
    setSelectWordOnce(true);
    let list = [...formatedList]
    list[index].selected = true;
    setFormatedList(list)
    
  }


  return (
    
    <div className="w-full flex  flex-col  bg-ia-purple-med p-3 rounded-md h-full">
      { console.log('rendered')}
      <div className="text-white opacity-50 text-sm">
        Clique para selecionar (você só pode selecionar uma palavra).
      </div>
      <div className="mt-3">

        <div className=" bg-ia-brown-dark flex rounded-md">

          <div className="w-full p-1">

            <div className="w-full text-white text-md p-2 flex">
              <div className="w-1/2">Palavra</div>
              <div className="w-1/2">Valor</div>
            </div>

            {formatedList.map((v,i) =>
            <div key={i}>
              <div className="flex w-full"   onClick={() => selectWordOnce?  null : selectWord(i)}>
                <div 
                  className=
                  {[
                    `w-1/2 text-ia-purple-dark  text-md p-1 my-1 text-center  ` , 
                    v.selected? ' font-bold bg-white ' : '  bg-ia-brown-light ' ,
                    selectWordOnce? ' ' : ' cursor-pointer '
                  ]}>
                    {v.word}
                  </div>
                <div className="h-1 w-1"></div>
                <div  className=
                  {[
                    `w-1/2 text-ia-purple-dark  text-md p-1 my-1 text-center  ` , 
                    v.selected? ' font-bold bg-white ' : '  bg-ia-brown-light ' ,
                    selectWordOnce? ' ' : ' cursor-pointer '
                  ]}>
                    {v.value}
                  </div>
              </div>
            </div>
             
            )}

            
          </div>


        </div>

      </div>
    </div>
  );
}

export default WordsDisplay;
