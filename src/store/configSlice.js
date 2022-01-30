import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Service from '../services';
import { activeChild } from '../types/activeChild';
import { clockStatus } from '../types/clockStatus';
import Copy from '../utils/copy';
import ramdomId from '../utils/generateRandomId';
import localStorageHandler from '../services/localStorageHandler'
import { toast } from 'react-toastify';

const service = new Service()

const initialState = {
  general: null,
  generalSum: null,
  teams: [],
  selectedTeamForEditting: null,
};

export const getGeneralOptions = createAsyncThunk(
  'main/getGeneralOptions',
  async () => {
    try{

      
      const resp = await service.getGeneralOptions()

      let configFromStorage = localStorageHandler.getConfig();
      if(configFromStorage) return formatBackGeneral(configFromStorage, resp.data.payload);

      return resp.data.payload
    }catch(e){
      console.log(e);
    }
  }
);

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

const formatBackGeneral = (generalSum, general) => {
  general?.forEach((v,i,arr) => {
    if(v.value === 'time')
      arr[i].items?.forEach((v,i,arr) => v.value === generalSum.time? arr[i].selected = true : arr[i].selected = false ); 
    if(v.value === 'roundQtd')
      arr[i].items?.forEach((v,i,arr) => v.value === generalSum.roundQtd? arr[i].selected = true : arr[i].selected = false );
    if(v.value === 'wordsQtd')
      arr[i].items?.forEach((v,i,arr) => v.value === generalSum.wordsQtd? arr[i].selected = true : arr[i].selected = false );
  });
  return general
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
      .addCase(getTeams.fulfilled, (state, action) => {
        state.teams = action.payload;
      })
      
  },

 
  
});

export const saveConfig = () => async(dispatch, getState) => {
  const generalSum = selectGeneralSum(getState());
  localStorageHandler.saveConfig(generalSum);
  
  const teams = selectTeams(getState());
  try{
    const resp = await service.updateTeams(teams)
  }catch(e){
    console.log(e);
    toast.error('Infelizmente não foi possível realizar essa ação.')
    return;
  }
  
  toast.success('Configurações salvas com sucesso')

};


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

