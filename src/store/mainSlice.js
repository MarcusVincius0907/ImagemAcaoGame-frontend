import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Service from '../services';
import { activeChild } from '../types/activeChild';
import { modalSection } from '../types/modalSection';
import { clockStatus } from '../types/clockStatus';
import { useDispatch } from 'react-redux';

const service = new Service()

const initialState = {
  teams: null,
  turn: null,
  words: null,
  scoreSelected: 0,
  isOpenModal: false,
  modalType: modalSection.FINISHED_ROUND,
  activeInfo: activeChild.ROUND,
  clockStatus: clockStatus.NONE,
  winner: null,
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

export const getWords = createAsyncThunk(
  'main/getWords',
  async () => {
    try{
      const resp = await service.getWords()
      return resp.data.payload
    }catch(e){
      console.log(e);
    }
  }
);

export const getTurn = createAsyncThunk(
  'main/getTurn',
  async () => {
    try{
      const resp = await service.getTurn()
      return resp.data.payload
    }catch(e){
      console.log(e);
    }
  }
);

export const startRound = createAsyncThunk(
  'main/startRound',
  async () => {
    try{
      const resp = await service.startRound()
      return resp.data.payload
    }catch(e){
      console.log(e);
    }
  }
);

export const nextRound = createAsyncThunk(
  'main/nextRound',
  async (score) => {
    try{
      const resp = await service.nextRound({score})
      return resp.data.payload
    }catch(e){
      console.log(e);
    }
  }
);

export const resetGame = createAsyncThunk(
  'main/reset',
  async () => {
    try{
      const resp = await service.resetGame()
      return resp.data.payload
    }catch(e){
      console.log(e);
    }
  }
);

export const setModal = (flag, modalSection) => async(dispatch, getState) => {
  dispatch(setIsOpenModal(flag));
  dispatch(setModalSection(modalSection))
};

export const setWinner = () => async(dispatch) => {

};

export const start = () => async(dispatch) => {
  await dispatch(startRound())
  await dispatch(getTeams())
  await dispatch(getTurn())
};

export const reset = () => async(dispatch) => {
  await dispatch(resetGame())
  await dispatch(start())
};

export const step1 = () => (dispatch) => {
  //dispatch(getTurn())
};

export const step2 = () => (dispatch) => {
  dispatch(getWords())
  dispatch(setActiveChild(activeChild.WORDS_DISPLAY))
};

export const step3 = (score) => (dispatch) => {
  dispatch(setScoreSelected(score))
  dispatch(setActiveChild(activeChild.CLOCK))
  dispatch(setClockStatus(clockStatus.START))
};

export const finishSteps = (isRightAnswer) => (dispatch, getState) => {

  const score = selectScoreSelected(getState());

  if(isRightAnswer){
    dispatch(nextRound(score))
  }else{
    dispatch(nextRound(0))
  }

  dispatch(setModal(false, modalSection.FINISHED_ROUND))
  dispatch(setWords(null))
  dispatch(getTurn())
  dispatch(getTeams())
  dispatch(setClockStatus(clockStatus.RESET))
  dispatch(setActiveChild(activeChild.ROUND))

};

export const mainSlice = createSlice({
  name: 'main',
  initialState,

  reducers: {
    setActiveChild: (state, action) => {
      state.activeInfo = action.payload;
    },

    setScoreSelected: (state, action) => {
      state.scoreSelected = action.payload;
    },

    setClockStatus: (state, action) => {
      state.clockStatus = action.payload;
    },

    setIsOpenModal: (state, action) => {
      state.isOpenModal = action.payload;
    },

    setModalSection: (state, action) => {
      state.modalType = action.payload;
    },

    setWords: (state, action) => {
      state.words = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTeams.fulfilled, (state, action) => {
        state.teams = action.payload;
      })
      .addCase(getWords.fulfilled, (state, action) => {
        state.words = action.payload;
      })
      .addCase(getTurn.fulfilled, (state, action) => {
        state.turn = action.payload;
      })
      .addCase(nextRound.fulfilled, (state, action) => {
        if(action.payload){
          console.log('finish game');
          state.isOpenModal = true;
          state.modalType = modalSection.FINISHED_GAME
          state.winner = action.payload
        }
      });
      
  },
  
});

export const selectTeams = (state) => state.main.teams;
export const selectActiveChild = (state) => state.main.activeInfo;
export const selectTurn = (state) => state.main.turn;
export const selectWords = (state) => state.main.words;
export const selectScoreSelected = (state) => state.main.scoreSelected;
export const selectClockStatus = (state) => state.main.clockStatus;
export const selectIsOpenModal = (state) => state.main.isOpenModal;
export const selectModalType = (state) => state.main.modalType;
export const selectWinner = (state) => state.main.winner;

export const { setActiveChild, setScoreSelected, setClockStatus, setIsOpenModal, setModalSection, setWords } = mainSlice.actions;

export default mainSlice.reducer;

