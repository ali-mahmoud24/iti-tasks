// global variable available in the window object
var x = 'hello';

console.log(window);
console.log(window.x);

console.log(window.location);
console.log(window.screen.width);
console.log(window.screen.height);

// Removes task bar and extra spaces
console.log(window.screen.availWidth);
console.log(window.screen.availHeight);

// pop-ups and usually blocked
// window.open('https://www.google.com/');

console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.hostname);
console.log(window.location.pathname);

// Redirects the user to the url
// console.log(window.location.assign('https://www.google.com/'));

const p1 = document.getElementById('p1');

p1.innerHTML = `<span>New Content</span>`;
console.log(p1.innerText);

const div1 = document.getElementById('div1');
console.log(div1.innerHTML);

div1.innerText = `New Text from JavaScript`;

div1.innerText += '<p>New Paragraph</p>';
div1.innerHTML += '<p>New Paragraph</p>';

const pList = document.getElementsByTagName('p');
console.log(pList);

for (let index = 0; index < pList.length; index++) {
  console.log(pList[index]);
  const el = pList[index];

  el.style.color = 'red';
  pList[0].style.backgroundColor = 'green';
}

const cList = document.getElementsByClassName('one');
for (let index = 0; index < cList.length; index++) {
  const cItem = cList[index];

  cItem.classList.add('two');
}
// cList[1].classList.toggle('one');
// cList[1].classList.toggle('two');
// cList[1].classList.remove('two');

// const div1 = document.querySelector('#div1');

div1.style.color = 'red';

const inputEl = document.querySelector('input[type=password]');

// console.log(inputEl.value);

// inputEl.setAttribute('type', 'checkbox');

const elementList = document.querySelectorAll('p');

elementList.forEach(function (element) {
  element.style.color = 'green';
});

console.log(elementList);

const newParagaraph = document.createElement('p');
newParagaraph.innerText = 'New text from Js';
newParagaraph.style.backgroundColor = 'cyan';
newParagaraph.setAttribute('id', 'newp1');
div1.appendChild(newParagaraph);

console.log(div1.getAttribute('custom'));

const btn = document.querySelector('#btn');
const userEmail = document.querySelector('#email');
const userPassword = document.querySelector('#password');

console.log(userEmail);
console.log(userPassword);

btn.addEventListener('click', function () {
  console.log(userEmail.value);
  console.log(userPassword.value);
});
