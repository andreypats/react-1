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
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                <img alt={""} src={"https://avatars.mds.yandex.net/i?id=0b539fa0b4966504fd262589ba91f5f6-4571049-images-thumbs&n=13"}/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New posts
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
