function convertToVowels(word) {
    newWord = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            newWord += word[i];
        }
    }

    return newWord;
}

const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels)