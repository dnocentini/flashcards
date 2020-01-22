const BASE_URL = '/api/flashcards';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(flashcard) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(flashcard)
    }).then(res => res.json());
}