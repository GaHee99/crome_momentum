const toDoForm = document.getElementById('todo-form')
const toDoList = document.getElementById('todo-list')
const toDoInput = toDoForm.querySelector('input')
//const toDoInput = document.querySelector("#todo-form input")
const toDos = [] //saving array
const TODOS_KEY = 'todos'
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) //string으로 array에 저장한다.
}
function deleteToDO(event) {
  const li = event.target.parentElement //어떤 버튼을 클릭됐늕를 알고있다.
  console.log(li)
  li.remove()
}

function paintToDo(newTodo) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  const button = document.createElement('button')
  button.innerText = 'X'
  button.addEventListener('click', deleteToDO)
  li.appendChild(span)
  li.appendChild(button)
  span.innerText = newTodo
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ''
  toDos.push(newTodo) //array에 저장
  paintToDo(newTodo)
  saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

function sayhello(item) {
  console.log('This is the turn of', item)
  //arry에 어떤 item때문에 이 함수가 실행됐는지 알 수 있다.
}
const savedToDos = localStorage.getItem(TODOS_KEY)
if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos) //js에서 사용 가능한 array로 만들어준다
  parsedToDos.forEach((item) => console.log('this is the turn of', item)) //array의 element각각에 function 적용가능
}
