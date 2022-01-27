import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Service from '../services';
import { activeChild } from '../utils/activeChild';
import { clockStatus } from '../utils/clockStatus';
import Copy from '../utils/copy';
import ramdomId from '../utils/generateRandomId';

const service = new Service()

const initialState = {
  general: null,
  generalSum: null,
  teams: [
    {
      id:ramdomId(),
      name: 'Time 1',
      players: [
        { name: 'Jogador 1', showTrash: false},
        { name: 'Jogador 2', showTrash: true},
      ]
    },
    {
      id:ramdomId(),
      name: 'Time 2',
      players: [
        { name: 'Jogador 1', showTrash: false},
        { name: 'Jogador 2', showTrash: true},
      ]
    }
  ],
  selectedTeamForEditting: null,
};

export const getGeneralOptions = createAsyncThunk(
  'main/getGeneralOptions',
  async () => {
    try{
      const resp = await service.getGeneralOptions()
      console.log("getGeneralOptions",resp);
      return resp.data.payload
    }catch(e){
      console.log(e);
    }
  }
);

const formatGeneral = (general) => {
  
  let sum = {time: 0, roundQtd: 0, wordsQtd:0}
  general?.forEach(v => {
    if(v.value === 'time')
      sum.time = v.items?.filter(v => v.selected)[0].value
    if(v.value === 'roundQtd')
      sum.roundQtd = v.items?.filter(v => v.selected)[0].value
    if(v.value === 'wordsQtd')
      sum.wordsQtd = v.items?.filter(v => v.selected)[0].value
  });
  return sum
}

export const configSlice = createSlice({
  name: 'config',
  initialState,

  reducers: {
    setGeneral: (state, action) => {
      state.general = action.payload;
      state.generalSum = formatGeneral(action.payload)
    },

    setTeams: (state, action) => {
      state.teams = action.payload;
    },

    setSelectedTeam: (state, action) => {
      state.selectedTeamForEditting = action.payload
    },

  },

  extraReducers: (builder) => {
    builder
      .addCase(getGeneralOptions.fulfilled, (state, action) => {
        state.general = action.payload;
        state.generalSum = formatGeneral(action.payload)
      })
      
  },

 
  
});


export const selectedOption = (indexOp, index) => (dispatch, getState) => {
  const currentOptions = selectGeneral(getState());
  let opts =  Copy(currentOptions);
  opts[indexOp].items.map((v) => v.selected = false)
  opts[indexOp].items[index].selected = true
  dispatch(setGeneral(opts));
};

export const selectTeams = (state) => state.config.teams;
export const selectedTeam = (state) => state.config.selectedTeamForEditting;
export const selectGeneral = (state) => state.config.general;
export const selectGeneralSum = (state) => state.config.generalSum


export const { setGeneral, setTeams, setSelectedTeam } = configSlice.actions;

export default configSlice.reducer;

