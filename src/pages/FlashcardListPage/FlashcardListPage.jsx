import React from 'react';
import FlashcardList from '../../components/FlashcardList/FlashcardList';

function FlashcardListPage(props) {
    return (
        <>
            <div>
                {props.flashcards.map(flashcard =>
                    <FlashcardList
                        flashcard={flashcard}
                        handleDeleteFlashcard={props.handleDeleteFlashcard}
                        key={flashcard._id}
                    />
                )}
            </div>
        </>
    );
}
export default FlashcardListPage;