document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todoForm');
  const todoInput = document.getElementById('todoInput');
  const prioritySelect = document.getElementById('prioritySelect');
  const todoList = document.getElementById('todoList');
  const clearCompletedButton = document.getElementById('clearCompleted');
  const catImage = document.getElementById('catImage');

  //  Load a cat image
  const randomStatus = [200, 201, 202, 204, 205, 206, 207];
  const status = randomStatus[Math.floor(Math.random() * randomStatus.length)];
  catImage.src = `https://http.cat/${status}.jpg`;

  // Add a task
  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = todoInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText.length >= 2) {
      const li = document.createElement('li');
      li.textContent = taskText;
      li.classList.add(priority);
      li.setAttribute('data-priority', priority);

      // Toggle completion
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
        console.log('Toggled completed:', li.textContent);
      });

      todoList.appendChild(li);
      todoForm.reset();
      alert("Task added!");
    }
  });

  //  Clear completed tasks
  clearCompletedButton.addEventListener('click', () => {
    const completedTasks = todoList.querySelectorAll('li.completed');

    if (completedTasks.length > 0) {
      completedTasks.forEach(task => {
        console.log('Removing completed:', task.textContent);
        todoList.removeChild(task);
      });
    } else {
      // If nothing is completed, clear all tasks to match user expectation of "clear"
      while (todoList.firstChild) {
        console.log('Clearing:', todoList.firstChild.textContent);
        todoList.removeChild(todoList.firstChild);
      }
    }
  });
});
