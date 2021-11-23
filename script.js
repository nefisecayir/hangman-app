const word_el = document.getElementById('words');
const popup = document.getElementById('popup-container');
const msg_el = document.getElementById('success-message');
const wrletters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const alert = document.getElementById('alert')

const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();

function getRandomWord() {
    const words = ["congrats", "youre", "the", "murderer", "uwu"];

    return words[Math.floor(Math.random() * words.length)];
    // 1 den başlayıp words dizisinin index numarasına kadar sayıları random olarak gösterir
}

//console.log(getRandomWord());

function displayWord() {
    
    word_el.innerHTML = ` 
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
                    
            </div>
        `).join('')}
    `;

    //console.log(word_el.innerText);

    const w = word_el.innerText.replace(/\n/g,'');
    if (w === selectedWord) {
        //console.log('you found it.')
        popup.style.display = 'flex';
        msg_el.innerText = 'YOU KILLED HIM'
    }
    
    //console.log(word_el.innerText.replace(/\n/g,''));
    
}

function updateWrL(){
    wrletters_el.innerHTML = `
        ${wrongLetters.length>0? '<h3>WRONG LETTERS</h3>': ''}
        ${wrongLetters.map(letter => `<span> ${letter}</span>`)}
    `;
    items.forEach((item,index) => {
        const errorCount = wrongLetters.length;

        if (index < errorCount) {
            item.style = 'block';
        }else {
            item.style.display = 'none';
        }
    })
    if(wrongLetters.length === items.length) {
        popup.style.display = 'flex';
        msg_el.innerText = 'YOU LOST!'
    }
}

function displayAlert() {
    alert.classList.add('show');

    setTimeout(function(){
        alert.classList.remove('show');
    }, 2000);
}

window.addEventListener('keydown', function(e) {
    //console.log(e.key);
    //console.log(e.keyCode);
    if(e.keyCode >= 65 && e.keyCode <= 90){
        // console.log(e.key);
        // console.log(e.keyCode); 
        const letter = e.key;
        
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                displayAlert();
                }
        } else {
            if(!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                //console.log('update the wrong letters.');
                updateWrL();
            }else{
                displayAlert();
            }
        }
    }
    
});

displayWord();