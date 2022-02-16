import React from 'react';
import { DifficultyLevel } from './sprint/DifficultyLevel';
import { Sprint } from './sprint/Sprint';
import { useSelector } from 'react-redux';
import { RootStore } from './sprint/Store';
import { SprintResults } from './sprint/SprintResults';

function App() {
    const difficultyLevel = useSelector((state: RootStore) => state.chooseDifficultyLevel.difficultyLevel)
    const wordsArray = useSelector((state: RootStore) => state.addSprintWords.sprintWords)
    const currentTime = useSelector((state: RootStore) => state.toggleTime.currentTime)

    return (
        <div className="App">
            {
                currentTime === 0
                    ? <SprintResults/>
                    : (wordsArray.length !== 30 ? <DifficultyLevel /> : <Sprint />)
            }
        </div>
    );
}

export default App;
