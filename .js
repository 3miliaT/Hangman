const words = ["javascript", "hangman", "programming", "interface", "developer"];
const word = words[Math.floor(Math.random() * words.length)];
let hiddenWord = Array(word.length).fill('_');
let lives = 7;

document.getElementById('wordContainer').innerHTML = hiddenWord.join(' ');

function guessLetter() {
    let input = document.getElementById('letterInput');
    let letter = input.value.toLowerCase();
    input.value = '';

    if (letter && letter.match(/[a-z]/) && letter.length === 1) {
        if (word.includes(letter)) {
            for (let i = 0; i < word.length; ++i) {
                if (word[i] === letter) {
                    hiddenWord[i] = letter;
                }
            }
        } else {
            --lives;
        }

        document.getElementById('wordContainer').innerHTML = hiddenWord.join(' ');
        document.getElementById('lives').innerHTML = `Lives: ${lives}`;

        if (!hiddenWord.includes('_')) {
            document.getElementById('message').innerHTML = "Congratulations! You've won!";
            disableInput();
        } else if (lives === 0) {
            document.getElementById('message').innerHTML = `Game over! The word was: ${word}`;
            disableInput();
        }
    }
}

function disableInput() {
    document.getElementById('letterInput').disabled = true;
    document.querySelector('button').disabled = true;
}
