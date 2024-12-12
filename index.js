//  1 no. question

function calculateDifference(a1, a2) {
    return a1 - a2;
  }
  
  
  const result = calculateDifference(10, 5);
  console.log(result);

//   2 no. question 

function isOdd(number) {
    return number % 2 !== 0;
  }
  
  console.log(isOdd(5));  
  console.log(isOdd(4));  

//  3 no. Question

function findMin(numbers) {
    return Math.min(...numbers);
  }
  
  const numbers = [5, 2, 9, 1, 7];
  console.log(findMin(numbers));

//   4. no. Question
function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

const evenNumbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(evenNumbers));

// 5 no Question
 
function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
  }
  
 
  const sort_numbers = [5, 2, 9, 1, 7];
  console.log(sortArrayDescending(sort_numbers));

//   6 no. Question
  function lowercaseFirstLetter(str) {
    return str.replace(/^./, (match) => match.toLowerCase());
  }
  
  console.log(lowercaseFirstLetter("Hello"));  
  console.log(lowercaseFirstLetter("World"));  
  
//   7 no. Question

function findAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return numbers.length === 0 ? 0 : sum / numbers.length;
  }
 
  const Avg_numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(findAverage(Avg_numbers));

//   8 no. Question

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    }
    return false;
  }
  console.log(isLeapYear(2020));  
  console.log(isLeapYear(1900)); 