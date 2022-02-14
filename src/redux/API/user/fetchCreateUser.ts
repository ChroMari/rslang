import {createAsyncThunk} from "@reduxjs/toolkit";
import {URL_API_USERS} from "../../../constants/Url";
import {fetchSignUser} from "./fetchSignUser";

export const fetchCreateUser = createAsyncThunk(
  'user/fetchCreateUser',
  async (user: { name: string, email: string, password: string },
         {rejectWithValue, dispatch}) => {
    const userCreateData = await fetch(URL_API_USERS, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (userCreateData.status === 417) {
      return rejectWithValue('Такая почта зарегестрирована.');
    }

    if (userCreateData.status === 422) {
      return rejectWithValue('Неккоректный email адрес.');
    }

    const userData = await userCreateData.json();

    dispatch(fetchSignUser({email: user.email, password: user.password}));

    return userData;
  }
);
