// Palindrome
function checkPalindrome (word){
    let cleanStr = word.toLowerCase()
    let reversedStr = ''
    for(let i = cleanStr.length -1; i >= 0; i--){
        reversedStr += cleanStr[i]
    }
    if(cleanStr === reversedStr) {
        return true
    }
    return false
}
const str = 'Malayalam'
console.log(checkPalindrome(str));


// Count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('Nadeem'));