import React from 'react';
//import {Link} from 'react-router-dom';

function FlashcardList({ flashcard, handleDeleteFlashcard }) {
    return (
        <div>
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
                        X
                    </button>
                </td>
            </tr>
        </div>
    );
}

export default FlashcardList;