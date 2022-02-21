import { URL_API_USERS } from '../constants/Url';
import UserWordType from '../utils/types/UserWordType';

const createUserWord = async ({ userToken, userId, wordId, word }: UserWordType) => {
    await fetch(`${URL_API_USERS}/${userId}/words/${wordId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${userToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(word),
    });
};

export default createUserWord;
