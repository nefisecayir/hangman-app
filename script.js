const word_el = document.getElementById('words');
const correctLetters = ["r", "e", "h", "g", "t"]
const wrongLetters = [];

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
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}
    `;
    const w = word_el.innerText.replace(/\n/g,'');
    if (w === selectedWord) {
        console.log('you found it.')
    }
    
    
    //console.log(word_el.innerText.replace(/\n/g,''));
}

displayWord();