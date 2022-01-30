
import axios from 'axios';
import localStorageHandler from './localStorageHandler';


export default class Service {

  constructor(){
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL
    })
    
    
  }

  //#region home

  async startRound(){
    const config = localStorageHandler.getConfig()
    return this.api.post('/round-start', {config});
  }

  async nextRound(score){
    return this.api.post('/round-next', score);
  }

  async getTurn(){
    return this.api.get('/turn');
  }

  async getPlayers(){
    return this.api.get('/players');
  }

  async getTeams(){
    return this.api.get('/team');
  }

  async updateTeams(teams){
    return this.api.put('/team', {teams});
  }

  async getScoreboard(){
    return this.api.get('/scoreboard');
  }

  async getWords(){
    return this.api.get('/words');
  }

  async resetGame(){
    return this.api.get('/reset');
  }

  //#endregion

  

  getGeneralOptions(){
    return this.api.get('/config');
  }

}