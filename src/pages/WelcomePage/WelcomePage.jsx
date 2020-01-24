import React from "react";
import "./WelcomePage.css"

const WelcomePage = props => {
    return (
        <>
        <header>
            <h1>Flashcard Game</h1>
        </header>
        <div className="welcome">
            <div className="message">Welcome</div>
        </div>
        </>
    );
};

export default WelcomePage;