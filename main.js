// Initialize the array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Original array:', numbers);

// Remove the first element
numbers.shift(); 
console.log('After removing the first element:', numbers);

// Remove the last element
numbers.pop(); 
console.log('After removing the last element:', numbers);

// Add 0 to the beginning of the array
numbers.unshift(0); 
console.log('After adding 0 to the beginning:', numbers);

// Add 11 to the end of the array
numbers.push(11);    
console.log('After adding 11 to the end:', numbers);

// Find and output the sum of all the numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum of all numbers:', sum);

// Find and output the maximum number in the array
const maxNumber = Math.max(...numbers);
console.log('Maximum number:', maxNumber);
