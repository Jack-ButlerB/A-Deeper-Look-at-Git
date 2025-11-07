export function capitalize(inputtedWord) {
  const removeFirstLetter = inputtedWord.slice(1);
  const capitalizedFirstLetter = inputtedWord.charAt(0).toUpperCase();
  const newWord = capitalizedFirstLetter.concat("", removeFirstLetter);
  return newWord;
}

export function reverseString(inputtedWord) {
  let reversedString = "";
  for (let i = inputtedWord.length; i >= 0; i--) {
    reversedString = reversedString.concat("", inputtedWord.charAt(i));
  }
  return reversedString;
}
