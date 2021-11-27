const toDoForm = document.getElementById('todo-form')
const toDoList = document.getElementById('todo-list')
const toDoInput = toDoForm.querySelector('input')
//const toDoInput = document.querySelector("#todo-form input")

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
  paintToDo(newTodo)
}

toDoForm.addEventListener('submit', handleToDoSubmit)
