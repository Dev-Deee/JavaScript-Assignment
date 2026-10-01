const {getPassScores, addToScore, squareOfScore, addBook, getSchoolschedule, caculateExpenses, getGrades, checkHealthyItem, checkOrder, getDiscountedProducts, getEvenNumbersInArray, getEvenNumbersInTwoArray, sortNumbersInArraysortNumbersInArray,
  sortNumbersInArray
}  = require("./array_classwork");
const {getEvenNumbers} = require("./learning_Testing");

test("check score", ()=> {
  let numbers = [40,45,50,55,60,65,70,75,80,90];
  let answer = [70,75,80,90];
  let result = getPassScores(numbers)
  expect(result).toEqual(answer)
})

test("adds to score", ()=> {
  let numbers = [85, 92, 78, 88, 95];
  let answer = [90,97,83,93,100];
  let result = addToScore(numbers)
  expect(result).toEqual(answer)
})

test(" square of numbers", ()=> {
  let numbers = [2,4,6,8,10];
  let answer = [4,16,36,64,100];
  let result = squareOfScore(numbers)
  expect(result).toEqual(answer)
})

test("add book to members", ()=> {
  let numbers = ["Emily", "Jack", "Sophia", "Daniel"];
  let answer = [
    "Emily==>Avengers", 
    "Jack==>Doomsday", 
    "Sophia==>Dr Strange", 
    "Daniel==>Coco"
  ];
  let result = addBook(numbers)
  expect(result).toEqual(answer)
})

test(" school schedule", ()=> {
  let numbers = ["9:00AM", "11:00AM","1:00PM", "3:00PM", "5:00PM"];
  let answer = ["1:00PM", "3:00PM", "5:00PM"];
  let result = getSchoolschedule(numbers)
  expect(result).toEqual(answer)
})

test("adds expenses", ()=> {
  let expenses = { 
        "groceries": 150, 
        "dining out": 100, 
        "transportation": 50, 
        "entertainment": 80 
    };
  let answer = 380;
  let result = caculateExpenses(expenses)
  expect(result).toBe(answer)
})

test(" student score gives corect grade", ()=> {
  let numbers = [95, 78, 85, 60, 45, 92];
  let answer = ['A', 'C', 'B', 'D', 'F', 'A'];
  let result = getGrades(numbers)
  expect(result).toEqual(answer)
})

test("adds expenses", ()=> {
   let shoppingList = [
  { name: 'Apples', category: 'Fruits', isHealthy: true },
  { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
  { name: 'Carrots', category: 'Vegetables', isHealthy: true },
  { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
  { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
  { name: 'Soda', category: 'Beverages', isHealthy: false }
];
  let answer = [
    { name: 'Apples', category: 'Fruits', isHealthy: true },
    { name: 'Carrots', category: 'Vegetables', isHealthy: true },
    { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }
  ];
  let result = checkHealthyItem(shoppingList)
  expect(result).toEqual(answer)
})

test("find orders", ()=> {
   let orders = [
  { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
  { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
  { id: 3, items: [{ price: 30, quantity: 1 }] },
];
  let answer = [
  { id: 2, items: [{ price: 100, quantity: 1 }]}
];
  let result = checkOrder(orders)
  expect(result).toEqual(answer)
})

test("calculate discount", ()=> {
   const products = [ 
		{ name: "Laptop", price: 1200 }, 
		{ name: "Phone", price: 600 },
	 	{ name: "Mouse", price: 25 }, 
		{ name: "Monitor", price: 200 } 
  ];

  let answer = [
  { name: "Laptop", originalPrice: 1200, discountedPrice: 1080 },
  { name: "Phone", originalPrice: 600, discountedPrice: 540 },
  { name: "Monitor", originalPrice: 200, discountedPrice: 180 }
]
  let result = getDiscountedProducts(products)
  expect(result).toEqual(answer)
})

test("checks the even number in an array", ()=> {
  let arrayOne = [2,1,6,7,10];
  let arrayTwo = [11,4,12,5,8];

  let answer = [12,10,8,6,4,2]
  let evenNumberResult = getEvenNumbersInArray(arrayOne, arrayTwo)
  let result = sortNumbersInArray(evenNumberResult)
  expect(result).toEqual(answer)
})







