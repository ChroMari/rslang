import UserWordType from '../utils/types/UserWordType';
import { URL_API_USERS } from '../constants/Url';

const updateUserWord = async ({ userToken, userId, wordId, word }: UserWordType) => {
    await fetch(`${URL_API_USERS}/${userId}/words/${wordId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(word),
    });
};

export default updateUserWord;
