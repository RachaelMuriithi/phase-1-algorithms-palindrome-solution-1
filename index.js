function reverse(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
   word = word.toLowerCase();
  const reversedWord = reverse(word).toLowerCase();

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  reverse the input string 
  if the input string is the same as the reversed string 
    return true 
  else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("AnNa"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Mama"));
  

}

module.exports = isPalindrome;

