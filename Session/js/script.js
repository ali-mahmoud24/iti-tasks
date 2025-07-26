const arr = [10, 20, 30, 40, 50];

console.log(arr[1]);

console.log(arr.length);

// Add and delete from the end
arr.push(50);
arr.push(60, 70);
arr.pop();
console.log(arr);

// Add and delete from the start
arr.unshift(1);
arr.unshift(2, 3, 4);
arr.shift();
console.log(arr);

// Delete from startIdnex, deleteCount (Number of items that will ne deleted)
arr.splice(3, 2);
console.log(arr);

// delete from startIdnex, deleteCount (Number of items that will ne deleted) and then replace it by the following items

arr.splice(4, 1, 500, 600, 700);
console.log(arr);

// Delete zero items and add theses items at index 6
arr.splice(6, 0, 44, 55, 66, 77);
console.log(arr);

// function that leaves array elements that meets the boolean condition (return true)
const filteredArray = arr.filter(function (item) {
  return item > 100;
});
console.log(filteredArray);

const roles = ['admin', 'user', 'employee', 'manager'];
const filteredArr = roles.filter(function (item) {
  // return item.indexOf('r') >= 0;
  return item.includes('r');
});

console.log(filteredArr);

const arrayOfObj = [
  { fName: 'admin', age: 50 },
  { fName: 'user', age: 20 },
  { fName: 'employee', age: 30 },
  { fName: 'manager', age: 60 },
];

const filteredArrayOfObj = arrayOfObj.filter(function (obj) {
  return obj.age >= 25;
});
console.log(filteredArrayOfObj);

// both point at the same memory addreess (refrence type)
const arr2 = arr;

arr2.push(800);
console.log(arr);
console.log(arr2);

// sort strings
arr.sort();
console.log(arr);

// Ascending sort
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);

// Descending sort
arr.sort(function (a, b) {
  return b - a;
});
console.log(arr);

// Reverse array items
arr.reverse();
console.log(arr);

const newArr = [0, 1, 2, 3, 4, 5];
// Returns a copy of a section of an array. For both start and end (exclusive)
console.log(newArr.slice(0, 2));

// Return a new array
console.log(newArr.concat(101, 102, 103));
console.log(newArr.concat([101, 102, 103]));

const concatedArray = newArr.concat(arrayOfObj);
console.log(newArr);
console.log(arrayOfObj);
console.log(concatedArray);

newArr.forEach(function (item, index) {
  console.log(`Index: ${index}, ${item}`);
});
