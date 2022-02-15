import React from 'react';
import Book from './pages/Book/Book';
import {Header} from "./components/header/Header";
import {ModalUser} from "./components/modalUser/ModalUser";
import {Layout} from "./pages/Layout";

function App() {
    return <div className="App">
        <ModalUser />
        <Layout />
        <Book />
    </div>;
}

export default App;
