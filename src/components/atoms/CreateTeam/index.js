import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

import {
  setTeams,
  selectedTeam,
  selectTeams,
  setSelectedTeam,
} from '../../../store/configSlice';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Copy from '../../../utils/copy';
import ramdomId from '../../../utils/generateRandomId';



export default function CreateTeam(){

  const [playersList, setPlayersList] = useState([{ name: '', showTrash: false}])
  const [teamName, setTeamName] = useState('')
  const editTeam = useSelector(selectedTeam)
  const teams = useSelector(selectTeams)
  const dispatch = useDispatch()

  useEffect(() => {
    if(editTeam){
      setTeamName(editTeam.name)
      setPlayersList(editTeam.players)
    
    }
  }, [editTeam]);
  

  const addPlayer = () => {
    let players = Copy(playersList);
    if(players.length < 10){
      players.push({name: '', showTrash: false})
      setPlayersList(players)
    }
  }

  const removePlayer = (item, index) => {
    let players = Copy(playersList);
    players.splice(index, 1);
    setPlayersList(players)
    
  }

  const changeTrashBtnFlag = (item, index, opt) => {
    
    if(opt === 'enter'){
      let players = Copy(playersList);
      if(index > 0){
        players[index].showTrash = true;
      }
      setPlayersList(players)
    }else if(opt === 'leave'){
      let players = Copy(playersList);
      if(index > 0){
        players[index].showTrash = false;
      }
      setPlayersList(players)
    }
  }

  const confirmTeam = () => {

    if(teamName && playersList[0].name){


      const team = {
        id: ramdomId(),
        name: teamName,
        players: playersList
      }

      if(editTeam){

        let oldTeam, indexOld, newTeams = null;

        teams?.forEach((v,i) => {
          if(editTeam.id !== v.id){
            oldTeam = v;
            indexOld = i;
          }
        });

        if(oldTeam){
          if(indexOld === 0)
            newTeams = [oldTeam,team]
          else  
            newTeams = [team, oldTeam]
        }else{
          newTeams = [team]
        }

        dispatch(setTeams(newTeams))

      }else if(teams.length < 2){
        let newTeams = [...teams, team]
        dispatch(setTeams(newTeams))
      }
      
      setTeamName('')
      setPlayersList([{ name: '', showTrash: false}])
      dispatch(setSelectedTeam(null))
    }else{
      toast.warn('Precisa preencher o nome do time e ao menos o nome de um jogador')
    }

  }

  return(
    <div className=" bg-ia-brown-dark w-full h-full text-ia-purple-dark p-5 rounded-md">
      <div className="pb-5">
        <div className="  font-bold text-xl ">
          Criação dos times
        </div>
        <div className=" text-white opacity-50 text-sm">
          Clique no time ao lado para edita-los. Você pode adicionar até 10 jogadores em cada time.
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-4 grid-flow-col">
        <div className="m-1 input-group-team ">
          <input value={teamName} onChange={(e) => {
              setTeamName(e.target.value)
            }} className="team" type="text" placeholder="Nome do Time"></input>
        </div>
        {playersList.map((v,i) => 
          <div key={i} onMouseEnter={() => changeTrashBtnFlag(v,i, 'enter') } onMouseLeave={() => changeTrashBtnFlag(v,i, 'leave')} className="m-1 relative left-0  input-group-team">
            <span onClick={() => removePlayer(v,i)} className={[!v.showTrash ? " hidden " : "" ," trashBtn absolute bg-ia-brown-dark rounded-full p-2 flex justify-center items-center text-sm cursor-pointer "]}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
            <input value={v.name} onChange={(e) => {
              let players = Copy(playersList);
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
          <button onClick={() => confirmTeam()} className=" text-white border-0 flex justify-center items-center p-3 bg-ia-purple-dark rounded-sm hover:opacity-50">CONFIRMAR</button>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}