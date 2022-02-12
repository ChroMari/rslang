import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {URL_API_SIGNIN, URL_API_USERS} from "../../constants/Url";

//   {
//   userName: null,
//   userToken: null,
//   userId: null,
//
//   openModal: false,
//   typeModal: 'signIn',
//   loading: false,
//   error: false,
// };

export const fetchSignUser = createAsyncThunk(
  'user/fetchSignUser',
  async (user: {email: string, password: string}) => {

      const createTokenData = await fetch(URL_API_SIGNIN,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
      });

    if (!createTokenData.ok) throw new Error();

    return await createTokenData.json();
  }
);

export const fetchCreateUser = createAsyncThunk(
  'user/fetchCreateUser',
  async (user: {name: string, email: string, password: string}, {dispatch}) => {
      const userCreateData = await fetch(URL_API_USERS, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      // console.log(userCreateData);

    if (!userCreateData.ok) throw new Error();

    const userData = await userCreateData.json();

    dispatch(fetchSignUser({email: userData.email, password: userData.password}));
  // console.log(userData)
    return userData;
  }
);


const getLocalDateUser = () => {
  const data = localStorage.getItem('user-info-1221');
  let result = {userName: null, userToken: null, userId: null,};

  if (data) result = JSON.parse(data);

  return {
    ...result,
    openModal: false,
    typeModal: 'signIn',
    loading: false,
    error: false,
  }
};

const initialState = getLocalDateUser();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleOpenModal (state) {
      state.openModal = true;
    },

    toggleCloseModal (state) {
      state.openModal = false;
      state.error = false;
    },

    toggleTypeModal (state, action) {
      const {type} = action.payload;

      state.typeModal = type;
      state.error = false;
    },

    closeUser (state) {
      state.userName = null;
      state.userToken = null;
      state.userId = null;

      localStorage.removeItem('user-info-1221');
    }
  },
  extraReducers: {
    // @ts-ignore
    [fetchSignUser.pending]: (state) => {
      state.loading = true;
    },
    // @ts-ignore
    [fetchSignUser.fulfilled]: (state, action) => {
        state.userToken = action.payload.token;
        state.userName = action.payload.name;

        state.error = false;
        state.loading = false;
        state.openModal = false;
    },
    // @ts-ignore
    [fetchSignUser.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },

    // @ts-ignore
    [fetchCreateUser.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    // @ts-ignore
    [fetchCreateUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.error = false;
    },
    // @ts-ignore
    [fetchCreateUser.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    }
  },
});

export const {toggleOpenModal,
  toggleCloseModal,
  toggleTypeModal,
  closeUser} = userSlice.actions;

export default userSlice.reducer;
