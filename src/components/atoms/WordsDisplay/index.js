import "./style.css";
import { useState, useEffect } from 'react';
import { activeChild } from "../../../utils/activeChild";


function WordsDisplay(props) {

  const skeletonList = Array.from(Array(5).keys()) 

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

    props.startTimer(list[index])
    
  }

  const renderWordList = () => {return(
    <>
    {
    formatedList.map((v,i) =>
    <div key={i}>
      <div className={["flex w-full  ", selectWordOnce? ' ' : ' cursor-pointer hover:opacity-50 ']}  onClick={() => selectWordOnce?  null : selectWord(i)}>
        <div 
          className=
          {[
            `w-1/2 text-ia-purple-dark  text-md p-1 my-1 text-center  ` , 
            v.selected? ' font-bold bg-white ' : '  bg-ia-brown-light ' ,
          ]}>
            {v.word}
          </div>
        <div className="h-1 w-1"></div>
        <div  className=
          {[
            `w-1/2 text-ia-purple-dark  text-md p-1 my-1 text-center  ` , 
            v.selected? ' font-bold bg-white ' : '  bg-ia-brown-light ' ,
          ]}>
            {v.value}
          </div>
      </div>
    </div>)
  }
    </>
  )}
  

  const renderSkeletonList = () => {return (
    <>
    {
    skeletonList.map((v,i) =>
    <div key={i}>
      <div className={["flex w-full  ", selectWordOnce? ' ' : ' cursor-pointer hover:opacity-50 ']}>
        <div 
          className=
          {[
            `w-1/2 text-ia-purple-dark  text-md p-1 my-1 text-center bg-ia-brown-light  ` , 
          ]}>
            <span className="skeleton-box skeleton-item-words" ></span>
          </div>
        <div className="h-1 w-1"></div>
        <div  className=
          {[
            `w-1/2 text-ia-purple-dark  text-md p-1 my-1 text-center bg-ia-brown-light  ` , 
          ]}>
            <span className="skeleton-box skeleton-item-words" ></span>
          </div>
      </div>
    </div>
     
    )
  }
  </>
  )}
  
  


  return (
    
    <div className={[ props?.active === activeChild.WORDS_DISPLAY ? " border-2 border-white " : "  " , " w-full flex  flex-col  bg-ia-purple-med p-3 rounded-md h-full"]}>
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

            {props.words !== null ? renderWordList() : renderSkeletonList()}
         
          </div>


        </div>

      </div>
    </div>
  );
}

export default WordsDisplay;
