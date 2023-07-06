function isPalindrome(word) {
    // reverse the word
    reversedWord = '';
    for (let i = word.length-1; i >= 0; i--) {
        reversedWord += word[i];
    }

    // validate if palindrome
    if (word === reversedWord) {
        return true;
    } else {
        return false;
    }
}

const word = 'racecar'
if (isPalindrome(word)) {
    console.log('It is a palindrome!')
} else { 
    console.log('It is not a palidnrome.')
}