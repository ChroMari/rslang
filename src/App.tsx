import React from 'react';
import Book from './pages/Book/Book';
import {Header} from "./components/header/Header";
import {ModalUser} from "./components/modalUser/ModalUser";
import {Layout} from "./pages/Layout";
import {Routes, Route} from "react-router-dom";

function App() {
    return <div className="App">
        <ModalUser />

        <Header />
        <Routes>
            <Route path="/" element={<Layout />}/>
            <Route path="/book" element={<Book />}/>
        </Routes>
    </div>;
}

export default App;
