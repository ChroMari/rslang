import React from 'react';
import { DifficultyLevel } from './sprint/DifficultyLevel';
import { Sprint } from './sprint/Sprint';
import { useSelector } from 'react-redux';
import { RootStore } from './sprint/Store';

function App() {
    const difficultyLevel = useSelector((state: RootStore) => state.chooseDifficultyLevel.difficultyLevel)
    const wordsArray = useSelector((state: RootStore) => state.addSprintWords.sprintWords)
    return (
        <div className="App">
            {wordsArray.length !== 30 ? <DifficultyLevel /> : <Sprint />}
        </div>
    );
}

export default App;
