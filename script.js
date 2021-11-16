const word_el = document.getElementById('word');

function getRandomWord() {
    const words = ["congrats", "youre", "the", "murderer"];

    return words[Math.floor(Math.random() * words.length)];
    // it chooses regular numbers from 1 to words array index number length from words array
}

// console.log(getRandomWord());

const correctLetters = ['r', 'e'];
const wrongLetters = [];

function displayWord() {
    const selectedWord = getRandomWord();

    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
             <div>
    `).join('')}
    
    `;

    console.log(word_el.innerText.replace(/\n/g,''));
}

displayWord();