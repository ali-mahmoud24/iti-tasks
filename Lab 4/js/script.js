// 1-
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: '2018',
};

function displayCarDetails(car) {
  for (const key in car) {
    console.log(`${key} : ${car[key]}`);
  }
}
displayCarDetails(car);

// 2-
function printObj(obj) {
  for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}
printObj(car);

// 4-
const person = {
  firstName: 'Ali',
  lastName: 'Mahmoud',
  age: 23,
  address: { country: 'Egypt', city: 'Alexandria' },
  job: { position: 'Software Deveolper', yoe: 1 },
};

function printObjNested(obj) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'object') {
      console.log(`Start of Nested Object: ${key}`);
      for (const key in value) {
        console.log(`${key} : ${value[key]}`);
      }
      console.log('End of Nested Object');
    } else {
      console.log(`${key} : ${obj[key]}`);
    }
  }
}
printObjNested(person);

// 5-
const people = [
  { name: 'Ali', age: 25 },
  { name: 'Sara', age: 19 },
  { name: 'Omar', age: 30 },
  { name: 'Laila', age: 22 },
];

function sortObjectArray(objectArray, property, sort = 'asc') {
  return objectArray.sort(function (itemA, itemB) {
    let valueA = itemA[property];
    let valueB = itemB[property];

    const isNumber = typeof valueA === 'number' && typeof valueB === 'number';

    if (isNumber) {
      return sort === 'asc' ? valueA - valueB : valueB - valueA;
    } else {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
      if (valueA < valueB) return sort === 'asc' ? -1 : 1;
      if (valueA > valueB) return sort === 'asc' ? 1 : -1;
      //   in case of equality
      return 0;
    }
  });
}

// Sort by age ascending
console.log(sortObjectArray(people, 'age', 'asc'));

// Sort by age descending
console.log(sortObjectArray(people, 'age', 'desc'));

// Sort by name ascending
console.log(sortObjectArray(people, 'name', 'asc'));

// Sort by name descending
console.log(sortObjectArray(people, 'name', 'desc'));

// 6-

function findMinAndMax(nums) {
  if (nums.length === 0) {
    return;
  }

  let max = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
    if (nums[i] < min) min = nums[i];
  }

  return [min, max];
}

console.log(findMinAndMax([5, 10, 3, 20, 7]));
console.log(findMinAndMax([-4, -10, 0, 8, 2]));

// 7-

function reverseArray(arr) {
  const reversedArray = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    reversedArray.push(element);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['a', 'b', 'c']));

// 8-
function addDiscount(products) {
  products.forEach((product) => {
    const discount = product.price * 0.05;
    product['discountedPrice'] = product.price - discount;
  });
  return products;
}

// 9-
function getDayName(dateStr) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = new Date(dateStr);
  const dayIndex = date.getDay();

  return daysOfWeek[dayIndex];
}

console.log(getDayName('4-2-2025'));

// 10.
const array1 = prompt(
  'Enter a list of numbers separated by commas (e.g. 1,6,5,9,1,2):'
);
const array2 = prompt('Enter another list of numbers (e.g. 5,6,3,1,9):');

const arr1 = array1.split(',').map((num) => parseInt(num.trim()));
const arr2 = array2.split(',').map((num) => parseInt(num.trim()));

function mergeArray(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const result = [];

  const lookup = {};
  for (let index = 0; index < mergedArray.length; index++) {
    const element = mergedArray[index];
    if (!lookup[element]) {
      result.push(element);
      lookup[element] = true;
    }
  }
  return result;
}

alert(mergeArray(arr1, arr2));

// 11-
let done = false;
const phoneBook = [];

while (!done) {
  let operation = prompt('Enter an operation (add, search, exit) :');
  if (operation === 'add') {
    let contactName = prompt('Enter conatct name:');
    let contactPhone = prompt('Enter conatct phone number:');
    const contact = { name: contactName, phone: contactPhone };
    phoneBook.push(contact);
  } else if (operation === 'search') {
    let query = prompt('Search using contact name or number:');

    const searchResult = phoneBook.find(
      (contact) => contact.name === query || contact.phone === query
    );
    if (searchResult) {
      alert(
        `Contact Found, Name: ${searchResult.name}, Phone: ${searchResult.phone}`
      );
    } else {
      alert('Contact not found, try another operation');
    }
  } else if (operation === 'exit') {
    done = true;
  } else {
    alert('Invalid operation');
  }
}

// 12-

function mergeObjects(objA, objB) {
  const merged = {};

  for (const key in objA) {
    merged[key] = objA[key];
  }

  for (const key in objB) {
    if (merged.hasOwnProperty(key)) {
      merged[`${key}_1`] = objB[key];
    } else {
      merged[key] = objB[key];
    }
  }

  return merged;
}

const objA = { name: 'Ali', age: 25 };
const objB = { age: 30, country: 'Egypt' };

const result = mergeObjects(objA, objB);
console.log(result);
