let addBtn = document.getElementById('add-button');
let taskList = document.getElementById('task-list');
let inputTask = document.getElementById('input-task');

updateDeleteBtns();

function updateDeleteBtns() {
    let deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach(function (item) {
        item.onclick = function () {
            let taskSelect = item.parentElement;
            taskSelect.remove();
        }
    })
}

function addTask(taskName) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `
    <span class="name">${taskName}</span>
    <span class="delete">Удалить</span>`
    taskList.appendChild(listItem);
    updateDeleteBtns();
}

addBtn.onclick = function () {
    let userInput = inputTask.value;
    if (userInput !== ''){
        inputTask.value = '';
        addTask(userInput);
    }
}