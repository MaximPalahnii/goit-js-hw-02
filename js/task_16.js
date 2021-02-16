function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки

const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0,maxLength);
  }
  return newArray
    
    // Пиши код выше этой строки
  }