import {createSlice} from "@reduxjs/toolkit";
import {fetchSignUser} from "../API/user/fetchSignUser";
import {fetchCreateUser} from "../API/user/fetchCreateUser";
import {fetchUpdateToken} from "../API/user/fetchUpdateToken";

const getLocalDateUser = () => {
  const data = localStorage.getItem('user-info-1221');
  let result = {userName: null, userToken: null, userId: null,};

  if (data) result = JSON.parse(data);

  return {
    ...result,
    openModal: false,
    typeModal: 'signIn',
    loading: false,
    error: '',
  }
};

const initialState = getLocalDateUser();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleOpenModal(state) {
      state.openModal = true;
    },

    toggleCloseModal(state) {
      state.openModal = false;
      state.error = '';
    },

    toggleTypeModal(state, action) {
      state.typeModal = action.payload.type;
      state.error = '';
    },

    closeUser(state) {
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
      const {token, name, userId} = action.payload;

      state.userToken = token;
      state.userName = name;
      state.userId = userId;

      state.error = '';
      state.loading = false;
      state.openModal = false;

      localStorage.setItem('user-info-1221', JSON.stringify({
        userToken: token,
        userName: name,
        userId: userId,
      }));
    },
    // @ts-ignore
    [fetchSignUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // @ts-ignore
    [fetchCreateUser.pending]: (state) => {
      state.loading = true;
      // state.error = '';
    },
    // @ts-ignore
    [fetchCreateUser.fulfilled]: (state) => {
      state.loading = false;
      state.error = '';
    },
    // @ts-ignore
    [fetchCreateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // @ts-ignore
    [fetchUpdateToken.fulfilled]: (state, action) => {
      state.userToken = action.payload.token;
    },

    // @ts-ignore
    [fetchUpdateToken.rejected]: (state) => {
      state.userName = null;
      state.userToken = null;
      state.userId = null;

      localStorage.removeItem('user-info-1221');

      state.openModal = true;
    }
  },
});

export const {
  toggleOpenModal,
  toggleCloseModal,
  toggleTypeModal,
  closeUser
} = userSlice.actions;

export default userSlice.reducer;