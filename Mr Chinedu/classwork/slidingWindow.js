
let input = [2,1,5,6,2,1];
let input2 = [11,5,4,5,1,9,2,20];


function slidingWindow(userInput) {
  let largest = -1;
  let newArray = [];

  for (let position = 0; position < userInput.length; position++) {
    let addition = userInput[position] + userInput[position + 1] + userInput[position + 2];
    if( addition > largest){
      largest = addition;
      newArray = [userInput[position], userInput[position + 1], userInput[position + 2]];
    }
  }
  return newArray;
}
console.log(slidingWindow(input2));