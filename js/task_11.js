function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
 const price = message.split(' ').length * pricePerWord;
  
    return price;


  // Пиши код выше этой строки
}