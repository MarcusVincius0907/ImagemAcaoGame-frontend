
import axios from 'axios';

export default class Service {

  constructor(){
    this.api = axios.create({
      baseURL: 'http://localhost:3000/api'
    })
  }

  async getPlayers(){
    return this.api.get('/players');
  }

  async getTeams(){
    return this.api.get('/team');
  }
}