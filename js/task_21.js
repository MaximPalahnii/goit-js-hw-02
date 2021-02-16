function findLongestWord(string) {
  // Пиши код ниже этой строки
  
    const words = string.split(' ');
  let longestWord = words[0];
  
  for (const word of words) {
  if (word.length > longestWord.length) {
  longestWord = word;
  }
  }
  return longestWord; 

  // Пиши код выше этой строки
}