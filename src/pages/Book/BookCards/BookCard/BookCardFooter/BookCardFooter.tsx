import React from 'react';
import Button from '../../../../../components/Button/Button';

import './_BookCardFooter.scss';
import WordType from '../../../../../utils/types/WordType';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '../../../../../redux/slices/userSlice';
import { toggleWord } from '../../../../../redux/slices/wordsSlice';
import { bookSelectors } from '../../../../../redux/slices/bookSlice';
import { BOOK_HARD_SECTION } from '../../../../../constants/Book';

type Word = Pick<WordType, 'audio' | 'audioMeaning' | 'audioExample' | 'userWord' | '_id'>;

type Props = Word & { playAudio: (list: Array<string>) => void };

const BookCardFooter: React.FC<Props> = ({ audio, audioMeaning, audioExample, playAudio, userWord, _id }) => {
    const classNameHard =
        userWord?.difficulty === 'hard'
            ? `book-card-footer__btn book-card-footer-hard__btn active`
            : 'book-card-footer__btn book-card-footer-hard__btn';

    const classNameLearn =
        userWord?.difficulty === 'easy'
            ? `book-card-footer__btn book-card-footer-learn__btn active`
            : 'book-card-footer__btn book-card-footer-learn__btn';

    const dispatch = useDispatch();

    const audioList = [audio, audioMeaning, audioExample];

    const section = useSelector(bookSelectors.section);
    const userToken = useSelector(userSelectors.userToken);
    const userId = useSelector(userSelectors.userId);

    const handleClick = (type: string) => {
        dispatch(
            toggleWord({
                wordId: _id,
                difficult: type,
                userToken,
                userId,
            }),
        );
    };

    return (
        <div className="book-card-footer">
            <Button
                className="book-card-footer__btn book-card-footer-audio__btn"
                onClick={() => playAudio(audioList)}
            />
            {userId && (
                <>
                    <Button className={classNameHard} onClick={() => handleClick('hard')}>
                        сложное
                    </Button>
                    {section !== BOOK_HARD_SECTION && (
                        <Button className={classNameLearn} onClick={() => handleClick('easy')}>
                            выучил
                        </Button>
                    )}
                </>
            )}
        </div>
    );
};

export default BookCardFooter;
