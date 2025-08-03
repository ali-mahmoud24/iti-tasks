//

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-btn');
const modalMessage = document.getElementById('modal-text');

loginBtn.addEventListener('click', function () {
  const enteredUsername = usernameInput.value;
  const enteredPassowrd = passwordInput.value;

  const login = { username: enteredUsername, passowrd: enteredPassowrd };

  if (enteredUsername === 'admin' && enteredPassowrd === '123') {
    modal.style.display = 'flex';
    modalMessage.innerText = 'Welcome to our website!';
  } else {
    modal.style.display = 'flex';
    modalMessage.innerText = 'Not Registered, please register first';
  }
});

modalBtn.addEventListener('click', function () {
  modal.style.display = 'none';

  usernameInput.value = '';
  passwordInput.value = '';
});
