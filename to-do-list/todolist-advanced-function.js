let todoList = JSON.parse(localStorage.getItem('todoList')) || [{ name: 'Make dinner', dueDate: '2025-12-22' },
{
  name: 'Clean',
  dueDate: '2025-10-22'
}]
let add = document.querySelector('.add-js')
add.addEventListener('click', () => {
  todo()
})

renderTodolist()
function renderTodolist() {
  let todoListhtml = ''
  todoList.forEach((todoObject, index) => {


    let { name, dueDate } = todoObject
    let html =
      `<div>${name}</div>
    <div>${dueDate}</div>
    <button class='delete-button delete-js'>Delete</button>
    `
    todoListhtml += html

  })


  let par1 = document.querySelector('.par1')
  par1.innerHTML = todoListhtml

  let deleted = document.querySelectorAll('.delete-js')
  deleted.forEach((deleted, index) => {
    deleted.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodolist()
    })
  })

}

function todo() {
  let input = document.querySelector('.js-input');
  let dateInputElement = document.querySelector('.js-due-date');

  let name = input.value.trim();
  let dueDate = dateInputElement.value;

  // ✅ validation
  if (name === '' || dueDate === '') {
    alert('Please enter both a task name and a due date.');
    return; // ⛔ stop the function
  }

  todoList.push({
    name,
    dueDate
  });

  input.value = '';
  dateInputElement.value = '';

  renderTodolist();
  saveTostorage();
}

function saveTostorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList))
}