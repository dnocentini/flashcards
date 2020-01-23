import React from 'react';
import FlashcardList from '../../components/FlashcardList/FlashcardList';
import FlashcardTable from '../../components/FlashcardTable/FlashcardTable';
import "./FlashcardListPage.css";

function FlashcardListPage(props) {
    return (
        <>
        <header>
            <h1>Flashcard Game</h1>
        </header>
        <div className="adm-flashcards">
            <div className="message container">ADM Flashcards</div>
            {props.flashcards.map(flashcard =>
                <FlashcardList
                    flashcard={flashcard}
                    handleDeleteFlashcard={props.handleDeleteFlashcard}
                    key={flashcard._id}
                />
            )}
                <FlashcardTable />
        </div>
        </>
    );
}
export default FlashcardListPage;