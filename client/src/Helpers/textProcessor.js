export const cleaner = (inputText) => {
  const wordArray = inputText.match(/"([^"]+)"|'([^']+)'|[^" ,]+/g);
  if (wordArray) {
    for (let i = 0; i < wordArray.length; i++) {
      wordArray[i] = wordArray[i].replace(/^["']|["']$/g, '');
    }
  }
  return wordArray;
};

export const replacer = (data, inputData) => {
  let newData = data;
  for (let i = 0; i < inputData.length; i++) {
    let regEx = new RegExp(inputData[i], 'ig');
    newData = newData.replace(regEx, 'xxxx');
  }
  return newData;
};
