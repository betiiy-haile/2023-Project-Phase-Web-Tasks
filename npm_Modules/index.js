const lodash = require("lodash");
nums = [3, 6, 1, 9, 4, 6, 8, 2];

const sorted = lodash.sortBy(nums)
const evens = lodash.filter(nums, (num) => num % 2 == 0);
const maxVal = lodash.max(nums)
const chunks  = lodash.chunk(nums, 3)
const Sum = lodash.sum(nums)

const debounce_fun = lodash.debounce(function () {
  console.log("Function debounced after 1000ms!");
}, 2000);

debounce_fun();

console.log(`The Sorted array : ${sorted}`);
console.log(`Even elemnets of the array : ${evens}`);
console.log(`Maximum elemnts of the array: ${maxVal} `)
console.log(`Small chunks of the array : ${chunks}`)
console.log(`The Sum of the array Elements : ${Sum}`);

// this file doesn't run since we have uninstalled lodash package 
// to run this file without any error you have to install lodash package "npm install lodash"