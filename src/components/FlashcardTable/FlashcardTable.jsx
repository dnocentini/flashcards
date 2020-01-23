import React from 'react';
import "./FlashcardTable.css";

function FlashcardTable({flashcard}) {
    return (
        <div>
            <table className="tableFlashcards">
                <thead>
                    <tr className="tableHeader">
                        <th>Question</th>
                        <th>Correct Answer</th>
                        <th>Wrong Ans1</th>
                        <th>Wrong Ans2</th>
                        <th>Wrong Ans3</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default FlashcardTable;