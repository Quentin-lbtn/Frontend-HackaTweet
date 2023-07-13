import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { token: null, username: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      // TO UPDATE 
      login: (state, action) => {
        console.log('login data', action.payload);
        state.value.token = action.payload.token;
        state.value.username = action.payload.username;
      },
      logout: (state) => {
        state.value.token = null;
      }
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;