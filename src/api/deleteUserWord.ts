import UserWordType from '../utils/types/UserWordType';
import {URL_API_USERS} from '../constants/Url';

const deleteUserWord = async ({ userToken, userId, wordId }: UserWordType) => {
    await fetch(`${URL_API_USERS}/${userId}/words/${wordId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
};

export default deleteUserWord;
