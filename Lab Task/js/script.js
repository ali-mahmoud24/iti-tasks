// // Lab 1

// // 1.✅

// // 2.
// //  JavaScript is a scriptting language used to make web pages interactive

// // 3.
// /*
// - Fetch data from API
// - Input validation
// - Interactive pages
// -Animations
// */

// // 4.
// // Prints my name to the console
// console.log('Ali Mahmoud');
// // Prints my age to the console
// console.log(23);
// // Prints my favourite language to the console
// console.log('JavaScript');

// // 5. ✅

// // Lab 2

// // 1. 2. ✅
// // camelCase
// const firstName = 'Ali';
// // PascalCase
// const LastName = 'Mahmoud';
// const age = 22;
// // snake_case
// const is_student = true;

// // 3.
// // const 24name = 'Invalid variable naming'

// // const !name = 'Invalid variable naming'
// // const #name = 'Invalid variable naming'
// // const %name = 'Invalid variable naming'
// // const &name = 'Invalid variable naming'

// // const var = 'Invalid variable naming'
// // const class = 'Invalid variable naming'

// // 4.
// console.log(firstName);
// console.log(LastName);
// console.log(age);
// console.log(is_student);

// // 5.

// try {
//   unDefinedfunction();
//   console.log(undefinedVariable);
// } catch (error) {
//   console.error(`Error that I handeled: ${error}`);
// }

// // Lab 3
// // 1.
// const userGrade = prompt('Please enter your grade: ');

// // 2. 3.
// if (userGrade >= 90 && userGrade <= 100) {
//   alert('You got Excellent');
// } else if (userGrade >= 75 && userGrade <= 89) {
//   alert('You got Good');
// } else if (userGrade >= 60 && userGrade <= 74) {
//   alert('You Passed');
// } else {
//   alert('You Failed');
// }

// // Lab 4
// // 1.
// const randomPrice = Math.random() * (100 - 10) + 10;
// // 2.
// const formattedPrice = randomPrice.toFixed(2);
// console.log(formattedPrice);

// // Lab 5
// // 1.
// const productName = prompt('Please enter product name: ');
// // 2.
// if (productName.includes('Laptop')) {
//   // condition
// }
// if (productName.indexOf('b') >= 0) {
//   // condition
// }
// if (productName.startsWith('a')) {
//   // condition
// }

// // 3.
// const productNameLowerCase = productName.toLowerCase();

// Lab 6
const date = new Date();
const days = 3;
console.log(date.getDate() + days);

// Lab 7
// 1.
// let userPassword = prompt('Please enter your password :');
// const correctPassword = 'password';
// let attempts = 3;
// while (userPassword !== correctPassword || attempts === 0) {
//   attempts--;
//   if (attempts === 0) {
//     alert('You have no more attempts');
//     break;
//   }
//   alert(`Incorrect password, you have ${attempts} attempts left`);
//   userPassword = prompt('Please enter your password :');
//   if (userPassword == correctPassword) {
//     alert('Logged in succesfully');
//     break;
//   }
// }

// Lab 8
for (let index = 1; index <= 50; index++) {
  if (index % 2 === 0) {
    continue;
  } else if (index === 37) {
    break;
  } else {
    console.log(index);
  }
}

// // Lab 9
// const userNumber = prompt('Please enter a number:');
// for (let i = 1; i <= userNumber; i++) {
//   let line = '';
//   for (let j = 1; j <= i; j++) {
//     line += '*';
//   }
//   console.log(line);
// }

// // Lab 10
// // 1.
// let amount = prompt('Please enter the initial amount:');
// amount = parseFloat(amount);

// const taxRate = 0.1;
// const discount = 50;

// // 2.
// const tax = amount * taxRate;
// amount += tax;
// amount -= discount;

// // 3.
// console.log(`Final price after tax and discount: ${amount.toFixed(2)}`);

// // Lab 11
// // 1.
// const password = prompt("Enter a password to check it's strength:");

// // 2.
// let hasLetter = false;
// let hasNumber = false;

// for (let i = 0; i < password.length; i++) {
//   let code = password.charCodeAt(i);

//   // Check if character is a letter (A-Z or a-z)
//   if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//     hasLetter = true;
//   }

//   // Check if character is a digit (0-9)
//   if (code >= 48 && code <= 57) {
//     hasNumber = true;
//   }
// }

// // for (let i = 0; i < password.length; i++) {
// //   let char = password[i];

// //   if (isNaN(char)) {
// //     hasLetter = true;
// //   } else {
// //     hasNumber = true;
// //   }
// // }

// // 3.
// if (password.length >= 8 && hasLetter && hasNumber) {
//   alert('Your password is STRONG');
// } else {
//   alert('Your password is WEAK');
// }

// Lab 12

for (let i = 0; i < 5; i++) {
  let code = 'PROMO';

  const digit = generateRandomNumber();

  code += digit;
  console.log(code);
}

function generateRandomNumber() {
  const rand = Math.floor(Math.random() * 9000) + 1000;
  return rand;
}

// Lab 13
// 1.
(function () {
  // 2.
  const config = {
    API_KEY: 'sdsadsadsadsadsadsa',
    BACKEND_URL: 'http:asdsadsadsadsa.com',
  };
  console.log(config);
})();

// Lab 14
// 1.
try {
  // 1
  const num1 = parseFloat(prompt('Enter first number:'));
  const operator = prompt('Enter operator (+, -, *, /):');
  const num2 = parseFloat(prompt('Enter second number:'));
  let result;

  // 2.
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Invalid number input.');
  }

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero.');
    }
    result = num1 / num2;
  } else {
    throw new Error('Unsupported operator.');
  }

  alert(`Result: ${result}`);
} catch (error) {
  console.error('Error:', error.message);
  alert(error.message);
} finally {
  console.log('Calculation attempt completed.');
}
