import React from 'react';
import Book from './pages/Book/Book';
import { ModalUser } from './components/modalUser/ModalUser';
import { Layout } from './pages/Layout';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { DifficultyLevel } from './sprint/DifficultyLevel';
import { useSelector } from 'react-redux';
import { StoreType } from './redux/store';
import { SprintResults } from './sprint/SprintResults';
import { Sprint } from './sprint/Sprint';

function App() {
    const currentTime = useSelector((state:StoreType) => state.toggleTime.currentTime)
    const wordsArray = useSelector((state:StoreType) => state.addSprintWords.sprintWords)
    return (
        <div className="App">
            <ModalUser />

            <Header />
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/book" element={<Book />} />
                <Route path="/sprint" element={currentTime === 0 ? <SprintResults/> : (wordsArray.length !== 30 ? <DifficultyLevel /> : <Sprint />)} />
            </Routes>
        </div>
    );
}

export default App;
