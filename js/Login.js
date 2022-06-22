const loginFrm = document.querySelector('.login-form');
const userName = document.querySelector('.user-name');
const btnLogin = document.querySelector('.btn-login');
const welcomUser = document.querySelector('.welcome-user');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function LoginChk(e) { // form을 숨기고 username을 localstorage에 담고, 화면에 보여준다. 
  e.preventDefault();
  const nameValue = userName.value;
  localStorage.setItem(USERNAME_KEY, nameValue); //localstorage에 username 저장

  loginFrm.classList.add(HIDDEN_CLASSNAME); 
  welcomUser.classList.remove(HIDDEN_CLASSNAME);
  welcomUser.innerText = `Hello ${nameValue} 🖤`;
}

const getUserName = localStorage.getItem(USERNAME_KEY); //localstorage에 담긴 username 을 가져온다

if(getUserName === null) { // localstorage에 username이 없다면
  loginFrm.classList.remove(HIDDEN_CLASSNAME); // login form을 보여주고
  loginFrm.addEventListener('submit', LoginChk); // form 작성 끝나면 LoginChk 실행
} else {
  welcomUser.innerText = `Hello ${getUserName} 🖤`;
  welcomUser.classList.remove(HIDDEN_CLASSNAME);
}

