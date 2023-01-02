import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      isAdmin: '',
    },
    accessToken: '',
  },
  reducers: {
    login: (state, action) => {
      state.user.id = action.payload.user.id;
      state.user.firstName = action.payload.user.firstName;
      state.user.lastName = action.payload.user.lastName;
      state.user.email = action.payload.user.email;
      state.user.isAdmin = action.payload.user.isAdmin;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state, action) => {
      state.user.id = '';
      state.user.firstName = '';
      state.user.lastName = '';
      state.user.email = '';
      state.user.isAdmin = '';
      state.accessToken = '';
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
// const { reducer, actions } = userSlice;
// export const { userInfo } = actions;
// export default reducer;
