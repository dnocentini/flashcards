import React from 'react';
import FlashcardList from '../../components/FlashcardList/FlashcardList';
import "./FlashcardListPage.css";

function FlashcardListPage(props) {
    return (
        <>
        <header>
            <h1>Flashcard Game</h1>
        </header>
        <div className="adm-flashcards">
            <div className="message container">Admin Flashcards</div>
                <FlashcardList
                    props={props}
                    handleDeleteFlashcard={props.handleDeleteFlashcard}
                />
        </div>
        </>
    );
}
export default FlashcardListPage;