import React from 'react';
import Button from '../../../../../components/Button/Button';

import './_BookCardFooter.scss';
import WordType from '../../../../../utils/types/WordType';

type Word = Pick<WordType, 'audio' | 'audioMeaning' | 'audioExample'>;

type Props = Word & { playAudio: (list: Array<string>) => void };

const BookCardFooter: React.FC<Props> = ({ audio, audioMeaning, audioExample, playAudio }) => {
    const audioList = [audio, audioMeaning, audioExample];

    return (
        <div className="book-card-footer">
            <Button
                className="book-card-footer__btn book-card-footer-audio__btn"
                onClick={() => playAudio(audioList)}
            />
            <Button className="book-card-footer__btn book-card-footer-hard__btn">сложное</Button>
            <Button className="book-card-footer__btn book-card-footer-learn__btn">выучил</Button>
        </div>
    );
};

export default BookCardFooter;
