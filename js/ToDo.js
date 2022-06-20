const toDoFrm = document.querySelector('.to-do-form');
const toDoWirte = document.querySelector('.wirte-todo');
const toDoList = document.querySelector('#todo-list');
const btnAdd = document.querySelector('.btn-add-list');

const SAVEDTODOS_KEY = 'savedtoDos';
const arrList = [];

function DeleteToDoList(e) {
  console.log(e);

}

function savedToDoList(savedtoDos) { // localstorage에 todolist 저장
  console.log(savedtoDos)
  localStorage.setItem(SAVEDTODOS_KEY, arrList);
  JSON.stringify(arrList); // 배열을 localstorage에 넣기 위해 string으로 변환시키고
  console.log(JSON.stringify(arrList));
}

function AddToDoList(newList) { // list를 li태그에 담고 화면에 보여줌
  //🌈
  const liEl = document.createElement('li');
  const sapnEl = document.createElement('span');
  sapnEl.innerText = newList;
  const btnEl = document.createElement('button');
  btnEl.innerText = `🌈`;
  btnEl.addEventListener('click', DeleteToDoList); // 버튼 클릭시 삭제하는 함수 실행
  liEl.append(sapnEl);
  liEl.append(btnEl);
  toDoList.append(liEl);
  savedToDoList(newList);
  
}

function ToDOListSbm(e) {
  e.preventDefault();
  const listValue = toDoWirte.value; // 내가 input에 쓴 list
  toDoWirte.value = ""; //list 쓰고 엔터 누르면 input을 다시 비운다.
  arrList.push(listValue); // 배열에 내가 작성한 list 담기
  console.log(arrList);
  AddToDoList(listValue);

}

toDoFrm.addEventListener('submit', ToDOListSbm);

// const getToDoList = localStorage.getItem();