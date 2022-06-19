const loginFrm = document.querySelector('.login-form');
const userName = document.querySelector('.user-name');
const btnLogin = document.querySelector('.btn-login');
const welcomUser = document.querySelector('.welcome-user');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function LoginChk(e) {
  e.preventDefault();
  const nameValue = userName.value;
  loginFrm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, nameValue);
  console.log(userName);
  welcomUser.classList.remove(HIDDEN_CLASSNAME);
  welcomUser.innerText = `Hello ${nameValue} 🖤`;
}

const getUserName = localStorage.getItem(USERNAME_KEY);

if(getUserName === null) {
  loginFrm.classList.remove(HIDDEN_CLASSNAME);
  loginFrm.addEventListener('submit', LoginChk);
} else {
  welcomUser.innerText = `Hello ${getUserName} 🖤`;
  welcomUser.classList.remove(HIDDEN_CLASSNAME);
}

