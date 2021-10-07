import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  consultId: ''
}

const slice = createSlice({
  name: 'consult',
  initialState,
  reducers: {
    setStatus(_state, { payload }) {
      return { status : payload }
    }
  }
});

export const { setStatus } = slice.actions;

export default slice.reducer;

