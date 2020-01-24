import React from 'react';
import "./FlashcardList.css";

function FlashcardList({ flashcard, handleDeleteFlashcard }) {
    return (
        <tr>
            <td>{flashcard.question}</td>
            <td>{flashcard.canswer}</td>
            <td>{flashcard.wanswer1}</td>
            <td>{flashcard.wanswer2}</td>
            <td>{flashcard.wanswer3}</td>
            <td>
                <button
                    onClick={() => handleDeleteFlashcard(flashcard._id)}
                >
                    x
                </button>
            </td>
        </tr> 
    );
}

export default FlashcardList;