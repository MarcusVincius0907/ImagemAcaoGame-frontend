import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Service from '../services';
import { activeChild } from '../utils/activeChild';
import { clockStatus } from '../utils/clockStatus';

const service = new Service()

const initialState = {
  general: null,
  generalSum: null,
  teams: [],
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
      if(state.teams.length < 2 )
        state.teams.push(action.payload);
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
  let opts =  JSON.parse(JSON.stringify(currentOptions));
  opts[indexOp].items.map((v) => v.selected = false)
  opts[indexOp].items[index].selected = true
  dispatch(setGeneral(opts));
};

export const selectTeams = (state) => state.config.teams;
export const selectGeneral = (state) => state.config.general;
export const selectGeneralSum = (state) => state.config.generalSum


export const { setGeneral, setTeams } = configSlice.actions;

export default configSlice.reducer;

