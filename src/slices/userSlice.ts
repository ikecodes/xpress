import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface User {
  email: string;
  state: string;
  country: string;
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
  origin: any;
  destination: any;
}
const initialUserState: User = {
  email: '',
  state: '',
  country: '',
  accessToken: '',
  refreshToken: '',
  isLoggedIn: false,
  origin: null,
  destination: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, {payload}: PayloadAction<any>) => {
      state.email = payload.email ? payload.email : state.email;
      state.state = payload.state ? payload.state : state.state;
      state.country = payload.country ? payload.country : state.country;
      state.isLoggedIn = payload.isLoggedIn
        ? payload.isLoggedIn
        : state.isLoggedIn;
      state.accessToken = payload.accessToken
        ? payload.accessToken
        : state.accessToken;
      state.refreshToken = payload.refreshToken
        ? payload.refreshToken
        : state.refreshToken;
    },
    setOrigin: (state, {payload}) => {
      state.origin = payload;
    },
    setDestination: (state, {payload}) => {
      state.destination = payload;
    },
    fullLogOut: state => {
      state.isLoggedIn = false;
      state.email = '';
      state.state = '';
      state.country = '';
      state.accessToken = '';
      state.refreshToken = '';
    },
  },
});

export const {setUser, fullLogOut, setOrigin, setDestination} =
  userSlice.actions;

export default userSlice;
