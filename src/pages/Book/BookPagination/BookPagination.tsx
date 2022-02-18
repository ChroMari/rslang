import React from 'react';

import Button from '../../../components/Button/Button';
import BookPaginationContainer from './BookPaginationContainer/BookPaginationContainer';
import { useDispatch, useSelector } from 'react-redux';
import { bookSelectors } from '../../../redux/slices/bookSlice';
import { BOOK_HARD_SECTION } from '../../../constants/Book';

import './_BookPagination.scss';
import { URL_API_WORDS } from '../../../constants/Url';
import { addSprintWords } from '../../../redux/slices/sprintSlices/SprintSlice';
import { NavLink } from 'react-router-dom';

const BookPagination = () => {
    const dispatch = useDispatch()
    const page = useSelector(bookSelectors.page)

    const fetchGetWords = (levelOfDifficulty: string, page: number) => {
        fetch(`${URL_API_WORDS}?group=${levelOfDifficulty}&page=${page}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((result) => {
                dispatch(addSprintWords(result))
            })
            .catch((err) => console.log('error'))
    }

    const onclickSprintFromPageHandler = () => {
      fetchGetWords(`${section}`,page)
    }

    const section = useSelector(bookSelectors.section);
    const isLearnedPage = useSelector(bookSelectors.isLearnedPage);
    return (
        <div className="book-pagination">
            <Button className="book-game__btn" disabled={isLearnedPage && section !== BOOK_HARD_SECTION}>
                Аудиовызов
            </Button>
            {section !== BOOK_HARD_SECTION && <BookPaginationContainer />}
            <NavLink to={'/sprintFromPage'}><Button className="book-game__btn" disabled={isLearnedPage && section !== BOOK_HARD_SECTION} onClick={onclickSprintFromPageHandler}>
                Спринт
            </Button></NavLink>

        </div>
    );
};

export default BookPagination;
