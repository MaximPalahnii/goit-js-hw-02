// var.01
function findLongestWord(string = '') {
  let words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// var.02
// function findLongestWord(string = '') {

//   let str = string.split(' ');
//   let LongestWordLenght = 0;
//   let LongestWord = '';

//   for (let i = 0; i < str.lenght; i += 1) {
//     if (str[i].lenght > LongestWordLenght) {
//       LongestWordLenght = str[i].lenght;
//       LongestWord = str[i];
//     }
//   }

//   return LongestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
