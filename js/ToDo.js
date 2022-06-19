const toDoFrm = document.querySelector('.to-do-form');
const toDoWirte = document.querySelector('.wirte-todo');
const toDoList = document.querySelector('#todo-list');
const btnAdd = document.querySelector('.btn-add-list');


function AddToDoList(newList) {
  //🌈
  console.log(newList)
  const liEl = document.createElement('li');
  const sapnEl = document.createElement('span');
  sapnEl.innerText = newList;
  const btnEl = document.createElement('button');
  btnEl.innerText = `🌈`;
  btnEl.addEventListener('click', (d)=>{
    console.log(d)
    const id = Date.now();
    console.log(id)
  })
  liEl.append(sapnEl);
  liEl.append(btnEl);
  toDoList.append(liEl);
}

function ToDOListSbm(e) {
  e.preventDefault();
  const listValue = toDoWirte.value;
  toDoWirte.value = "";
  AddToDoList(listValue);

}

toDoFrm.addEventListener('submit', ToDOListSbm);