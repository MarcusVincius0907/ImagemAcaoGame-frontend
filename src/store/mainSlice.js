import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Service from '../services';
import { activeChild } from '../utils/activeChild';

const service = new Service()

const initialState = {
  teams: null,
  turn: null,
  words: null,
  activeInfo: activeChild.ROUND,
  value: 10
};

export const getTeams = createAsyncThunk(
  'main/getTeams',
  async () => {
    try{
      const resp = await service.getTeams()
      return resp.data.payload
    }catch(e){
      console.log(e);
    }
  }
);

export const mainSlice = createSlice({
  name: 'main',
  initialState,

  reducers: {
    
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeams.fulfilled, (state, action) => {
        state.teams = action.payload;
      });
  },
  
});

export const selectTeams = (state) => state.main.teams;


export default mainSlice.reducer;

