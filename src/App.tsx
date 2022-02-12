import React from 'react';
import Book from './pages/Book/Book';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Book />
            </div>
        </Provider>
    );
}

export default App;
