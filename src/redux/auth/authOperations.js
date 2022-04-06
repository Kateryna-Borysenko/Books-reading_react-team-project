import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUserApi,
  loginUserApi,
  logOutApi,
} from '../../utils/bookReadApi';

// export const registerUser = createAsyncThunk(
//   'auth/register',
//   async (userData, thunkApi) => {
//     try {
//       const {data} = await registerUserApi(userData);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );
export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      console.log('registerUser is running. Data is: ', credentials);
      const data = await registerUserApi(credentials);
      console.log('registerUser completed'); //credentials - учётные данные
      return data;
    } catch (error) {
      console.log('registerUser error');
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const data = await loginUserApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (token, thunkApi) => {
    try {
      logOutApi(token);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

