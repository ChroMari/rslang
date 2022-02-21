type UserWordType = {
    userToken: string;
    userId: string;
    wordId: string;
    word: {
        difficulty: string;
        optional: {};
    };
};

export default UserWordType;
