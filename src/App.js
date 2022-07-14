import React from "react";
import './App.css';
import Technologies from './Technologies.js';
import Header from './Header.js';

const App = () => { // компонента - функция, возвращающая разметку JSX (HTML внутри JS)
    //новый комментарий - проверяем git
    return (
        <div>
            <Header />
            <Technologies />
        </div>
    );
}

export default App;
