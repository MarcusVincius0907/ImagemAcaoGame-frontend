import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Service from '../services';
import { activeChild } from '../utils/activeChild';
import { clockStatus } from '../utils/clockStatus';

const service = new Service()

const initialState = {
  general: null,
  teams: null,
};

export const getGeneralOptions = createAsyncThunk(
  'main/getGeneralOptions',
  async (opts) => {
    try{
      const resp = await service.getGeneralOptions(opts)
      console.log("getGeneralOptions",resp);
      return resp.data.payload
    }catch(e){
      console.log(e);
    }
  }
);


export const configSlice = createSlice({
  name: 'config',
  initialState,

  reducers: {
    setGeneral: (state, action) => {
      state.general = action.payload;
    },

    setTeams: (state, action) => {
      state.teams = action.payload;
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getGeneralOptions.fulfilled, (state, action) => {
        state.general = action.payload;
      })
      
  },

 
  
});

export const selectTeams = (state) => state.config.teams;
export const selectGeneral = (state) => state.config.general;


export const { setGeneral, setTeams } = configSlice.actions;

export default configSlice.reducer;

