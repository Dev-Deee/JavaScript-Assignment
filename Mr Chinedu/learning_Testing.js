

function getEvenNumbers(numbers) {
  let evenNumbersArray = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbersArray.push(number);
        }
    }
    return evenNumbersArray;
}

function getOddNumbers(numbers) {
  let oddNumbersArray = [];
    for (let number of numbers) {
        if (number % 2 !== 0) {
            oddNumbersArray.push(number);
        }
    }
    return oddNumbersArray;
}   

// for each
function addTwo(array){
    let newArray = [];
    array.forEach(element => {
        let answer = element+ 2;
        newArray.push(answer)
    });
    return newArray
}

// map
const multiplyByTwo = (numbers) =>{
    let result = numbers.map((number) =>(number * 2));
    return result
}

// filter
function getEvenNumber(array){
    return array.filter((number)=>(number % 2 === 0))
}

module.exports = { getEvenNumbers, getOddNumbers,addTwo, multiplyByTwo };