import React from "react";
import "./css/index.css";

const App = (): JSX.Element => {
    return (
        <>
            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <header id="header">
                            <div id="image01" className="image">
                                <img
                                    src="https://system-dictionary.carrd.co/assets/images/image01.jpg?v97891360700951"
                                    alt=""
                                />
                            </div>
                            <h1 id="text01">The Plural Dictionary</h1>
                        </header>

                        <footer id="footer">
                            <hr id="divider01" />
                            <nav>
                                <ul id="buttons01" className="buttons">
                                    <li>
                                        <a className="button n01" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a className="button n01" href="/about">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a className="button n01" href="/users">
                                            Users
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
