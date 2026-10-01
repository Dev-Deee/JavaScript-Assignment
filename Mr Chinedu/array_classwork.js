function getPassScores(array){
    return array.filter((number)=>(number >= 70))
}

const addToScore = (numbers) =>{
    let result = numbers.map((number)=>(number + 5))
    return result
}

const squareOfScore = (numbers) =>{
    let result = numbers.map((number)=>(number * number))
    return result
}

function addBook(members){
    arrayOfBooks = ["Avengers", "Doomsday", "Dr Strange", "Coco"]
    let membership = []
    for(let count = 0; count < members.length; count++){
        membership.push(members[count] + "==>" + arrayOfBooks[count])
    }
    return membership
}

function getSchoolschedule(array){
    return array.filter((number)=>(number > "12:00PM" && number < '6:00PM'))
}


function caculateExpenses(numbers){
    let sum = 0
 for (const values in numbers) {
    sum = sum + numbers[values]
 }
 return sum
}

function getGrades(grades){
    return grades.map((grade)=>{
        if(grade >= 90){
            return 'A'
        }else if(grade >= 80){
            return 'B'
        }else if(grade >= 70){
            return 'C'
        }else if(grade >= 60){
            return 'D'
        }else{
            return 'F'
        }
    })
}

function checkHealthyItem(array){
    let result = [];

  array.forEach(item => {
    if(item.isHealthy){
      result.push(item);
    }
  });

  return result;
}

function checkOrder(orders){
    let result = [];
    
    orders.forEach(order => {
        let filteredItems = order.items.filter(item => item.price >= 100);

        if (filteredItems.length > 0) {
        result.push({
            id: order.id,
            items: filteredItems
        });
        }
    });
    return result
}

function getDiscountedProducts(products) {
  return products.filter(product => product.price > 50).map(product => {
      const discountedPrice = product.price * 0.9;

      return {
        name: product.name,
        originalPrice: product.price,
        discountedPrice: discountedPrice
      };
    });
}

function getEvenNumbersInTwoArray(array){
     let newArray = []
    for(let count = 0; count < array.length; count++){
        for(let index = 0; index < array[count].length; index++){
            if(array[count][index] % 2 === 0)
                newArray.push(array[count][index]);
        }
    }
    return newArray;
}

function getEvenNumbersInArray(arrayOne,  arrayTwo){
    let newArray = []
    for(let count= 0; count < arrayOne.length; count++){
        if(arrayOne[count] % 2 === 0){
            newArray.push(arrayOne[count]);
        }
    }
    for(let index= 0; index < arrayTwo.length; index++){
        if(arrayTwo[index] % 2 === 0){
            newArray.push(arrayTwo[index]);
        }
    }
    return newArray;
}



function sortNumbersInArray(array){
    let temporaryStorage = 0;
    for (let index = 0; index < array.length; index++){
      for(let count = 0; count < array.length -1; count++){
        if(array[count] < array[count + 1]){
            temporaryStorage = array[count];
            array[count] = array[count + 1];
            array[count + 1] = temporaryStorage;
        }
      }
    }
    return array;
}

let arrayOne = [2,1,6,7,10];
let arrayTwo = [11,4,12,5,8];
let arrayOfNumbers = [
    [2,1,6,7,10],
    [11,4,12,5,8]
];

let even_Numbers = getEvenNumbersInArray(arrayOne, arrayTwo);
console.log(sortNumbersInArray(even_Numbers))
let evenNumbers = getEvenNumbersInTwoArray(arrayOfNumbers)
console.log(sortNumbersInArray(evenNumbers))


module.exports = {getPassScores,addToScore, squareOfScore,  addBook, getSchoolschedule, caculateExpenses, getGrades, checkHealthyItem, checkOrder, getDiscountedProducts, getEvenNumbersInArray, getEvenNumbersInTwoArray, sortNumbersInArray}