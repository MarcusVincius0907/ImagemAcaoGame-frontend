import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Service from '../services';
import { activeChild } from '../utils/activeChild';
import { clockStatus } from '../utils/clockStatus';

const service = new Service()

const initialState = {
  general: null,
  teams: null,
};


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

 
  
});

export const selectTeams = (state) => state.main.teams;
export const selectActiveChild = (state) => state.main.activeInfo;
export const selectTurn = (state) => state.main.turn;
export const selectWords = (state) => state.main.words;
export const selectScoreSelected = (state) => state.main.scoreSelected;
export const selectClockStatus = (state) => state.main.clockStatus;
export const selectIsOpenModal = (state) => state.main.isOpenModal;

export const { setGeneral, setTeams } = configSlice.actions;

export default configSlice.reducer;

