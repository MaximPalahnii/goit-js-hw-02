function formatString(string, maxLength = 40) {
  // Write code under this line
  const breakSentence = string.split('');

  if (breakSentence.lenght > maxLength) {
    breakSentence.lenght = maxLength;
    return breakSentence.join('') + '...';
  } else if (
    (breakSentence.lenght = maxLength || breakSentence.lenght < maxLength)
  );
  {
    return breakSentence.join('');
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
