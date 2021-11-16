const word_el = document.getElementById('words');

function getRandomWord() {
    const words = ["congrats", "youre", "the", "murderer"];

    return words[Math.floor(Math.random() * words.length)];
    // 1 den başlayıp words dizisinin index numarasına kadar sayıları random olarak gösterir
}

//console.log(getRandomWord());

function displayWord() {
    const selectedWord = getRandomWord();

    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${letter}
            </div>
        `).join('')}
    `;
}

displayWord();