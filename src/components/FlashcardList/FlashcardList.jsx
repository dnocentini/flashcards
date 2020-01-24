import React from 'react';
import "./FlashcardList.css";

function FlashcardList({ props, handleDeleteFlashcard }) {
    return (
        <div className="container">
            <table className="tableFlashcards">
                <thead>
                    <tr className="tableHeader">
                        <th>Question</th>
                        <th>Correct Answer</th>
                        <th>Wrong Ans1</th>
                        <th>Wrong Ans2</th>
                        <th>Wrong Ans3</th>
                    </tr>
                </thead>
                <tbody>
                    {props.flashcards.map(flashcard =>
                    <tr className="tableTr">
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
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default FlashcardList;