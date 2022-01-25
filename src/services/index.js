
import axios from 'axios';

export default class Service {

  constructor(){
    this.api = axios.create({
      baseURL: 'http://localhost:3000/api'
    })
    
  }

  //#region home

  async startRound(){
    return this.api.get('/round');
  }

  async nextRound(score){
    return this.api.post('/round', score);
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

  async getScoreboard(){
    return this.api.get('/scoreboard');
  }

  async getWords(){
    return this.api.get('/words');
  }

  //#endregion

  

  getGeneralOptions(opts){
    //return this.api.get('/turn');
  }

}