import {createAsyncThunk} from "@reduxjs/toolkit";
import {URL_API_USERS} from "../../../constants/Url";

export const fetchUpdateToken = createAsyncThunk(
  'user/fetchUpdateToken',
  async ({userId, userToken}: {userId: string, userToken: string}) => {
    const userTokenData = await fetch(`${URL_API_USERS}/${userId}/tokens`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${userToken}`,
      },
    });
  }
);
