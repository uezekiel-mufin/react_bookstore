import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Under Construction',
};

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    checkStatus: (state) => {
      const newState = { ...state };
      newState.status = state.status;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
