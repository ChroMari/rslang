import { createSlice } from '@reduxjs/toolkit';
import { fetchSignUser } from '../../api/user/fetchSignUser';
import { fetchCreateUser } from '../../api/user/fetchCreateUser';
import { fetchUpdateToken } from '../../api/user/fetchUpdateToken';
import { StoreType } from '../store';

const getLocalDateUser = () => {
    const data = localStorage.getItem('user-info-1221');
    let result = { userName: null, userToken: null, userId: null };

    if (data) result = JSON.parse(data);

    return {
        ...result,
        openModal: false,
        typeModal: 'signIn',
        loading: false,
        error: '',
    };
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
        },
    },
    extraReducers: {
        [fetchSignUser.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchSignUser.fulfilled.type]: (state, action) => {
            const { token, name, userId } = action.payload;

            state.userToken = token;
            state.userName = name;
            state.userId = userId;

            state.error = '';
            state.loading = false;
            state.openModal = false;

            localStorage.setItem(
                'user-info-1221',
                JSON.stringify({
                    userToken: token,
                    userName: name,
                    userId: userId,
                }),
            );
        },
        [fetchSignUser.rejected.type]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        [fetchCreateUser.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchCreateUser.fulfilled.type]: (state) => {
            state.loading = false;
            state.error = '';
        },
        [fetchCreateUser.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [fetchUpdateToken.fulfilled.type]: (state, action) => {
            state.userToken = action.payload.token;
        },

        [fetchUpdateToken.rejected.type]: (state) => {
            state.userName = null;
            state.userToken = null;
            state.userId = null;

            localStorage.removeItem('user-info-1221');

            state.openModal = true;
        },
    },
});

export const userSelectors = {
    userName: (store: StoreType) => store.user.userName,
    userToken: (store: StoreType) => store.user.userToken,
    userId: (store: StoreType) => store.user.userId,
};

export const { toggleOpenModal, toggleCloseModal, toggleTypeModal, closeUser } = userSlice.actions;

export default userSlice.reducer;
