import {createAsyncThunk} from "@reduxjs/toolkit";
import {URL_API_SIGNIN} from "../../../constants/Url";

export const fetchSignUser = createAsyncThunk(
  'user/fetchSignUser',
  async (user: { email: string, password: string }, {rejectWithValue}) => {

    const createTokenData = await fetch(URL_API_SIGNIN, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    });

    if (createTokenData.status === 404) {
      return rejectWithValue('Неккоректный email адрес.');
    }

    return await createTokenData.json();
  }
);
