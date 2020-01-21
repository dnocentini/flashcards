const BASE_URL = '/api/flashcards';

export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function create(fcd) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(fcd)
    }).then(res => res.json());
}