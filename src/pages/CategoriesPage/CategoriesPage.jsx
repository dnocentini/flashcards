import React from "react";
import "./CategoriesPage.css";

const CategoriesPage = props => {
    return (
        <>
        <header>
            <h1>Flashcard Game</h1>
        </header>
        <div className="categories">
            <div className="message">Categories</div>
            <div className="text add">Addition</div>
            <div className="text sub">Subtraction</div>
            <div className="text mult">Multiplication</div>
            <div className="text divi">Division</div>
        </div>
        </>
    );
};

export default CategoriesPage;