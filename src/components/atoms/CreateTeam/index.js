import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function CreateTeam(){

  const [playersList, setPlayersList] = useState([
    { name: '', showTrash: false}
  ])

  const addPlayer = () => {
    let players = [...playersList];
    if(players.length < 10){
      players.push({name: '', showTrash: false})
      setPlayersList(players)
    }
  }

  const removePlayer = (item, index) => {
    let players = [...playersList];
    players.splice(index, 1);
    setPlayersList(players)
    
  }

  const changeTrashBtnFlag = (item, index, opt) => {
    
    if(opt === 'enter'){
      let players = [...playersList];
      if(index > 0){
        players[index].showTrash = true;
      }
      setPlayersList(players)
    }else if(opt === 'leave'){
      let players = [...playersList];
      if(index > 0){
        players[index].showTrash = false;
      }
      setPlayersList(players)
    }
  }

  return(
    <div className=" bg-ia-brown-dark w-full h-full text-ia-purple-dark p-5 rounded-md">
      <div className="pb-5">
        <div className="  font-bold text-xl ">
          Criação dos times
        </div>
        <div className=" text-white opacity-50 text-sm">
          Crie o primeiro time e confira ao lado. Você pode adicionar até 10 jogadores.
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-4 grid-flow-col">
        <div className="m-1 input-group-team ">
          <input className="team" type="text" placeholder="Nome do Time"></input>
        </div>
        {playersList.map((v,i) => 
          <div key={i} onMouseEnter={() => changeTrashBtnFlag(v,i, 'enter') } onMouseLeave={() => changeTrashBtnFlag(v,i, 'leave')} className="m-1 relative left-0  input-group-team">
            <span onClick={() => removePlayer(v,i)} className={[!v.showTrash ? " hidden " : "" ," trashBtn absolute bg-ia-brown-dark rounded-full p-2 flex justify-center items-center text-sm cursor-pointer "]}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
            <input value={v.name} onChange={(e) => {
              let players = [...playersList];
              players[i].name = e.target.value
              setPlayersList(players)
            }} className="player" type="text" placeholder="Nome do Jogador"></input>
          </div>
        )}
        <div className="m-1 flex items-center" onClick={() => addPlayer()}>
          <div className=" bg-ia-brown-light rounded-full w-10 h-10 flex justify-center items-center text-xl cursor-pointer hover:opacity-50">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="">
          <button onClick={() => console.log('hello')} className=" text-white border-0 flex justify-center items-center p-3 bg-ia-purple-dark rounded-sm hover:opacity-50">CONFIRMAR</button>
        </div>
      </div>

    </div>
  )
}