const todoList = [];

document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoContainer = document.getElementById('todo-container');

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(text) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoContainer.removeChild(todoItem);
        });

        todoItem.appendChild(deleteButton);
        todoContainer.appendChild(todoItem);
        todoList.push(text);
    }
});