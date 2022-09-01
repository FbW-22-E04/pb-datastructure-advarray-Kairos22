// 1. Total Orders
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

let result = orders.reduce(function (acc, obj)

{return acc + obj.amount;}, 0);

console.log(result);
console.log('---------------------1');

// 2.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const increment = arrayOfNumbers.map((el) => el + 1)

console.log(increment);
console.log('----------------------2');

// 3. Filter Evens

function filterEvens (array){

    const filtered = array.filter( (el) => el % 2 == 0);

    return filtered;

}

console.log(filterEvens([1,2,3,11,12,13]));
console.log(filterEvens([22,2,31,110,6,13]));
console.log('--------------------------3');

// 4. Filter Friends

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];


function filterFriends (array, query) {

   return array.filter(item => {

        if (item.includes(query)) {
            
            console.log(item[0].toUpperCase() + item.slice(1)); 
            
            return item[0].toUpperCase() + item.slice(1)
        }
    })

    

}


console.log(filterFriends(friends, 'ka'));
console.log(filterFriends(friends, "e"));
console.log('-----------------------------4');

// 5. Sum Up
function sum(arr) {
  const result = arr.reduce((acc, item) => (acc += item), 0);
  return result;
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));
console.log('---------------------5');

// 6. Square Root
function squareRoot(arr) {
  const result = arr.map((item) => Math.sqrt(item));
  return result;
}

console.log(squareRoot([4, 64, 9]));
console.log('---------------------6');
