const toDoFrm = document.querySelector('.to-do-form');
const toDoWirte = document.querySelector('.write-todo');
const toDoList = document.querySelector('#toDos');
const btnAdd = document.querySelector('.btn-add-list');

const TODOS_KEY = 'saveToDos';
let arrList = [];

function deleteToDoList(e) {
  const li = e.target.parentElement; //list삭제 버튼의 부모element(li태그) 찾기 
  li.remove(); //화면에서의 삭제 
  arrList = arrList.filter((item) => item.id !== parseInt(li.id) ); // 배열 자체에서 삭제를 하기때문에 localstorage까지 id 삭제, li의id 는 stirng이여서 number로 바꿔줌
  saveToDoList(); // filter를 통해 새로 만들어진 배열을 다시 localstorage에 저장 
}

function saveToDoList() { // localstorage에 todolist 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(arrList)); // localstorage에는 문자열만 저장가능, 배열을 문자열로 바꿔줌 JSON.stringify
}

function addToDoList(newList) { // list를 li태그에 담고 화면에 보여줌, newList에 obj를 가져옴
  //🌈
  const liEl = document.createElement('li');
  liEl.id = newList.id;
  const sapnEl = document.createElement('span');
  sapnEl.innerText = newList.list;
  const doneBtnEl = document.createElement('button');
  const btnEl = document.createElement('button');
  btnEl.classList.add('btn-del');
  doneBtnEl.classList.add('btn-done');
  liEl.classList.add('to-do-list');
  doneBtnEl.innerText = `Done!`;
  btnEl.innerText = `Delete!`;
  doneBtnEl.addEventListener('click', ()=> {
    liEl.style.textDecoration = 'line-through';
  })
  btnEl.addEventListener('click', deleteToDoList); // 버튼 클릭시 삭제하는 함수 실행
  liEl.append(sapnEl);
  liEl.append(doneBtnEl);
  liEl.append(btnEl);
  toDoList.append(liEl);
  
}

function toDOListSbm(e) {
  e.preventDefault();
  const listValue = toDoWirte.value; // 내가 input에 쓴 list
  toDoWirte.value = ""; //list 쓰고 엔터 누르면 input을 다시 비운다.
  const toDoListObj = { 
    list : listValue,
    id : Date.now() // 밀리초로 각 list에 id 부여
  }
  arrList.push(toDoListObj); // 배열에 내가 작성한 list 담기 -> obj로 담기
  addToDoList(toDoListObj); // 화면에 보여줄 함수에도 obj로 보내준다 (list를 보여주고 그 list에 id 값을 주기위해)
  saveToDoList(); //localstorage에 list 저장 

}

toDoFrm.addEventListener('submit', toDOListSbm);

const getToDoList = localStorage.getItem(TODOS_KEY);

if(getToDoList !== null) {
  const parsedToDos = JSON.parse(getToDoList);
  arrList = parsedToDos; // 새로고침을 해도 이전에 localstorage에 담겨있던 list들을 그대로 가지고 있는 상태에서 새로운 list를 추가하게 해준다. 
  parsedToDos.forEach(addToDoList);

}
