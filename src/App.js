import React from "react";
import './App.css';

const App = () => { // компонента - функция, возвращающая разметку JSX (HTML внутри JS)
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    alt={""}
                    src={'https://avatars.mds.yandex.net/i?id=afa7816f8b9e4bfaa5b33c023d3f954b-4571459-images-thumbs&n=13'}/>
            </header>
            <nav className={'nav'}>
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div className={'content'}>
                Main content
            </div>


        </div>
    );
}

export default App;
