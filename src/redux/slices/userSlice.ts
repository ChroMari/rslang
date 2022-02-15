import { createSlice } from '@reduxjs/toolkit';
import { StoreType } from '../store';

const initialState = {
    isAuth: true,
    userToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDk5Y2I1NDc1MGQxMDAxNmM5MTI5YyIsImlhdCI6MTY0NDkyNTgwMiwiZXhwIjoxNjQ0OTQwMjAyfQ.fsHmT1DkpTj_Adc7ZORMssuCq9ZUR76PY6888vlklKM',
    userId: '62099cb54750d10016c9129c',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const userSelectors = {
    isAuth: (store: StoreType): boolean => store.user.isAuth,
    userToken: (store: StoreType): string => store.user.userToken,
    userId: (store: StoreType): string => store.user.userId,
};

export default userSlice.reducer;
